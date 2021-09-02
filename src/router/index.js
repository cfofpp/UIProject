import { createRouter, createWebHashHistory } from 'vue-router'
// 主页
import Home from '../views/Home.vue'
// 图片广场
import Picsquare from '../views/student/Picsquare.vue'
//我的图片
import MePic from '@/views/student/MePic'
//发布图片
import SendImg from '@/views/student/SendImg'
//待评评价
import WaitComment from '@/views/teacher/WaitComment'
//登录
import Login from '../views/Login.vue'
import demo from '../views/demo.vue'
//注册
import Rigister from '../views/Register.vue'
const routes = [
  {
    path: '/',
    redirect: '/login' //重新定向 路径没有时 会跳到/von 相当于一个默认路径
  },
  {
    path:'/demo',
    component:demo
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/rigister',
    component:Rigister
  },
   {
    path: '/home',
    name: '首屏',
    component: Home,
    children:[
      {
        path: 'picsquare',
        name:'图片广场',
      component: Picsquare
      },
      {
        path:'mePic',
        name:'我的图片',
        component:MePic
      },
      {
        path:'sendImg',
        name:'发布图片',
        component:SendImg
      },
      {
        path:'waitComment',
        name:'待评评价',
        component:WaitComment
      }
    ]
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// //导航守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path === "/login") 
//     return next()
//   //获取token
//   const token=window.sessionStorage.getItem("token")  
//   if(token) //如果有票就允许访问
//     next()
//   else      //没票，就跳转到登录
//     return next("/login")
// })
//导出暴露路由
export default router
