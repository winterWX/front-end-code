<template>
    <h2>默认插槽的简单使用</h2>
	<test-component>
		<div>插槽填充内容111111</div>
		<br/>
		<div>插槽填充内容222222</div>
		<br/>
		<div>插槽填充内容333333</div>
		
		
		<div>插槽填充内容111111</div>
		<br/>
		<div>插槽填充内容222222</div>
		<br/>
		<div>插槽填充内容333333</div>	
	</test-component>
</template>

<script>
	import testComponent from './slot的简单使用.vue';
	export default{
	    components:{
			testComponent
		},
		setup(){
			
		}
	}
</script>

<style>
</style>
