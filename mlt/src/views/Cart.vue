<template>
	<div id="cart">
		<van-nav-bar title="购物车" left-arrow @click-left="goback()">
  		<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="carts">
			<div class="text">
				<h3>购物车还是空的</h3>
				<p>现在就去选购吧</p>
			</div>
			<van-button size="large">去逛逛</van-button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods:{
		goback() {
			if (window.history.length <= 1) {
				this.$router.push ({ path: '/'})
					return false
			} else{
				this.$router.go (-1) 
			}
		}
	}
}
</script>

<style lang="less">
.van-nav-bar{
	background: linear-gradient(#ffad52, #ff8600);
	width:100%;
  height:60px !important;
  line-height:60px !important;
	border:0;
	.van-nav-bar__arrow{
		font-size: 32px;
	}
	.van-icon{
		color: #fff !important;
	}
	.van-nav-bar__title{
		color: #fff;
		font-size: 20px;
	}
	.van-nav-bar__right{
		font-size: 32px;
	}
}
.carts{
	width: 370px;
	height: 360px;
	text-align: center;
	.van-button--large{
		width: 50%;
    top: 90px;
		color: #474747;
		background-color: #EBECED;
	}
	.text{
		margin-top: 60px;
		font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
		top:100px;
	}
	.text h3{
		color: #50555b;
		margin-bottom: 0.44118em;
		font-weight: 500;

	}
}
</style>
