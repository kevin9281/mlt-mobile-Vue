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

  methods:{ }

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
