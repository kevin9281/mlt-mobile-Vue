import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Circle from './views/Circle.vue'
import Login from './views/Login.vue'
import Newslist from './views/Newslist.vue'
import footer from  './components/tabbar/footer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home},
    { path: '/Cart', component: Cart},
    { path: '/Circle', component: Circle},
    { path: '/Login', component: Login},
    { path: '/Newslist', component: Newslist},
    { path: '/footer', component: footer}
  ]
})
