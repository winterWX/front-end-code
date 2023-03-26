<!-- /**
    nextTick 的使用
    1. 等待下一次Dom更新刷新的方法

    响应式状态改变，DOM更新不是同步，而是异步更新的，vue会将他们缓存在一个队列里，直到最后才一起更新的，这样保证了浏览器渲染时的性能。

    用途： 1.响应式数据变了后想获取dom更新后的布局信息，想删减某些dom内容立马看到效果，等等
    用法： await nextTick(),因为返回的就是一个Promise, 或者传入回调 nextTick(()=>{})

    原理：{
        1.组件更新函数入队：{
            1.组件都是有作用域的，这个作用域是用 reactiveEffect构造函数实例化的
            在 reactiveEffect函数里，会把组件更新函数传递给 queueJob(组件更新函数)进行排队
            队列刷新函数 queueFlush(),将所有的渲染函数加到resolvePromise.then(更新函数)的微任务里，等待调用。调用是所有的渲染函数都会执行
        }
        2.强制执行 ： 在nextTick方法里是直接拿到之前存放 resolvePromise,对这个resolvePromise数 里渲染函类直接进行了异步调用。
    }

*/ -->

<template>
    <div>nextTick的使用</div>
    <button id="counter" @click="increment">{{ count }}</button>
</template>
<script lang='ts' setup>
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
  count.value++

  // DOM 还未更新
  console.log(document.getElementById('counter').textContent) // 0
  console.log('nextTick()',nextTick())
  await nextTick()
  // DOM 此时已经更新
  console.log(document.getElementById('counter').textContent) // 1
}
</script>