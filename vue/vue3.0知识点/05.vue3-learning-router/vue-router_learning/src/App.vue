<template>  
    <router-link to="/home" active-class="active">首页</router-link>

    <!-- 
       关于router-link的增加知识
       1.可以插槽的方式中间写内容
       2.props: href跳转的连接
     -->
     
    <router-link to='/about/23' active-class="active" v-slot="props">
      <!-- <div>
        <span>你好</span>
        <span>我是p标签</span>
      </div> -->
      <span @click="props.navigate">{{props.href}}</span>
    </router-link>


    <br/>
      <ul>
          <li><router-link to="/header">vuex-header</router-link></li>
          <li><router-link to="/midden">vuex-main</router-link></li>
          <li><router-link to="/footer">vuex-footer</router-link></li>
      </ul>
    <br/>
    
    <router-link to="/eventBusEmit">事件总线程</router-link>

    <router-link to="/parentComponent">父子组件间的传值</router-link>


    <router-link to="/optionComputed">option中computed的用法</router-link>
    <router-link to="/compositionComputed">composition中computed的用法</router-link>

    <router-link to="/watchEffectUse">watchEffectUse的用法</router-link>
    

    <div class="show"><router-view></router-view></div>

</template>

<script>
    export default {
      name: 'App',
      data(){
        return{
          showWidth: '600px',
          showHight: '300px'
        }
      },
      setup(){
        localStorage.setItem('userInfo', JSON.stringify({name:'wx',age:30}))
      }
    }

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  a{
    margin-left: 4px;
    margin-right: 4px;
  }
  .active{
    color: red;
    margin-left: 4px;
    margin-right: 4px;
  }
  .show{
    width:  v-bind(showWidth);
    height: v-bind(showHight);
    margin-top: 70px;
    text-align: center;
  }
</style>