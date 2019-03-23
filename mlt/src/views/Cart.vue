<template>
	<div id="cart" style="height:1000px">
		<van-nav-bar title="购物车" left-arrow @click-left="goback()">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class='notlog' v-if="!this.$store.state.islogin">
        还没有登陆，请前往 <router-link to="/login">登陆</router-link> 
    </div>
		<div class="carts" v-if="!(this.list.length>0)&&this.$store.state.islogin">
			<div class="text">
				<h3>购物车还是空的</h3>
				<p>现在就去选购吧</p>
			</div>
			<van-button size="large" @click="jumpcate">去逛逛</van-button>
		</div>
		<div v-if="this.list.length>0" class="cartlist">
			<div class="continue">
				<p class="sp">共{{list.length}}件商品</p>
				<p class="next">继续购物 >></p>
			</div>

			<div class="cartadd" v-for="(e,i) in list" :key="i">
				<input type="checkbox" class="input-all" :checked="e.cb" :data-i="i" @click="modifyItem">
				<!-- data-i 当前数组的下标 -->
				<img class="leftimg" :src="e.cartPic" alt="">
				<p class="titlep">{{e.title}}</p>
				<p class="bottomp">本店价<strong class="bottoms">¥ {{e.price | keepTwoNum}}</strong></p> 
				<img class="rightimg" src="../../public/img/laji.png" @click="delItem" :data-id='e.id' :data-idx="i"> <!-- 自定义属性拿到循环这个数组里面的id -->
				<p class="number">数&emsp;量</p>
				<!-- <van-stepper class="add" v-model="value" @change="add" min=1 /> -->
				<van-button size="mini" @click="less(i)">-</van-button>
        <p class="btn-p">{{e.count}}</p>
				<van-button size="mini" @click="more(i)">+</van-button>
			</div>

			<div class="account">
				<div class="delete">
					<!-- allcb 全选状态true选中 false清空 -->
					<input type="checkbox" class="input-all" @click="selectAll" :checked="allcb">
					<p class="empty" @click="removeItem">删除选中商品</p></div>
				<div class="final">
					<p class="ptext">实付金额:   <strong class="str">¥ {{total | keepTwoNum}}</strong></p>
					<van-button size="large" type="warning" class="ljbtn">立即下单</van-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {Toast} from "mint-ui";


export default {
	data () {
		return {
			list:[],  //保存购物车列表
			allcb:false, //保存全选复选框状态
			uid:this.$store.state.uid,
		}
	},
	created()	{
		this.loadMore();
	},
	mouted(){
		this.load(); 
	},
	computed:{
		total() {
			console.log('计算了一次总价');
			var sum =0;
			for (var p of this.list) {
				sum+=p.price*p.count;
			}
			return sum;
		}
	},
	methods:{
		add() {

		},
		modifyItem(e){ //删除多个商品功能
			//{删除选中商品}修改
			//1:获取当前元素下标[其中一种方式]
			var idx = e.target.dataset.i;
			//2:将下标对象数组中元素cb修改当前复选状态
			var checked = e.target.checked;
			//3:将数组中对应cb状态修改为 true 或者false
			this.list[idx].cb = checked;
			//4:统计购物车中商品选中数量 == list.length
			//5:将全选状态true
			var count = 0;
			for(var item of this.list) {
				if(item.cb) {
					count++;
				}
			}
			if(count==this.list.length) {
				this.allcb = true;
			}else{
				this.allcb = false;
			}
		},
		selectAll(e){ //全选按钮的点击事件
        //1:获取当前全选复选框状态
				var cb = e.target.checked;
				//2:修改全选状态
				this.allcb = cb;
        //2:依据全选状态修改数组中cb值
        for(var item of this.list){
          item.cb = cb;
        }
      },
		delItem(e) {  //删除一个商品功能
			// 1:获取当前购物车id 
			//e.target触发这个事件的对象的所有自定义属性的id
			var id = e.target.dataset.id;
			var idx = e.target.dataset.idx; //下标
			// console.log(idx);
			// 2:发送ajax请求
			var url = "http://127.0.0.1:3000/product/";
					url+="delCartItem?id="+id;
			this.axios.get(url).then(result=>{
				if(result.data.code == 1) {
			// 3:获取返回结果判断是否成功
					Toast("删除成功!");
			// 4:删除list对应购物车商品对象
			//将数组中对应下标商品删除 splice(下标,个数)从哪个开始删几个
					this.list.splice(idx,1);
				}
			})
			
			
		},
		loadMore() {	 //发请求取回购物车所有数据
			// 1:创建变量保存url
			var url = "http://127.0.0.1:3000/product/";
					url+="cartlist?uid=1";
			this.axios.get(url).then(result=>{
				//console.log(result.data);
				//创建一个空数组保存
				var rows = result.data.data;
				//为列表中每一个对象添加属性cb cb表示复选框状态
				// true为选中 false为未选中
				for(var item of rows) {
					item.cb = false;
				}
				this.list = rows;
				//console.log(this.list);
			})
			// 2:发送ajax请求
	},
		goback() {
			if (window.history.length <= 1) {
				this.$router.push ({ path: '/'})
					return false
			} else{
				this.$router.go (-1) 
			}
		},
		removeItem(){  //勾选状态
			//0:创建空字符串，为了后续接拼字符串
			var html = "";
			//1:遍历数组中元素
			for(var item of this.list){
				//2:判断cb==true
				if(item.cb){
				//3:保存id：拼字符串
				html+=item.id+",";
				}
			}
			//console.log(html);
			//3.1截取字符串 试一下 三 二 一
			html = html.substring(0,html.length-1);
			//4:发送ajax请求 删除多个商品
			var url = "http://127.0.0.1:3000/product/";
					url+="removeMItem?ids="+html;
			this.axios.get(url).then(result=>{
				if(result.data.code == 1){
					Toast("删除成功!");
					this.loadMore();
				}
			});
		},
		load() {
			this.axios.get('http://127.0.0.1:3000/user/islogin').then((result)=>{
				if(result.data.ok == 0 ) {
					this.$store.commit('signout');
					//console.log(this.$store.state.uid)
				} else if(result.data.ok == 1) {
					this.$store.commit('signin',{uname:result.data.uname,uid:result.data.uid});
					console.log("获取购物车数据用户为:",this.$store.state.uid);
					this.uid = this.$store.state.uid;
					//console.log(this.uid);
				}
			})
		}, 
		less(i){
			if(this.list[i].count>1) {
				this.list[i].count-=1;
				this.axios.get('http://127.0.0.1:3000/product/updatecart',{
					params:{uid:this.uid,
									pid:this.list[i].pid,
									count:this.list[i].count}
				}).then((res)=>{
					//console.log(res.data)
				})
			}
		},
		more(i){
			if(this.list[i].count < 10) {
				this.list[i].count += 1;
				this.axios.get('http://127.0.0.1:3000/product/updatecart',{
					params:{uid:this.uid,
									pid:this.list[i].pid,
									count:this.list[i].count}
				}).then((res)=>{
					//console.log(res.data)
				})
			}
		},
		jumpcate(){
			this.$router.push ('/Category')
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
		.van-button--mini{
			position: relative;
			bottom: 95px;
			left: 160px;
			width: 25px;
			background-color: #E6E6E6;
			border: 1px solid #C8C8C8;
		}
		.btn-p{
			position: relative;
			bottom: 95px;
			left: 160px;
			width: 20px;
			border-top: 1px solid #C8C8C8;
			border-bottom: 1px solid #C8C8C8;
			display: inline-block;
			text-align: center;
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
			.empty{
				bottom: 15px;
				width: 100px;
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
.notlog{
	position: relative;
	left: 100px;
	top: 100px;
	width: 200px;
}
.input-all{
	position: relative;
	left: 15px;
	top: 6px;
}
</style>
