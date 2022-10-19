<template>
	<h2>具名插槽的使用</h2>
	<br/>
	<div class="mainStyle">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot name="main"></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'testComponent',
		setup(){
			console.log('11111')
		}
	}
</script>

<style>
	.mainStyle{
		text-align: center;
		margin: 0 auto;
	}
	header{
		border: 1px solid #333333;
	    padding: 10px;
		width: 60%;
	}
	main{
		border: 1px solid #333333;
		padding: 10px;
		width: 60%;
	}
	footer{
		border: 1px solid #333333;
		padding: 10px;
		width: 60%;
	}
</style>
