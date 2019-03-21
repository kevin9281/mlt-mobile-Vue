<template>
	<div  class="details">
		<van-nav-bar :title=this.title left-arrow @click-left="goback()">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="shuffl">
			<van-swipe :autoplay="3000" indicator-color="white" class="shuffl-swipe" >
				<van-swipe-item v-for="item in img" :key="item.id" class="shuffl-item">
					<img :src="item.img_url" class='shuffl-img'>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title">
			<p class="title-p"><strong>{{title}}</strong></p>
		</div>
		<div class="price">
			<div class="price-div"> 
				<p class="price-p">本店价<strong class="price-price">11.00</strong><del class="price-del">¥13.20元</del></p>
				<p class="price-p">品&nbsp;&nbsp;&nbsp;牌<span class="price-span">口袋妖怪</span></p>
				<p class="price-p price-p-p">库&nbsp;&nbsp;存<span class="price-span-span">暂时缺货</span></p>
				<van-button type="warning" class="but-t">立即购买</van-button>
				<van-button type="warning" class="but-t">加入购物车</van-button>
			</div>
		</div>
		<div class="classification" sticky="false" >
			<van-tabs @click="ononClick" class="class-tabs">
				<van-tab title="图文详情" class="class-tab-one">
					<div class="calss-tab-one-imgs" v-for="i in xqimg" :key="i.uid">
						<img :src="i.xqimg_url" class="class-tab-one-img">
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
export default {
	data () {
		return {
			title:'皮卡丘眼镜厂挂件-《口袋妖怪》眼镜厂 毛绒钥匙挂件特价（随机发货）',
			img:[
				{id:1,img_url:require('../../public/img/xq/pkq.jpg')},
				{id:2,img_url:require('../../public/img/xq/pkq.jpg')},
				{id:3,img_url:require('../../public/img/xq/pkq.jpg')},
				{id:4,img_url:require('../../public/img/xq/pkq.jpg')}
				],
			xqimg:[
				{uid:1,xqimg_url:require('../../public/img/xq/pkqxq1.jpg')},
				{uid:2,xqimg_url:require('../../public/img/xq/pkqxq2.jpg')},
				{uid:3,xqimg_url:require('../../public/img/xq/pkqxq3.jpg')},
				{uid:4,xqimg_url:require('../../public/img/xq/pkqxq4.jpg')}
				],
			lbimg:[
				{pid:1,lbimg_url:require('../../public/img/xq/xglb1.jpg')},
				{pid:1,lbimg_url:require('../../public/img/xq/xglb2.jpg')},
				{pid:1,lbimg_url:require('../../public/img/xq/xglb3.jpg')},
				{pid:1,lbimg_url:require('../../public/img/xq/xglb4.jpg')}
			],
			current:0
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
		},
		onClick(index,title) {
			this.$toast(title);
		},
		ononClick(index) {
			this.current = index;
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
