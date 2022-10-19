<template>
	<h2>局部自定义方式实现聚焦</h2>
	<input v-focus />
</template>

<script>
	 export default{

		 //局部自定义指令
		 directives:{
			focus:{
				
				// 绑定属性或者，添加事件监听器被应用之前调用
				created() {
					
				},
				// 挂载之前调用
				beforeMount(){

				},

				/**
				 * bindings:{
				 *   instance,
                 *   value,
				 *   modifiers,
				 *   arg : 传递给指令的参数,
				 * }
				 * 
				*/
				
				// 挂载之后
				mounted(el,bindings,vNode,prevNode){
					el.focus();
				},
				// VNode 更新前调用
				beforeUpdate() {
					
				},
				// VNode 更新后调用
				updated() {
					
				},
				//组件卸载前
				beforeUnmount() {
					
				},
				//卸载后
				unmounted() {
					
				}
			}
		 },
		 setup(){
			 
		 }
	 }
</script>

<style>
</style>
