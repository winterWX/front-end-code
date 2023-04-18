<template>
    <div>
        <h1>大文件数据分片下载---展示</h1>
        <div>{{ textShow }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const textShow = ref(null)
// 大数据下载
async function useDeLoadText() {
    let url = 'https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt'
    // 等待响应头完成
    let resp = await fetch(url);
    // 读取响应体的数据,分片读取数据
    const reader = resp.body.getReader()
    // 进行字节码 转义
    const deCoder = new TextDecoder()
    //const text = deCoder.decode(value)
    const remainChunk = new Uint8Array(0)
    for (; ;) {
        // 分段读取，读取到的是内容二进制
        let { value, done } = await reader.read()
        console.log('===', value,value.lastIndexOf(value.charAt(0)))
        // if (done) { break }
        // const text = deCoder.decode(value)
        // console.log('text=====', text)
        // textShow.value = text
    }
}
useDeLoadText()
</script>
