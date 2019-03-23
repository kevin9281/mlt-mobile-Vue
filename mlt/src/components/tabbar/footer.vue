<template>
<div id="my-footer" class="my-footer">
	<van-row>
		<van-col span="8">
			<img src="../../../public/img/7.png" alt="" class="footerimg">
		</van-col>
		<van-col span="8">
			<img src="../../../public/img/15.png" alt="" class="footerimg">
		</van-col>
		<van-col span="8">
			<img src="../../../public/img/198.png" alt="" class="footerimg">
		</van-col>
	</van-row>
	<van-row type="flex" justify="center" class="rowtwo">
		<van-col span="6">
			<router-link to="/" class="jumplink">
			电脑版
			</router-link>
		</van-col>
		<van-col span="6">
			<router-link to="Login" class="jumplink">
			会员登录
			</router-link>
		</van-col>
		<van-col span="6" class="lastcol ">
			<router-link to="Cart" class="jumplink">
			购物车
			</router-link>
		</van-col>
	</van-row>
	<p class="lastp">客服热线 <a @click="callPhone" class="lasta">010-57114765</a>
	</p>
	<!-- <router-link to="home" class="jump"><img src="../../../public/img/pc_icon.png" alt="">首页</router-link> -->
	<van-row class="clotwo">
  	<van-col span="12">
			<img class="hoimg" src="../../../public/img/pc_icon.png" @click="goHome"/>
				首页
		</van-col>
  	<van-col span="12">
			<img class="hoimg" id="test" src="../../../public/img/pc_icon2.png" @click="Back()"/>
			回顶部
		</van-col>
	</van-row>
	<p class="footp ">©2014 漫骆驼 - 二次元正版电商,购有爱！</p>
	<van-tabbar v-model="active" active-color="#ff8600">
    <van-tabbar-item icon="home-o" to='/'>主页</van-tabbar-item>
    <van-tabbar-item icon="search" to='/Circle'>漫社区</van-tabbar-item>
    <van-tabbar-item icon="cart" to='/Cart'>购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" @click="jumpuser">用户中心</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
	name:'myFooter',
	data(){
		return{
			active:0 
		}
	},
	methods:{
	callPhone(){
      window.location.href = 'tel://010-57114765'
		},
	Back(){
		target.scrollIntoView();
			},
	goHome:function () {
			window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
		},
		jumpuser(){
			if(this.$store.state.islogin == true){
				this.$router.push ('/User_center')
			}else{
				this.$router.push ('/login')
			}
		}
	}
}


</script>


<style lang="less" >
#my-footer{
	top: 10px;
	bottom: 10px;
	height: 310px;
	margin: 0 !important;
	padding: 0;
	background-color: #EBECED;
	.van-row{
		margin-right: 0px !important;
		border-bottom: 1px solid gainsboro;
		border-top:1px solid gainsboro;
	.footerimg{
		width: 100%;
		}
	}
	.rowtwo{
		border: none;
		margin-top:10px;
		.van-col--6{
			width: 20%;
			border-right: .06667em solid #ccc;
		}
		.lastcol{
			border:none !important;
			margin-left: 10px;
		}
	}
	.lastp{
		text-align: center;
		font-size:12px;
		padding-top:5px;
		font-weight: bold;
	}
	.lastp a.lasta{
		color: #88898d;
	}
}	
.clotwo{
	border:none !important;
	margin-left: 70px;
	font-size: 20px;
	color: #88898d;
	font-weight: bold;
	.hoimg{
		margin-top: 10px;
		position: relative;
		top: 8px;
	}
}
.font{color: #88898d;	}
.font:active{color: #fff;}
.footp{
	font-size: 12px;
	color: #c5c5c5;
	margin-top: 20px;
	text-align: center;
}
.jumplink{
color: #88898d;
font-size: 15px;
}
</style>
