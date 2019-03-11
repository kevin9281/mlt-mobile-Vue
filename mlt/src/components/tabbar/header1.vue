<template id="my-header2">
	<div id="header2">
		<van-icon name="arrow-left" size="25px" color="#fff" @click="goback" />
		<input v-model="url" @keyup.13="search()" class="search-input" >
		<van-icon name="search" class="search" @click="search()"/>
	</div>
</template>

<script>
export default {
	name:'myHeader2',
	data(){
		return { 
			url:" "
		}
	},
	methods:{
		search() {
			console.log(`查找 "${this.url}" 相关商品`);
		},
		goback() {
			if (window.history.length <= 1) {
				this.$router.push ({ path: '/'})
					return false
			} else{
				this.$router.go (-1)
			}
		}
	},
	watch:{
		url () {
			this.search();
		}
	}
}
</script>

<style lang="less">
#header2{
	background: linear-gradient(#ffad52, #ff8600);
	width:100%;
  height:60px !important;
  line-height:60px !important;
	border:0;
	.van-icon{
		left:15px;
		top:7px;
	}
  .search{
    color:#fff !important;
		font-size: 30px !important;
		left: 35px;
	}
	.search-input{
		left: 25px;
		height: 35px;
		width: 72%;
		position: relative;
	}
}

</style>

