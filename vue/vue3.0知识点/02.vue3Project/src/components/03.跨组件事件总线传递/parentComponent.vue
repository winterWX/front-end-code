<template>
    <div class="content">
        <h2>我是父组件</h2>
        <div>
            <button @click="btnClick">mitt传递数据给子组件们</button>
            <one-childer-component/>
        </div>
    </div>
</template>

<script>
	import Bus from '../../utlis/index.js';
    import oneChilderComponent from './oneChilderComponent.vue';
    export default {
        name:'parentComponent',
        components:{
            oneChilderComponent
        },
        data(){
            return{
               showList:{
				   name: '秦始皇',
				   age: 104,
				   nationality: '大秦'
			   }
            }
        },
        methods:{
            btnClick(){ 
			   Bus.emit('listData',this.showList)
            }
        },
		destroyed() {
			Bus.off('listData')  // unlisten
		}
    }
</script>


<style>
  .content{
    text-align: left;
  }
</style>