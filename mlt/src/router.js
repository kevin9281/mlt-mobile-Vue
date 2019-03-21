import Vue from 'vue'
import Router from 'vue-router'
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
export default new Router({
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
    { path: '/User_center', component: User_center}
  ]
})
