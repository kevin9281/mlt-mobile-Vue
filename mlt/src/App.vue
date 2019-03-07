<template>
  <div id="app">
    <router-view/>
    <img src="../public/img/fo.png" alt="" class="suspension">
    <van-tabbar v-model="active" active-color="#ff8600">
      <van-tabbar-item icon="home-o" to='/'>主页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/Circle'>圈子</van-tabbar-item>
      <van-tabbar-item icon="cart" to='/Cart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o">用户中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return { active:0 }
  },

  methods:{ 

  },

}
</script>

<style>

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
