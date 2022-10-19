<template>
    <h2>我是子组件 ----twoChilderComponent</h2>
    <three-childer-component />
</template>

<script>
	import threeChilderComponent from './threeChilderComponent.vue';
    export default {
        name:'twoChilderComponent',
	    components:{
			threeChilderComponent
		},
        props:{
         
        },
        data(){
            return{
                
            }
        },
        methods:{
            
        }
    }
</script>
