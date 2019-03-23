import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
  state:{  //储存全局共享数据
    islogin:false,
    uid:'',
    uname:''
  },
  mutations:{  //修改和操作共享数据方法
    signin(state,obj) {   //登录
      state.islogin = true;  //操作当前为true表示已登录 
      state.uname = obj.uname;  //操作全局存储的uname 等于当前的uname
      state.uid = obj.uid;      //操作全局存储的uid 等于当前的 uid
    },
    signout() {   //退出登录
      this.state.islogin = false;   //操作当前为false表示未登录
      this,state.uname='';        //操作当前uname为空
      this.state.uid='';           //操作当前uid为空
    }
  }
});