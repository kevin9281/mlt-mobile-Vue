<template>
	<div id="Registered">
		<van-nav-bar title="注册"  left-arrow @click-left="goback()">
  		<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="reg">
			<van-row type="flex" justify="center" class="row-reg">
				<van-col span="20" class="col-reg">
					<input type="text" class="inp-reg" placeholder="用户名" name="uname" v-model="uname" @focus="getFocus()" @blur="loseFocus()">
					<span class="fade" :class="spanClass">{{textOne}}</span>
				</van-col>
			</van-row>
			<van-row type="flex" justify="center" class="row-reg">
				<van-col span="20" class="col-reg">
					<input type="text" class="inp-reg" placeholder="密码" name="upwd" v-model="upwd">
				</van-col>
			</van-row>
			<van-row type="flex" justify="center" class="row-reg">
				<van-col span="20" class="col-reg">
					<input type="text" class="inp-reg" placeholder="常用邮箱" name="uemail" v-model="uemail" @focus="getEmail()" @blur="loseEmail()">
					<span class="fade" :class="spanClass1">{{textTwo}}</span>
				</van-col>
			</van-row>
			<van-button size="large" type="warning" class="btn-reg" @click="butReg">注册</van-button>
		</div>
	</div>
</template>


<script >
import {Toast} from "mint-ui";

export default {
	data () {
		return {
			uname:'',
			upwd:'',
			uemail:'',
			spanClass:'',
			spanClass1:'',
			textOne:'',
			textTwo:''
		}
	},
	methods:{
		butReg () {
		//console.log(123);
			var uname = this.uname.replace (/\s/g,'');
			var upwd = this.upwd;
			var uemail = this.uemail;
			var url = 'http://127.0.0.1:3000/user/Registered'
			var params = 'uname=' +uname+ '&upwd=' +upwd+ '&uemail='+uemail;
			//console.log(params);
			
			this.axios.post (url,params).then( (result) =>{
				/* console.log(resule.data.code); */
				if (result.data.code == 200) {
					Toast ('注册成功!') 
					this.$router.push ("/Login");
				} else {
					Toast ("注册失败!")
				}
			})
		},
		getFocus () { //用户名获得焦点清空样式内容
			this.textOne='',
			this.spanClass=''
		},
		loseFocus () { //用户名失去焦点自动触发 验证
			var uname = this.uname.replace (/\s/g,'');
			var reg = /^[a-z0-9]{3,12}$/i;
			var params = 'uname=' + uname
			var url = 'http://127.0.0.1:3000/user/checkUname'
			if(!uname) {
				return
			}
//判断如果uname通过正则验证 才请求验证
		if (reg.test(uname)){
			this.axios.post(url,params).then((result)=>{
				if (result.data.ok === 0 ) {
					this.textOne = result.data.msg;
					this.spanClass = 'vali_fail'
				} else if (result.data.ok === 1 ) {
					this.textOne = result.data.msg;
					this.spanClass = 'vali_success'
				} 
			})
		} else {  //判断如果 uname !未通过
			this.textOne = "格式不正确!";
			this.spanClass = "vali_fail";
		}
	},
		getEmail(){
			this.textTwo='',
			this.spanClass=''
		},
		loseEmail(){
			//console.log('456');
			if (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.uemail)) {
				this.textTwo = "邮箱可以使用!";
				this.spanClass1 = "vali_success"
			} else {
				this.textTwo = "邮箱不可用,请重新输入!"
				this.spanClass1 = "vali_fail";
			}
		},
		goback () {
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
.reg{
	height: 300px;
	margin-top:30px;
	.row-reg{
		.col-reg{
			width: 338px;
			.inp-reg{
				border-radius: .6rem;
				font-size: 14px;
				color: #9D9D9D;
			}
		}
	}
	.btn-reg{
		margin:20px 0 0 20px;
		width: 90%;
		height: 40px;
		line-height: 40px;
	}
}
#Registered{
	background-color: #EBECED;
}
.fade{
	display: none
} 
.vali_success,.vali_fail{
	font-size: 13px;
	bottom: 7px;
	left: 5px;
	position: relative; 
	display: inline-block;
}
.vali_success{ //通过验证 success
	color:green;
}
.vali_fail{  //验证失败 fail
	color:red;
}
</style>
