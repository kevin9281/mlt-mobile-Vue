import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import Vant from 'vant';
import store from './store'
import { Toast } from 'vant';


import 'mint-ui/lib/style.css';
import 'vant/lib/index.css';
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'


//引入 axios 库
import axios from "axios"
//配置跨域访问保存session
axios.defaults.withCredentials = true;
//将axios库配置Vue实例对象中
Vue.prototype.axios = axios;



Vue.use(Vant);
Vue.use(MintUI);

Vue.prototype.toast=Toast;
Vue.config.productionTip = false;

//Header.name 值就是 my-header


//创建全局过滤器
Vue.filter('keepTwoNum',function (value) {
  value = Number(value);
  return value.toFixed(2)+'元';
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

