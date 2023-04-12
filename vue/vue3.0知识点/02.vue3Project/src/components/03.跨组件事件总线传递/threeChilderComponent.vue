<template>
    <h2>我是子组件 ---- threeChilderComponent</h2>
	<ul>
		<li>{{ list.name }}</li>
		<li>{{ list.age }}</li>
		<li>{{ list.nationality }}</li>
	</ul>
</template>

<script>
	import Bus from '../../utlis/index.js'
    export default {
        name:'threeChilderComponent',
        props:{
          
        },
        data(){
            return{
				list:{}
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
