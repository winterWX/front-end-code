<template> 
  <!-- <router-link to="/home" active-class="active">首页</router-link>
  <router-link to='/about/23' active-class="active" v-slot="props">
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
  <div class="show"><router-view></router-view></div> -->
  
  {
    !switchState ? <Login @LoginState="loginState"/>
  }
  <component :is="computedShow"/>
</template>

<script>
import Login from './components/view/login/index.vue'
import Main from "./components/view/main/index.vue"
import { ref,reactive,toRefs, markRaw,computed} from 'vue'
export default {
  setup(){
    // const switchState = reactive([
    //   {
    //     name: 'Login',
    //     cropName: markRaw(Login)
    //   },
    //   {
    //     name: 'Main',
    //     cropName: markRaw(Main)
    //   }
    // ])
    const layoutState = reactive({
      showWidth: '600px',
      showHight: '300px'
    })
    localStorage.setItem('userInfo', JSON.stringify({name:'wx',age:30}));
    // const computedShow = computed(()=>{});
    const loginState=(data)=>{
      data.state==='success' ? Login : Main
    }

    return {
      ...toRefs(layoutState),
      switchStated,
      loginState
    }
  },
  name: 'App',
  components: { Login   },
 
};
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
    text-align: center;
  }
</style>