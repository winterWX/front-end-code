<template>
   <h2>自定义指令-实现时间戳格式</h2>
   <input v-time-format.trim="'YYYY/MM/DD HH:mm:ss'" value="1648961117"/>
</template>

<script>
	import { format } from '../../utils/timeFormat.js';
	import dayjs from "dayjs";
	
	export default{
		directives:{
			timeFormat:{
			    // dom 元素属性赋值前调用，所以获取不到属性值
				created(el,bindings){
					//console.log('////',el,el.value)
				},
				
				mounted(el,bindings){
					//默认时间格式
					let defaultTime = "YYYY-MM-DD HH:mm:ss";
				    console.log('bindings--num',bindings.modifiers);  //修饰符对象
					
					if(bindings.value){
						defaultTime = bindings.value;
					}
					
					let timestamp = parseInt(el.value);
					if(timestamp && timestamp.length === 10){
						timestamp = timestamp*1000
					}
					el.value = dayjs(timestamp).format(defaultTime)
				}
			}
		}
	}
</script>

<style>
</style>
