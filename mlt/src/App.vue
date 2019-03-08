<template>
  <div id="app">
    <router-view/>
    <img src="../public/img/fo.png" alt="" class="suspension">
    <my-footer />
  </div>
</template>

<script>
import myFooter from "./components/tabbar/footer.vue";
export default {
  name: "app",
  components: {
		myFooter
	},
  data(){
    return { }
  },

  methods:{ 
    
  },

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
