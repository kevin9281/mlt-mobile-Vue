<template>
  <div id="app">
    <!-- back top-->
    <div id="target"></div>
    <!-- view -->
    <router-view />
    <img src="../public/img/fo.png" alt="" class="suspension">
    <!-- footer -->
    <my-footer />
  </div>
</template>

<script>
import myFooter from "./components/tabbar/footer.vue";

export default {

  components: {
		myFooter
  },

  data() {
    return {}
  },
  created () {

  },
  updated () {
    
  },
  methods:{ 
/*     touser(){
      if(this.$store.state.islogin){this.$router.push('/usercenter')}else{this.$router.push('/login')}
    },
    islog(){    //验证登陆
        console.log('验证登陆');
        this.axios.get('http://127.0.0.1:3000/user/islogin').then((res)=>{ //发送请求 
          if(res.data.ok==0){  //如果返回的ok == 0
            this.$store.commit('signout'); //那么修改数据为未登录
            console.log(this.$store.state.uid) //输出登录的uid
            }else if(res.data.ok==1){  //如果返回的ok ==1 
            this.$store.commit('signin',{uname:res.data.uname,uid:res.data.uid});
            //那么修改数据为已登录 uname等于传值过来的uname uid 等于传值过来的uid
            console.log(this.$store.state.uid) //输出登录的uid
          }
        }).then(()=>{
            if(this.$route.path=='/login'||this.$route.path=='/usercenter'){
          //如果跳转登录页 或者跳转用户中心   
              this.active=3; //当前的tabarr active 等于3
              this.touser()  //调用方法touser
              }else if(this.$route.path=='/test'){ //否则跳转test
                this.active=1  //当前的tabarr active 等于1
                }else if(this.$route.path=='/cart'){ //否则跳转cart
                  this.active=2; //当前的tabarr active 等于2
                  this.$router.push('/cart')  
                  }else if(this.$route.path=='/'){ //否则跳转/
                    this.active=0 //当前的tabarr active等于0
          }
        })
      }
    }, */
  }
}
</script>

<style lang="less">

body{background: #fff !important}
*{margin:0;padding:0;}
div{box-sizing: border-box;}
.suspension{
  width: 30%;
  position: fixed;
  right: 0px;
  bottom: 180px;
}
</style>
