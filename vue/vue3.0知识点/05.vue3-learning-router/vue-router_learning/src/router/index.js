import { routes } from './routes';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
    routes,
    history: createWebHistory()
})

// 路由全局守卫
router.beforeEach((to,from,next)=>{
    let info = JSON.parse(localStorage.getItem('userInfo'))
    if(to.path === '/home'){
        if(info.name === 'wx'){
            next('/errorPage')
        }
    }else{
        next()
        console.log('0000')
    }
})

router.afterEach((to,from)=>{
    alert('你确定要离开这个页面吗')
})


export default router