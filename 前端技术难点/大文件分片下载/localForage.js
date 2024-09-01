
import localForage from 'localforage'

/**
 * @description 创建数据库实例 每个实例对象都有独立的数据库 不会影响其他实例
 * @param dataBasse 数据库名
 */
export function createInstance(dataBase) {
    return localForage.createInstance({
        name: dataBase
    });
}

/**
 * @description 保存数据
 * @param name 键名
 * @param value 数据
 * @param storeName 仓库/数据库实例
 */
export async function saveData(name, value, storeName) {
    await storeName.setItem(name, value).then(() => {
        // success
    }).catch(err => {
        // err
    })
}

/**
 * @description 获取数据
 * @param name 键名
 * @param storeName 仓库/数据库实例
 * @param callback 回调函数
 */
export async function getData(name, storeName, callback) {
    await storeName.getItem(name).then((val) => {
        // success
        callback(val);
    }).catch(err => {
        // err
        callback(false);
    })
}

/**
 * @description 移除数据
 * @param name 键名
 * @param storeName 仓库/数据库实例
 */
export async function removeData(name, storeName) {
    await storeName.removeItem(name).then(() => {
        // success
    }).catch(err => {
        // err
    })
}

/**
 * @description 删除数据库实例
 * @param dataBasse 数据库名
 */
export async function dropDataBase(dataBase) {
    await localForage.dropInstance({
        name: dataBase
    }).then(() => {
        // success
    }).catch(err => {
        // err
    })
}

