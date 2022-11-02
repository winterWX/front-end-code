<template>
  <div class="login-main">
    <el-from label-width="100px" :model="ruleForm" ref="ruleFormDom">
      <el-form-item label="用户名:" prop="username">
        <el-input 
          type="" 
          v-model="ruleForm.username"
          placeholder="请输入用户名" 
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input 
          v-model="ruleForm.password" 
          autocomplete="off" 
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-from-item>
        <el-button type="primary" @click="onSubmit">登录({{btnNum}})</el-button>
        <el-button>注册</el-button>
      </el-from-item>
    </el-from>
  </div>
</template>
<script>
import { 
  ref,
  reactive, 
  unref, 
  onMounted
} from "vue";
import { useRouter } from 'vue-router'
export default {
  setup(props,{emit,attrs,slots}){
    const router = useRouter();
    const timer = ref(null);
    const btnNum = ref(60);
    const ruleForm = reactive({ 
      username:'',
      password:''
    });
    onMounted(()=>{

    })
    const onSubmit=()=>{
      // 获取from表单的值
      const {username="",password=""} = unref(ruleForm);
      if(username && password){
        //trimEnd();
        emit('LoginState',{ state: 'success' })
        router.push({ path:"/main" })
      }else{
        alert('请输入用户名或者密码');
      }
    };
    const trimEnd=()=>{
      if(!timer.value){
        timer.value = setInterval(() => {
          if(btnNum.value == 0){
            clearInterval(timer.value)
            timer.value = null
          }else{
            btnNum.value = --btnNum.value;
            console.log(btnNum.value);
          }
        }, 1000);
      }
    };
    return{
      btnNum,
      ruleForm,
      onSubmit
    }
  }
}
</script>
<style lang="less" scoped>
    .login-main{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 200px;
    }
</style>
