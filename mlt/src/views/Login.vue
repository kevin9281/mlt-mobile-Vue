<template>
	<div class="wrapper">
		<div class="wrap">
			<div class="logo"><span class="spantxt">漫骆驼账号登录</span></div>
			<van-row type="flex" justify="center" class="row">
				<van-col span="20" class="col-one">
					<input type="text" class="uname" name="uname" v-model="uname" placeholder="漫骆驼账号">
				</van-col>
			</van-row>
			<van-row type="flex" justify="center" class="row">
				<van-col span="20" class="col-two">
					<input type="password" class="upwd" name="upwd" v-model="upwd" placeholder="密码">
				</van-col>
			</van-row>
			<van-button size="large" type="warning" class="btn-one" @click="butLogin">立即登录</van-button>
		</div>
		<div class="div-bottom">
			<span class="span-qt">其他方式登录</span>
			<span class="reg" @click="jumpReg()">注册漫骆驼账号号</span>
			<span class="adv">二 次 元 正 版 电 商 , 购 有 爱 ！</span>
		</div>
	</div>
</template>

<script>
import {Toast} from "mint-ui";

export default {
	data () {
		return {
			uname:"",
			upwd:""
		}
	},
	methods:{
		butLogin () {//this logining btn
		//console.log(123);
		var u = this.uname;
		var p = this.upwd;
		//console.log ("用户名:"+u+" 密码:"+p);
		var reg = /^[a-z0-9]{3,12}$/i;
		if (!reg.test ( u ) ) {
			Toast ("用户名格式不正确,请检查!");
			return;
			}
		if (!reg.test ( p ) ) {
			Toast ("密码格式不正确!");
			return;
			}
//ajax //data脚手架自带属性 code自己设置的服务器属性
			var url ="http://127.0.0.1:3000";
					url +="/user/login?uname="+u+"&upwd="+p;
			this.axios.get(url).then (result=>{
			//console.log(result.data.code);
 				if (result.data.code == 1) {
					Toast ( "登录成功!" );
					this.$router.push ("/Home");
				}else{
					Toast ("用户名或密码不匹配!")
				}
			})			
		},
		jumpReg () {
			this.$router.push ('/Registered')
		}
	}
}
</script>

<style lang="less">
.wrapper{
	width: 99.4%;
	height: 700px;
	background-color: #EBECED;
	margin: 0 !important;
	.wrap{
		height: 350px;
		.logo{
			width: 335px;
			height: 164px;
			background:url('../../public/img/luotuologin.png')no-repeat 150px 20px ;
			margin-bottom: 10px;
			.spantxt{
				position: absolute;
				left: 116px;
				top: 120px;
				font-size: 1.2rem;
    		color: #424242;
				font-weight: normal;
			}
		}
		.row{
			.col-one{
				border-bottom: 1px solid #DCDCDC;
				width: 91%;
			}
			.col-two{
				width: 91%;
			}
		}
		.van-button{
			margin:0 20px;
			width: 90%;
			height: 40px;
			line-height: 40px;
		}
	}
	.div-bottom{
		height: 200px;
		width: 337px;
		border-top:1px dashed#BDBDBD;
		right: 20px;
		margin-left: 20px;
		background: url('../../public/img/QQ.png') no-repeat center;
		background-size:50px 50px;
		.span-qt{
			margin-left: 130px;
			font-size: .8rem;
			color: #b0b0b0;
			position:relative;
			bottom: 12px;
			background-color: #EBECED;	
		}
		.reg{
			color: #ff9255;
			font-size: .8rem;
			position: relative;
			top:155px;
			right: 83px;
		}
		.adv{
	  color: #757575;
		font-size: .8rem;
		position: relative;
		left:65px;
		top:270px;
		white-space: nowrap;
		}
	} 
}

.uname{
	border: none !important;
	margin: 0 !important;
	border-radius: 16px 16px 0 0 !important;
	font-size: 1rem;
	color: #9D9D9D;
}
.upwd{
	border: none !important;
	border-radius: 0 0 16px 16px !important;
	font-size: 1rem;
	color: #9D9D9D;

}
</style>
