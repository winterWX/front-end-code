<template>
	<h2>watch 的使用</h2>
    <div>ref:{{counter}}---- {{name}}</div>
	<button @click="counterChange">点击</button>
</template>


<script>
  import _ from 'lodash'
  import { ref, reactive, watch } from 'vue';
  export default {
	setup(){
		    //监听基本数据类型
		    let counter = ref(0);
		    let name = ref('王五');
	   
		    // 基本数据类型的监听
		    watch(counter,(newVal,prevVal)=>{
			   console.log('counter的变化',newVal,prevVal)
		    })
	
	        //侦听多个ref响应式数据
			watch([counter],(newVal,prevVal)=>{
			  console.log('counter的变化',newVal,prevVal)
			})
		   
		   
		    const counterChange =()=>{
			   counter.value ++ ;
			   name.value = '李三';
		    }
		   
		    return{
			   counter,
			   name,
			   counterChange
		    }
	}
  }
	
</script>




<style>
</style>
