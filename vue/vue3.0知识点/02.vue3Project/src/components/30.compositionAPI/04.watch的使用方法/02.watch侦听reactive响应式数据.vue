<template>
	<h2>watch 的使用</h2>
    <div>reactive:{{params.name}} ---- {{params.friends[0].name1}}</div>
	<button @click="counterChange">点击</button>
</template>

<script>
  import _ from 'lodash'
  import { reactive, watch ,toRef,toRefs} from 'vue';
  export default {
		setup(){
				let params = reactive({
					name:'王五',
					age:60,
					friends:[{
						name1:'李三',
						age1:40
					}]
				});
				
				//let name = toRef(params,'name');
				
				//传入一个get函数时，变化的值是非响应式的
				watch(()=>params.name, (newVal,prevVal)=>{
					console.log('name1',newVal,prevVal)
				})
			   
			   
				const counterChange =()=>{
				   params.name="1111111"
				}
				
				return{
				   params,
				   name,
				   counterChange
				}
		}
	  }
</script>

<style>
</style>