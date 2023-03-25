<template>
    <div>
        <span>我是子组件 child</span>
    </div>
</template>


<script>
    import { onBeforeMount,onMounted,onBeforeUpdate,
        onUpdated,onBeforeUnmount,onUnmounted,onRenderTriggered,
        onRenderTracked,onActivated,onDeactivated,onErrorCaptured,
        onServerPrefetch } from 'vue'
    export default {
        name: 'child',
        //  ，
        /***
         *  介于 beforeCreated 和 created 之间此时组件初始化还没有完成，
         *  可以进行数据请求
         *  
        */
        setup(){
            console.log('子组件的setup')
            /**
             *  组件挂载之前调用
             *  
             *  此时 响应式状态已经设置完成，但还没有创建Dom节点
             * 
            */
            onBeforeMount(()=>{ console.log('子组件 - onBeforeMount')}) 
            /**
             * 
             * 在组件挂载完成后执行, 此时可以通过ref引用获取节点元素的详细信息
             * 同步子组件已经被挂载完成，不包括异步组件
             * 自身的DOM树已经插入到父容器上了
             * 
            */
            onMounted(()=>{
                console.log(console.log('子组件 - onMounted'))
            })
            /**
             *  组件因为响应式状态改变，而更新Dom之前调用
             * 
             *  此阶段 可以响应式数据依然有效
             * 
            */
            onBeforeUpdate(()=>{ console.log('子组件 - onBeforeUpdated') })
            /**
             * 
             *  组件因响应式状态发生变更，dom树进行更新后调用
             *  在dom发生更新后想 获取最新信息时可以在此阶段进行操作
             * 
             *  注意不要在onUpdated 钩子中改变组件状态，这将导致无限的更新循环
             * 
            */
            onUpdated(()=>{ console.log('子组件 - onUpdated') })
            /**
             *  卸载之前调用，组件实例的所有功能依然保存
             * 
            */
            onBeforeUnmount(()=>{ console.log('子组件 - onBeforeUnmount') })
            /**
             *   组件实例被卸载了
             *    
             *   1.所以子组件实例已经全部被卸载
             *   2.所有相关的响应式作用都已经停止了
             *   
             *   可以进行一些副作用的清除，如 计时器， dom事件的监听， 服务器的连接
             * 
            */
            onUnmounted(()=>{ console.log('子组件 - onUnmounted') })
            /**
             *  用 keep-alive 包裹的组件
             *  
             *  当组件加到Dom中时调用
             * 
            */
            onActivated(()=>{ console.log('子组件 - onActivated') })
             /**
              * 
             *  用keep-alive包裹的组件
             *  移除Dom时被调用
             * 
            */
            onDeactivated(()=>{ console.log('子组件 - onDeactivated') })
            /**
             * 捕获后代组件传递的错误时调用
             * 
             *  捕获错误的来源
             *   
             *  1.组件渲染
             *  2.setup函数里
             *  3.生命周期钩子里
             *  4.帧听器
             *  5.自定义指令钩子
            */
            onErrorCaptured((/**错误对象,*/ /**发生错误的组件实例,*/  /**错误的详细描述*/ )=>{})  // 可以返回false,让错误上传，表示错误已经处理了
        
        
            // 调试钩子
            /** 当组件在渲染过程中追踪响应式依赖时调用*/
            onRenderTracked(() => {
                
            }),
            /** 当组件 响应式依赖变更，组件需要重新渲染时调用*/
            onRenderTriggered(() => {
                
            }),
            /**
             *  异步渲染钩子
             * 
             *  组件在服务器端渲染之前调用
             * 
             *  如果这个钩子返回了一个 Promise，服务端渲染会在渲染该组件前等待该 Promise 完成。
             *
             *   这个钩子仅会在服务端渲染中执行，可以用于执行一些仅存在于服务端的数据抓取过程。
            */
            onServerPrefetch(()=>{})
        }


        /**
         *  vue 组件的整体 挂载顺序
         * 
         *  挂载阶段
         *  父组件的setup-父组件的onBeforeMount-子组件的setup-子组件的onBeforeMount-子onMounted-父组件的onMounted
         * 
         *  更新阶段 
         *  父组件的onBeforeUpdate-子组件的onBeforeUpdate-子组件的onUpdated-父组件的onUpdated
         *  
         *  卸载阶段
         * 父组件的onBeforeUnmount-子组件的onBeforeUnmount-子组件的onUnmount-父组件的onUnmounted
         * 
        */
    }
</script>
<style>

</style>