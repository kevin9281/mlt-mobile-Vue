import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
//引入自定义组件
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Circle from './views/Circle.vue'
import Login from './views/Login.vue'
import Newslist from './views/Newslist.vue'
import Registered from './views/Registered.vue'
import Category from './views/Category.vue'
import User_center from './views/User_center.vue'


Vue.use(Router)


//配置 访问路径 组件名称
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home},
    { path: '/Home', component: Home},
    { path: '/Cart', component: Cart},
    { path: '/Circle', component: Circle},
    { path: '/Login', component: Login},
    { path: '/Newslist', component: Newslist},
    { path: '/Registered', component: Registered},
    { path: '/Category', component: Category},
    { path: '/User_center', component: User_center, meta:{ requireAuth: true }}
  ]
})

//全局路由守卫
router.beforeEach ( (to,from,next)=>{
  if (to.meta.requireAuth) { //如果开启页面守卫路由
    if (store.state.islogin) { //如果已登录就跳转
      next()
    } else {  //如果未登录
      next({ //就跳转login
        path:'login'
      })
    }
  } else { //否则直接跳转
    next() 
  }
})  

/* if (window.sessionStorage.id){
  next()
} else {
  console.log('session为空,请登录先')
  next('/login')
} */

export default router

