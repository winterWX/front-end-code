<template>
    <h2>具名插槽的简单使用</h2>
	<test-component>
		<!-- // v-slot:name 的简写 -->
		<template #header>插槽填充内容header</template>
		<br/>
		<template #main>插槽填充内容main</template>
		<br/>
		<template #footer>插槽填充内容footer</template>
	</test-component>
</template>

<script>
	import testComponent from './slot具名插槽.vue';
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
