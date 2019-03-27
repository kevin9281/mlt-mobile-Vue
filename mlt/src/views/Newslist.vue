<template>
	<div  class="details">
		<van-nav-bar :title='newlist.title' left-arrow @click-left="goback()">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="shuffl">
			<van-swipe :autoplay="3000" indicator-color="white" class="shuffl-swipe" >
				<van-swipe-item v-for="(e,i) in categoryPic" :key="i" class="shuffl-item">
					<img :src="e" class='shuffl-img' />>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title">
			<p class="title-p"><strong>{{newlist.title}}</strong></p>
		</div>
		<div class="price">
			<div class="price-div"> 
				<p class="price-p">本店价<strong class="price-price">{{newlist.price | keepTwoNum}}</strong><del class="price-del">¥{{newlist.oldprice | keepTwoNum}}</del></p>
				<p class="price-p">品&nbsp;&nbsp;&nbsp;牌<span class="price-span">{{newlist.brand}}</span></p>
				<p class="price-p price-p-p">库&nbsp;&nbsp;存<span class="price-span-span">{{newlist.stock}}</span></p>
				<van-button type="warning" class="but-t">立即购买</van-button>
				<van-button type="warning" class="but-t" @click="addcart"  :data-pid="newlist.pid">加入购物车</van-button>
			</div>
		</div>
		<div class="classification" sticky="false" >
			<van-tabs @click="ononClick" class="class-tabs">
				<van-tab title="图文详情" class="class-tab-one">
					<div class="calss-tab-one-imgs" v-for="(e,i) in goodsPic" :key="i">
						<img :src="e" class="class-tab-one-img">
					</div>
				</van-tab>
				<van-tab class="class-tab-two" title="用户评论">
					<p class="two-p"><strong>0</strong>人评论 <strong>100%</strong>好评</p>
					<span class="two-span">暂无此商品评论</span>
				</van-tab>
			</van-tabs>
		</div>
		<div class="sliding">
			<p class="sliding-p">相关推荐</p>
			<div class="sliding-ing">
				<van-swipe :autoplay="3000" indicator-color="white" class="sliding-swipe">
					<van-swipe-item v-for="(item,i) in lbimg" :key="i" class="sliding-item">
						<img :src="item.lbimg_url" class="sliding-img">
					</van-swipe-item>
				</van-swipe>
			</div>
		</div>
	</div>
</template>

<script>
import {Toast} from "mint-ui";

export default {
	data () {
		return {
			goodsPic:[],
			categoryPic:[],
			newlist:[],
			lbimg:[
				{pid:1,lbimg_url:require('../../public/img/xq/xglb1.jpg')},
				{pid:1,lbimg_url:require('../../public/img/xq/xglb2.jpg')},
				{pid:1,lbimg_url:require('../../public/img/xq/xglb3.jpg')},
				{pid:1,lbimg_url:require('../../public/img/xq/xglb4.jpg')}
			],
			current:0,
			info:{},  //创建对象保存商品信息
			pid:this.$route.query.pid  //提前保存pid 便于使用
		}
	},
	created(){
		// console.log(this.$route.query.pid); 跳转传参
		this.getnewsList();
		this.findGoodInfo();
	},
	methods:{
	findGoodInfo(){
			var url = 'http://127.0.0.1:3000';
					url+='/product/findProduct?pid='+this.pid;
			this.axios.get(url).then(result=> {
				this.info = result.data.data[0];
				//console.log(this.info);
			});
		},
		addcart(){
			var pid = this.pid;   //获得商品编号
			var price = this.newlist.price;  //获得商品价格
			var uid = 1;
			// console.log(pid+"_"+price+"_"+uid);
			var url = "http://127.0.0.1:3000/product/";
					url+="addcart?pid="+pid;
					url+="&price="+price;
					url+="&uid="+uid;
			if(this.$store.state.islogin) {
				this.axios.get(url).then(result=>{
					if(result.data.code == 1) {
						Toast("添加成功!");
					} else {
						Toast("添加失败!");
					}
				})
			} else { this.$router.push ('/Login') }
		},
		goback() {
			if (window.history.length <= 1) {
				this.$router.push ({ path: '/'})
					return false
			} else{
				this.$router.go (-1) 
			}
		},
		onClick(index,title) {
			this.$toast(title);
		},
		ononClick(index) {
			this.current = index;
		},
		getnewsList(){
			var pid = this.$route.query.pid;
			var url = 'http://127.0.0.1:3000/product/productDetails';
					url +='?pid='+pid;
			this.axios.get(url).then(result=>{
				this.newlist = result.data.data[0];
				//console.log(this.newlist);
				this.categoryPic = result.data.data[0].categoryPic.split(' ');
				this.goodsPic = result.data.data[0].goodsPic.split(' ');
			})
		}
	}
}
</script>

<style lang="less">
.details{
	width:100%;
	height:1865px;
	.shuffl{
		height: 377px;
		.shuffl-swipe{
			width: 370px;
			height: 375px;
			.shuffl-item{
				width: 370px;
				height: 375px;
				.shuffl-img{
					
				}
			}
		}
	}
	.title{
		height: 73px;
		border-top: 1px solid #DCDCDC;
		border-bottom: 1px solid #DCDCDC;
		.title-p{
			margin-top: 5px;
			font-weight: bold;
			font-size: 18px;
			color: #000;
			font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
			text-align: center;
		}
	}
	.price{
		width: 100%;
		height: 147px;
		border-bottom: 1px solid #DCDCDC;
		.price-div{
			width: 95%;
			height: 70px;
			margin-top: 10px;
			margin-left: 10px;
			.price-p{
				font-size: 14px;
				color: #979797;
				font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
				.price-price{
					color: #ff0500;
					font-weight: normal;
					font-size: 22px;
					margin-left: 15px;
				}
				.price-del{
					margin-left: 20px;
				}
				.price-span{
					font-size: 14px;
					color: rgb(51, 51, 51);
					margin-left: 20px;
				}
			}
			.price-p-p{
				position: relative;
				left: 245px;
				width: 115px;
				bottom: 60px;
				.price-span-span{
					margin-left: 5px;
					font-size: 14px;
				}
			}
			.but-t{
				margin-left: 10px;
				bottom: 15px;
				width: 45%;
				height: 45px;
			}
		}
	}
	.classification{
/* 		height: 100%; */
		.class-tabs{
			height: 100%;
			.class-tab-one{
				height: 710px;
				.calss-tab-one-imgs{
					width: 100%;
					height: 235px;
					.class-tab-one-img{
						width: 100%;
						height: 100%;
					}
				}
			}
			.class-tab-two{
				width: 100%;
				height: 125px;
				border-top: 1px solid #EFEFEF;
				border-bottom: 1px solid #EFEFEF;
				.two-p{
					font-size: 14px;
					font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
					color: #000;
					position: relative;
					left: 20px;
					top: 10px;
					width: 150px;
				}
				.two-span{
					width: 150px;
					position: relative;
					left: 115px;
					top: 30px;
					height: 50px;
				}
			}
		}
	}
	.sliding{
		width: 100%;
		height: 200px;
		border-top: 1px solid #DCDCDC;
		position: relative;
		top: 210px;
		.sliding-p{
			font-size: 16px;
			font-weight: normal;
			margin:10px;
			top: 10px;
			font-family: Helvetica,STHeiti STXihei,Microsoft JhengHei,Microsoft YaHei,Tohoma,Arial;
			color:#000;
		}
		.sliding-ing{
			width: 300px;
			height: 115px;
			margin-left: 35px;
			.sliding-swipe{
				width: 100%;
				height: 100%;
				.sliding-item{
					.sliding-img{
						width: 50%;
						height: 100%;
						margin-left: 75px;
					}
				}
			}
		}
	}
}
</style>
