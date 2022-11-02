export const routes = [
  {
      path:'/',
      redirect: '/user'
  },
  {
      path:'/about/:id',
      component: ()=> import('../components/pages/vueRouter/about.vue'),
      meta:{
          name:'wx'
      }
  },
  {
      path:'/home',
      component:  ()=> import('../components/pages/vueRouter/home.vue')
  },
  {
      path:'/user',
      component:  ()=> import('../components/pages/vueRouter/user.vue')
  },
  {
      path: '/:pathMatch(.*)',
      component: ()=> import('../components/pages/vueRouter/notFunt.vue')
  },
  {
      path:'/header',
      component: ()=> import('../components/pages/vuexComponent/header.vue')
  },
  {
      path:'/midden',
      component: ()=> import('../components/pages/vuexComponent/middenDev.vue')
  },
  {
      path: '/footer',
      component: ()=> import('../components/pages/vuexComponent/footer.vue')
  },
  /**
   *  事件总线程
   */
  {
      path:'/eventBusEmit',
      component: ()=> import('../components/pages/事件总线程/eventBusEmit.vue')
  },
  /**
   *  父子组件间的传值
  */
  {
      path:'/parentComponent',
      component: ()=> import('../components/pages/父子组件间的事件传递/parentComponent.vue')
  },
  /**
   * computed 的用法
  */
  {
      path:'/optionComputed',
      component: ()=> import('../components/pages/computed的应用/option中computed.vue')
  },
  {
      path:'/compositionComputed',
      component: ()=> import('../components/pages/computed的应用/composition中computed.vue')
  },
  /**
   * watchEffect 的使用
   */
   {
       path:'/watchEffectUse',
       component: ()=> import('../components/pages/watchEffect的应用/index.vue')
   },
   {
      path: '/errorPage',
      component: ()=> import('../components/pages/errorPage/index.vue'),
      beforeEnter: (to, from, next) => {
          // ... 路由独享
          alert('我是错误页面')
      }
   },
   {
      path: '/main',
      component: ()=> import('../components/view/main/index.vue')
   }
];
