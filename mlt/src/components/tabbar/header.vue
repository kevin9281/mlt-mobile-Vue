<template id="my-header">
	<van-nav-bar class="vantHeader">
		<router-link to="" slot="left" id='vantTitle'>漫骆驼 - 二次元正版电商,购有爱！</router-link>
		<van-icon name="search" slot="right" class="search"/>
	</van-nav-bar>
</template>

<script>
export default {
	name:'myHeader',
	data(){
		return{ }
	}
}
</script>

<style lang="less">
	.vantHeader{
  background: linear-gradient(#ffad52,#ff8600) !important;
  width:100%;
  height:60px !important;
  line-height:60px !important;
  border:0;
    #vantTitle{
      color: #fff;
      font-size: 18px;
    }
    .search{
      color:#fff !important;
      font-size: 30px !important;
  }
}
</style>

