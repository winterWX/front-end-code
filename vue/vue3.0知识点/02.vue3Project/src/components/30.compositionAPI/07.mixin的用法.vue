<template>
	<div>显示mixin的数据{{mixinData}}--{{age}}</div>
    <button @click="mixinFun">改变数据</button>
	<div style="color: red;">来自app的数据源{{appData}} --- {{all}}</div>
</template>


<script>
import { computed } from 'vue'
	import { mixinComponsition } from '../../utlis/mixinUtils.js'
	export default{
	  mixins:[ mixinComponsition ], //局部引入
	  methods:{
		  // mixinFun(){
			  
		  // }
	  }
	}
</script>

<style>
</style>
