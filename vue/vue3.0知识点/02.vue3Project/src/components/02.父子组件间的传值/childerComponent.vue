<template>
    <h2>我是子组件 ---- 显示父组件传递过来的参数</h2>
    <div>
        <div style="{color:'red'}">{{name}}{{age}}</div>
    </div>
    <button @click='sendList'>传递参数给父组件</button>
</template>

<script>
    export default {
        emits:['list'],
        name:'childerComponent',
        props:{
          name:{
             type:  String
          },
          age:{
              type: Number
          }
        },
        data(){
            return{
                list:[{name:'一一',id:1},{name:'二二',id:2},{name:'三三',id:3}]
            }
        },
        methods:{
            sendList(){
                this.$emit('list',this.list)
            }
        }
    }
</script>
