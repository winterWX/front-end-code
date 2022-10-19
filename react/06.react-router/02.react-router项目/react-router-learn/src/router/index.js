import React,{lazy} from 'react'

const  Home = lazy(()=> import('../pages/home'));
const  About = lazy(()=> import('../pages/about'));
const  Nomath = lazy(()=> import('../pages/nomath'));
const  Profile = lazy(()=> import('../pages/profile'));
const  Login = lazy(()=> import('../pages/Login'));
const  User = lazy(()=> import('../pages/user'));

const routes = [
     {
          path: '/',
          exact: true,
          component: Login
     },
     {
          path: '/about',
          component: About
     },
     {
          path: '/home/:id',
          component: Home
     },
     {
          path: '/nomath',
          component: Nomath
     },
     {
          path: '/profile',
          component: Profile,
          children:[
               {
                    path:'',
                    component: Profile,
               }
          ]
     }
]


export default routes