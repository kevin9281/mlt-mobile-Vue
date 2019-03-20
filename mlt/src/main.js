import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import Vant from 'vant';
import Vuex from 'vuex'
import { Toast } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';
import { Search } from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { Field } from 'vant';
import { Pagination } from 'vant';
import { Card } from 'vant';
import { Stepper } from 'vant';

import 'mint-ui/lib/style.css';
import 'vant/lib/index.css';
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

Vue.use(Vuex);
Vue.use(Vant);
Vue.use(MintUI);
Vue.use(Lazyload);
Vue.use(Tab).use(Tabs);
Vue.use(Search);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Pagination);
Vue.use(Card);
Vue.use(Stepper);

Vue.prototype.toast=Toast;
Vue.config.productionTip = false;
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

/* const store = new Vuex.Store({
  //待添加
}) */

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
}).$mount('#app')
