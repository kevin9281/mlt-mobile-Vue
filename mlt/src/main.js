import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import Vant from 'vant';
import {Toast} from 'vant';

import 'mint-ui/lib/style.css';
import 'vant/lib/index.css';
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

Vue.use(Vant);
Vue.use(MintUI);
Vue.prototype.toast=Toast;
Vue.config.productionTip = false;
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
