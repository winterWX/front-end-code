// 自行安装axios模块
import axios from 'axios';
// 自行安装streamsaver模块
import streamSaver from 'streamsaver'
import store from "@/store/index"
import {
    createInstance,
    saveData,
    getData,
    removeData,
    dropDataBase
} from "@/utils/localForage.js"

// 基础数据库 存放其他文件的数据库实例名
const baseDataBaseName = "localforageInstance";
// 数据库进度数据主键
const progressKey = "progress";

/**
 * @description 分片下载
 * @param fileName 文件名
 * @param url 下载地址
 * @param dataBaseName 数据库名，用于存放分片数据 每个文件唯一
 * @param progress 下载进度 {} type:continue 续传 again重新下载 cancel取消
 */
export async function downloadByBlock(fileName, url, dataBaseName, progress) {
    if (progress.type) {
        await controlFile(fileName, progress.type, dataBaseName)
    }
    // 创建基础数据库 用于保存文件信息
    const baseDataBase = createInstance(baseDataBaseName);
    // 判断数据库中是否已存在该文件的下载任务
    let isError = false;
    await getData(dataBaseName, baseDataBase, async (res) => {
        if (res && !progress.type) {
            alert("已存在下载进度!");
            isError = true;
        }
    })
    if (isError) {
        return;
    }
    // 创建数据库 用于存储每个文件的分片数据
    const dataBase = createInstance(dataBaseName);

    // 获取文件大小
    const response = await axios.head(url);
    // 文件大小 注意转为数字
    const fileSize = +response.headers['content-length'];
    // 分片大小 注意转为数字
    const chunkSize = +response.headers['buffer-size'];
    // 开始节点
    let start = 0;
    // 结束节点
    let end = chunkSize - 1;
    if (fileSize < chunkSize) {
        end = fileSize - 1;
    }
    // 所有分片信息
    let ranges = [];
    // 计算需要多少分片
    const numChunks = Math.ceil(fileSize / chunkSize);
    // 回写文件大小
    progress.fileSize = fileSize;
    progress.url = url;
    // 保存数据库实例  文件信息
    await saveData(dataBaseName, fileName, baseDataBase);
    if (!progress.progress) {
        // 保存整个文件的进度数据（包括文件名 下载地址 文件大小  方便刷新页面后继续断点续传）
        await saveData(progressKey, progress, dataBase);
    }

    // 保存下载状态至localstorage 如果页面刷新 可重新读取状态 继续下载
    sessionStorage.setItem(dataBaseName, "downloading")

    // 组装参数 用于准备分片下载文件数据
    for (let i = 0; i < numChunks; i++) {
        // 创建请求控制器  用于控制往后端的请求
        const controller = new AbortController();
        const range = `bytes=${start}-${end}`;
        // 如果是续传 先判断是否已下载
        if (progress.type == 'continue') {
            // 先修改状态
            store.commit('setProgress', {
                dataInstance: dataBaseName,
                status: 'downloading'
            })
            let isContinue = false;
            await getData(range, dataBase, async function (res) { if (res) isContinue = true });
            if (isContinue) {
                ranges.push(range);
                // 重置开始节点
                start = end + 1;
                // 重置结束节点
                end = Math.min(end + chunkSize, fileSize - 1);
                continue;
            }
        }

        const config = {
            headers: {
                Range: range
            },
            responseType: 'arraybuffer',
            // 绑定取消请求的信号量
            signal: controller.signal,
            // 文件下载进度监听
            onDownloadProgress: function (pro) {
                if (progress.type == 'stop' || progress.type == 'cancel') {
                    // 终止请求
                    controller.abort();
                }
                // 获取当前分片的下载进度 loaded表示已下载的数量 total表示总数量
                let downProgress = (pro.loaded / pro.total);
                // 计算整个文件的下载进度
                downProgress = Math.round((i / numChunks) * 100 + downProgress / numChunks * 100);

                progress.progress = downProgress
                // 下载完设置为异常 如果是正常下载完成 这个记录会被删除  如果合并失败 则会显示异常
                progress.status = downProgress == 100 ? 'error' : 'stopped'

                store.commit('setProgress', {
                    dataInstance: dataBaseName,
                    fileName: fileName,
                    progress: downProgress,
                    status: downProgress == 100 ? 'success' : 'downloading'
                })

                saveData(progressKey, progress, dataBase);
            }
        };
        try {
            // 开始分片下载
            const response = await axios.get(url, config);
            // 【重点1】 以分片名为key保存分片数据至本地磁盘 如果用localstorage 保存至浏览器内存，数据太多会导致浏览器奔溃 
            await saveData(range, response.data, dataBase);
            // 将分片名保存 方便后面通过key取出分片数据
            ranges.push(range);
            // 重置开始节点
            start = end + 1;
            // 重置结束节点
            end = Math.min(end + chunkSize, fileSize - 1);
        } catch (error) {
            // 如果中途终止请求，会有异常信息 所以在此处理
            if (error.message == "canceled") {
                if (progress.type == 'stop') {
                    // 暂停
                    sessionStorage.setItem(dataBaseName, 'stop')
                } else if (progress.type == 'cancel') {
                    // 取消
                    sessionStorage.removeItem(dataBaseName)
                }
                await controlFile(fileName, progress.type, dataBaseName);
                return;
            }
        }
    }
    // 下载完成后 开始合并分片数据
    // 流操作
    // 如果项目在内网，连接不了外部网络或者没法连接github，需要把streamSaver模块中的mitm.html和sw.js手动拷贝至项目public目录下，然后重新配置mitm地址即可
    // streamSaver.mitm="http://localhost:8081/mitm.html?version=2.0.0"
    const fileStream = streamSaver.createWriteStream(fileName, { size: fileSize });
    const writer = fileStream.getWriter();
    // 循环分片名
    for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i];
        // 从数据库获取分片数据
        await getData(range, dataBase, async function (res) {
            if (res) {
                // 【重点2】读取流 不能将流数据直接存到浏览器内存中 然后合并,这样同样会使浏览器崩溃
                // let 分片数据1 = [];
                // let 分片数据2 = [];
                // let 分片数据 。。。
                // 合并 let array = 分片数据1 + 分片数据2 + ...
                // 这种不可取

                // 读出来就直接生成文件往磁盘写 不在内存中停留
                const reader = new Blob([res]).stream().getReader();
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    // 写入
                    writer.write(value);
                }
                // 判断如果是最后一个分片
                if (i == ranges.length - 1) {
                    // 结束写入  关闭
                    writer.close();
                    // 清空分片数据
                    dropDataBase(dataBaseName);
                    // 基础数据库删除文件数据实例 代表当前文件已下载完成 下载进度表删除当前文件
                    removeData(dataBaseName, baseDataBase);
                    // 清除store
                    store.commit('delProgress', {
                        dataInstance: dataBaseName
                    })
                }
            }
        })
    }
}

/**
 * @description 状态控制
 * @param fileName 文件名
 * @param dataBaseName 数据库名，用于存放分片数据 每个文件唯一
 * @param type下载方式 continue 续传 again重新下载 cancel取消
 */
async function controlFile(filename, type, dataBaseName) {
    if (type == 'continue') {
    } else if (type == 'again') {
        // 删除分片数据
        await dropDataBase(dataBaseName);
        // 基础数据库
        const baseDataBase = createInstance(baseDataBaseName);
        // 删除文件实例
        removeData(dataBaseName, baseDataBase);
    } else if (type == 'cancel') {
        // 删除分片数据
        await dropDataBase(dataBaseName);
        // 基础数据库
        const baseDataBase = createInstance(baseDataBaseName);
        // 删除文件实例
        await removeData(dataBaseName, baseDataBase);
        // 移除store
        store.commit('delProgress', {
            dataInstance: dataBaseName
        })
    } else if (type == 'stop') {
        store.commit('setProgress', {
            dataInstance: dataBaseName,
            status: 'stopped'
        })
    }
}

