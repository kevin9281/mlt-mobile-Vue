<template>
	<div  class="details">
		<van-nav-bar :title=this.title left-arrow @click-left="goback()">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<div class="shuffl">
			<van-swipe :autoplay="3000" indicator-color="white" class="shuffl-swipe" >
				<van-swipe-item v-for="item in img" :key="item.id" class="shuffl-item">
					<img :src="item.img_url" clas='shuffl-img'>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title">
			<p class="title-p"><strong>{{title}}</strong></p>
		</div>
		<div class="price">

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
			lbimg:['../../public/img/xq/xglb1.jpg','../../public/img/xq/xglb2.jpg','../../public/img/xq/xglb3.jpg','../../public/img/xq/xglb4.jpg'],
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
		height: 147px;
		border: 1px solid red;
	}
	.classification{
/* 		height: 100%; */
		border: 1px solid red; 
		.class-tabs{
			height: 100%;
			border: 1px solid red;
			.class-tab-one{
				height: 710px;
				border: 1px solid red;
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
		border: 1px solid red;
		border-top: 1px solid red;
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
	}
}

</style>
