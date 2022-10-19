<template>
	<div>watchEffect 的使用</div>
	<button @click="counterChange">点击数据变化</button>
</template>

<script>
	import { ref, watchEffect } from 'vue';
	export default{
		setup(){
			let counter = ref(0);
			
		    const counterChange = ()=>{
				counter.value++;
				// if(counter.value > 10){
				// 	stop();
				// }
			}
			
			//会自定收集依赖
			// watchEffect(()=>{
			// 	console.log('打印111111',counter.value)
			// })
			
			//停止监听
	        //  const stop = watchEffect(()=>{
			// 	console.log('打印111111',counter.value)
			// })
			
			watchEffect((onInvalidate)=>{
				const timer = setTimeout(()=>{
					console.log('请求成功了')
				},200);
				
				onInvalidate(()=>{
				   clearTimeout(timer);
				})
				console.log('counter----=',counter.value)
			});
			
			return{
				counter,
				counterChange
			}
		}
	}
</script>

<style>
</style>
