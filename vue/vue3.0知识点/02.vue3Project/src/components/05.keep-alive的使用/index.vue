<template>
	 <div @click="btnClick">
		 <button>About</button>
		 <button>Home</button>
		 <button>UsContent</button>
	 </div>
	 <keep-alive :include="['About','Home']">
		 <component :is="tabCurrent"></component>
	 </keep-alive>
</template>

<script>
	import About from './about.vue';
	import Home from './home.vue';
	import UsContent from './usContent.vue';
	export default{
		components:{
			About,
			Home,
			UsContent
		},
	    data(){
			return{
				tabCurrent: 'usContent'
			}
		},
		methods:{
			btnClick(e){
				this.tabCurrent = e.target.innerHTML;
			}
		}
	}
</script>

<style>
	.tabColor{
	    color: red;
		font-size: 20px;
	}
</style>
