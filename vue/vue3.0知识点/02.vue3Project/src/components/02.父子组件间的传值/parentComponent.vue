<template>
    <div class="content">
        <h2>我是父组件</h2>
        <div>
            <div>传递数据给子组件</div>
            <childer-component  :name='name' :age="age"  @list="receiveDate"/>
            <ul>
               <li v-for="item in showList" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import childerComponent from './childerComponent.vue'
    export default {
        name:'parentComponent',
        components:{
            childerComponent
        },
        data(){
            return{
               name: '秦始皇',
               age: 104,
               nationality: '大秦',
               showList:[]
            }
        },
        methods:{
            receiveDate(list){ 
              this.showList = list;
            }
        }
    }
</script>


<style>
  .content{
    text-align: left;
  }
</style>