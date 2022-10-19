<template>
    <div>
        <span ref="root">我是root节点的内容</span>
    </div>
</template>

<script>

/**
 *  watchEffect的使用
 *      1.自动收集依赖。
 *      2.立即执行传入的函数，同时响应式的追踪其依赖，并在依赖变更时重新运行该函数。
 *      3.会被自动关联到生命周期函数上，当组件卸载时会自动停止侦听，也可以根据返回值手动停止侦听。
 *      2.默认会在在更新dom更新前收集依赖，默认状态时flush:pre
 *      3.flush:{  
 *                 pre  //更新前
 *                 post //更新后
 *                 sync //同步更新
 *              }
 * 
 *  副作用函数：是指函数在返回值是还做了其他事情 
 *            如 修改变量，设置对象成员，终端打印日志，修改Dom,时间监听或订阅。
 * 
*/

import { ref,watchEffect } from 'vue';

export default {
    name: 'watchEffectUse',

    setup(){
        const root = ref(null);
        watchEffect(()=>{
            console.log(root.value)
        },{
            flush:'post'
        })

        //清除副作用
        watchEffect((onInvalidate)=>{
            //异步请求
            const token = asyncOperation(id.value)
            onInvalidate(()=>{
                //当id改变或者watchEffect停止运行时
                token.cancel();
            })
        })
        
        return{
            root
        }
    }
    
};
</script>

<style lang="less" scoped>

</style>