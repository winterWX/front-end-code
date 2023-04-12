import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about/:test',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      props: true
    },
    {
      //path: '/content/:id',
      path: '/content',
      name: 'content',
      component: () => import('../views/contentView.vue')
    },
    {
      path: '/virtualList',
      name: 'virtualList',
      component: () => import('../views/virtualList.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('router===', router.routes, to)
  next()
})

export default router
