<template>
    <div>
       <button @click="btnClick">获取this的值</button>
    </div>
</template>

<script>
  console.log('顶层作用域',this)   //严格模式下是undefined,非严格模式下是window
  export default {
      name: 'thisUseComponent',
      components: {},
      data(){
        return{}
      },
      methods:{
        /*
          * vue 内部会对方法名进行遍历 用bind显示的绑定publishThis, publishThis 就是组件的代理对象，
          * 拿到代理对象就能获取到 data 里的 属性
        */

        // 普通函数
        // btnClick(){
        //     console.log('方法里获取this',this)
        // }

        //---------------------------------------------

        //箭头函数
        btnClick:()=>{
            //箭头函数会获取上下文的this作为自己的this，所以就会获取到顶层的this
            console.log('箭头函数方法里获取this', this)   //undefined
        }
      }
  }
</script>

<style>
 
</style>