<template>
	<div class="user">
		<van-nav-bar title='用户中心' left-arrow @click-left="goback()">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="user-name">
			<div class="user-name-div">
				<p>用户名：{{this.$store.state.uname}}</p>
				<p class="user-name-p">级别:注册用户</p>
				<p class="user-name-pp">积分：<strong>30积分</strong></p>
			</div>
		</div>
		<div class="order">
			<p class="order-p">订单管理</p>
			<div class="order-div">
				<div class="order-d">
					<p class="order-p-p" @click="jumpCart">查看我的购物车</p>
					<van-icon name="arrow" class="order-icon"/>
				</div>
				<div class="order-d">
					<p class="order-p-p">我的订单</p>
					<van-icon name="arrow" class="order-icon"/>
				</div>
				<div class="order-d order-d-d">
					<p class="order-p-p">我的预售订单</p>
					<van-icon name="arrow" class="order-icon"/>
				</div>
			</div>
		</div>
		<div class="account">
			<p class="account-p">账单管理</p>
			<div class="account-div">
				<div class="account-d">
					<p class="account-p-p">我的收藏</p>
					<van-icon name="arrow" class="account-icon"/>
				</div>
				<div class="account-d">
					<p class="account-p-p">收货地址</p>
					<van-icon name="arrow" class="account-icon"/>
				</div>
				<div class="account-d">
					<p class="account-p-p">我的红包</p>
					<van-icon name="arrow" class="account-icon"/>
				</div>
				<div class="account-d">
					<p class="account-p-p">修改密码</p>
					<van-icon name="arrow" class="account-icon"/>
				</div>
				<div class="account-d account-d-d">
					<p class="account-p-p">客服中心</p>
					<van-icon name="arrow" class="account-icon"/>
				</div>
			</div>
		</div>

			<van-button size="large" class="logout" @click="signout">退 出 登 录</van-button>

	</div>
</template>

<script>
export default {
	data () {
		return { }
	},
	methods:{
		signout(){
			this.axios.get('http://127.0.0.1:3000/user/signout').then(
				(res)=>{
					if(res.data.code == 1 ) {
						this.$toast('退出成功!');
						this.$store.commit('signout');
						this.$router.push('/login')
					} else {
						this.$toast("退出登录失败!")
					}
				}
			)
		},
		goback() {
			if (window.history.length <= 1) {
				this.$router.push ({ path: '/'})
					return false
			} else{
				this.$router.go (-1) 
			}
		},
		jumpCart(){
			this.$router.push ('/cart')
		},
	}
}
</script>

<style lang="less">
.user{
	width: 100%;
	height: 640px;
	background: #fff;
	.user-name{
		width: 100%;
		height: 92px;
		.user-name-div{
			width: 92%;
			height: 75px;
			margin: 15px 15px 0 15px;
			border-bottom: 1px solid #C9C9C9;
			.user-name-p{
				width: 100px;
				position: relative;
				left: 210px;
				bottom: 28px;
			}
			.user-name-pp{
				width: 100px;
				position: relative;
				bottom: 28px;
				strong{
					font-weight: normal;
					color: #ff0400;
				}
			}
		}
	}
	.order{
		width: 100%;
		height: 166px;
		.order-p{
			margin-left: 15px;
		}
		.order-div{
			width: 353px;
			height: 120px;
			border-radius: 5px;
			border: 1px solid #C9C9C9;
			position: relative;
			left: 12px;
			bottom: 10px;
			.order-d{
				border-bottom: 1px solid #C9C9C9;
				height: 40px;
			}
			.order-d-d{
				border:none;
			}
			.order-p-p{
				position: relative;
				left: 20px;
				top: 8px;
				width: 100px;
			}
			.order-icon{
				left: 320px;
				bottom: 20px;
				color: #C9C9C9;
			}
		}
	}
	.account{
		width: 100%;
		height: 225px;
		.account-p{
			margin-left: 15px;
		}
		.account-div{
			width: 353px;
			height: 200px;
			border-radius: 5px;
			border: 1px solid #C9C9C9;
			position: relative;
			left: 12px;
			bottom: 10px;
			.account-d{
				border-bottom: 1px solid #C9C9C9;
				height: 40px;
				.account-p-p{
					position: relative;
					left: 20px;
					top: 8px;
					width: 100px;
				}
				.account-icon{
					left: 320px;
					bottom: 20px;
					color: #C9C9C9;
				}
			}
			.account-d-d{
				border:none;
			}
		}
	}
	.logout{
		background: #F7762E;
		color: #fff;
		width: 93%;
    height: 40px;
		line-height: 38px;
		border-radius: 5px;
		margin: 12px;
		font-size: 15px;
	}
	p{
		font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
		font-size: 14px;
		color: #474747!important;
	}
}
</style>
