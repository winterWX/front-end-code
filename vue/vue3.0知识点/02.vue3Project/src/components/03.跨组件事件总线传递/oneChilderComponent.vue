<template>
    <h2>我是子组件 ---- oneChilderComponent</h2>
	<ul>
		<li>{{list.name}}</li>
		<li>{{list.age}}</li>
		<li>{{list.nationality}}</li>
	</ul>
	<two-childer-component />
</template>

<script>
	import Bus from '../../utlis/index.js'
	import twoChilderComponent from './twoChilderComponent.vue'
    export default {
        name:'oneChilderComponent',
		components:{
			twoChilderComponent
		},
        props:{
          
        },
        data(){
            return{
				list :{}
			}
        },
		created(){
			Bus.on('listData',(list)=>{
				this.list = list
			})
		},
        methods:{
            
        }
    }
</script>
