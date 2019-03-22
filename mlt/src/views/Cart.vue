<template>
	<div id="cart" style="height:100%">
		<van-nav-bar title="购物车" left-arrow @click-left="goback()">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="carts" v-show="">
			<div class="text">
				<h3>购物车还是空的</h3>
				<p>现在就去选购吧</p>
			</div>
			<van-button size="large">去逛逛</van-button>
		</div>
		<div v-show="true" class="cartlist">
			<div class="continue">
				<p class="sp">共1件商品</p>
				<p class="next">继续购物 >></p>
			</div>
			<div class="cartadd">
				<img class="leftimg" src="../../public/img/good-detail/02-1-big.jpg" alt="">
				<p class="titlep">GSC 粘土人配件 拉拉队服替换身体 随机发-良笑社 粘土人More 拉拉队服Ver. 不附带头部 正版模玩配件 代理版 现货</p>
				<p class="bottomp">本店价<strong class="bottoms">¥ 39.00元</strong></p> 
				<img class="rightimg" src="../../public/img/laji.png">
				<p class="number">数&emsp;量</p>
				<van-stepper v-model="value" class="add" @plus="add" min=1 />
			</div>
			<div class="account">
				<div class="delete"><p class="empty">清空购物车</p></div>
				<div class="final">
					<p class="ptext">实付金额:   <strong class="str">¥ 39.00元</strong></p>
					<van-button size="large" type="warning" class="ljbtn">立即下单</van-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			value:1
		}
	},
	created()	{
		
	},
	methods:{
		add() {

		},

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
.cartlist{
	width: 375px;
	height: 345px;
	border-bottom: 1px solid #DCDCDC;
	.continue{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #E5E5E5;
		background: #F7F7F7;
		.sp{
			position: relative;
			top: 10px;
			left: 10px;
			width: 90px;
			font-size: 16px;
			font-family: 'Helvetica Neue', Helvetica, sans-serif;
			color: #474747!important;
		}
		.next{
			position: relative;
			bottom: 22px;
			left: 283px;
			width: 90px;
			font-size: 14px;
			font-family: 'Helvetica Neue', Helvetica, sans-serif;
			color: #474747!important;
		}
	}
	.cartadd{
		width: 100%;
		height: 130px;
		border-bottom: 1px solid #E5E5E5;
		background: #fff !important;
		.leftimg{
			position: relative;
			left: 30px;
			top: 30px;
			width: 60px;
			height: 60px;
		}
		.titlep{
			position: relative;
			left: 95px;
			bottom: 45px;
			width: 235px;
			height: 16px;
			text-align: center;
			color: #474747!important;
			font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
			font-size: 14px;
			text-overflow:ellipsis;
			white-space :nowrap ;
			overflow: hidden; 
		}
		.rightimg{
			bottom: 73px;
			width: 18px;
			height: 18px;
			position: relative;
			left: 340px;
		}
		.bottomp{
			width: 220px;
			position: relative;
			left: 100px;
			bottom: 42px;
			color: #9c9c9c;
			.bottoms{
				color: #fb0000;
				font-weight: normal;
				margin-left: 10px;
				font-size: 15px;
			}
		}
		.add{
			width: 120px;
			position: relative;
			left: 160px;
			bottom: 95px;
			button{
				border-top: 1px solid #C8C8C8;
				border-bottom: 1px solid #C8C8C8;
				border-radius: 0;
				width: 17px;
				height: 22px;
				padding: 0;
				margin: 0;
				background: #E6E6E6;
			}
			.van-stepper__input{
				width: 40px;
				height: 20px; 
				margin: 0; 
				padding: 0; 
				border-radius: 0;
				line-height: 20px;

			}
		}
		.number{
			position: relative;
			bottom: 65px;
			width: 61px;
			left: 99px;
		}
	}
	.account{
		width: 97%;
		height: 150px;
		font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
		.delete{
			width: 353px;
			height: 30px;
			background: url('../../public/img/laji.png') no-repeat 10px;
			background-size: 5%;
			.empty{
				top: 5px;
				width: 80px;
				position: relative;
				left: 33px;
				margin: 0;
				color: #474747!important;
			}
		}
		.final{
			width: 351px;
			height: 50px;
			background-color:#fff1e2;
			position: relative;
			left: 10px;
			top: 10px;
			.ptext{
				font-size: 17px;
				position: relative;
				top: 15px;
				left: 30px;
				overflow: hidden;
				width: 160px;
				color: #474747!important;
			}
			.str{
				font-weight: normal;
				color: #e03629;
				font-size: 16px;
			}
			.ljbtn{
				height: 34px;
				line-height: 33px;
				top: 43px;
				background: #F7762E;
			}
		}
	}
}

</style>
