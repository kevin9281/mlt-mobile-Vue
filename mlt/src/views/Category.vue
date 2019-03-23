<template>
	<div id="Category">
		<my-header1 />
		<div class="carte">
			<div class="cover"></div>
			<van-row type="flex" justify="center" class="row-cat">
  			<van-col span="8" class="booking"><span class="col-book">品牌预售</span></van-col>
			</van-row>
			<van-row type="flex" justify="center" class="row-scr">
  			<van-col span="8" class="col-span"><span>上市</span></van-col>
  			<van-col span="8" class="col-span"><span>价格</span></van-col>
  			<van-col span="8" class="col-span"><span>人气</span></van-col>
			</van-row>
		</div>
		<div class="productlist">
			<van-row class="cat-row">
				<van-col span="12" class="cat-col" v-for="(item,i) in goodItems" :key="i">
					<img :src="item.categoryPic" class="cat-img">
					<p class="cat-price">¥{{item.price.toFixed(2)}}元</p>
					<p class="cat-title">{{item.title}}</p>
				</van-col>
			</van-row>
		</div>
			<van-pagination  class="paging"
				v-model="currentPage" 
				:total-items="20" 
				:items-per-page="10"
				
			/>
	</div>
</template>

<script>
import myHeader1 from "../components/tabbar/header1";


export default {
	
		components: {
		myHeader1
		},

	data () {
		return {
			currentPage: 1,  /* 当前页码 */
			goodItems:[],
			pno:0,
			pageSize:10,
			pageCount:2   /* 总页数 */
		}
	},
	beforeCreate(){
		
	},
	created () { 
		this.loading();
	},
	mounted () {

	},
	methods:{
		loading () {
	//发送请求get
			this.pno++;
			var url = "http://127.0.0.1:3000/product/CategoryPro";
			url += "?pno="+this.pno+"&pageSize="+this.pageSize;
			this.axios.get(url).then(result=>{
				//console.log(result.data.data);
				var rous = this.goodItems.concat(result.data.data);
				this.goodItems = rous;
				console.log(this.pno);
			})	
		},
	}
}
</script>

<style  lang="less" >
#Category{
	height: 1500px;
	background: #EAEAEA;
	.paging{
		position: relative;
		bottom: 60px;
		.van-pagination__item{
			background:  #F7762E;
			color: #fff;
		}
		.van-pagination__item:active{
			background: #fff;
		}
		.van-pagination__item--active{
			background-color: red; 
		}
	}
}
.carte{
	height: 1420px;
	.cover{
		height: 11px;
	}
	.row-cat{
		height: 50px;
		background: #fff;
		.booking{
			background: url('../../public/img/pic1.png') no-repeat 19% 50%;
			background-size: 14px;
			.col-book{
				font-size: 15px;
				color: #525252;
				position:absolute;
				left: 175px;
				top: 85px;
			}
		}
	}
	.row-scr{
		background: #F7F7F7;
		.col-span{
			width: 125px;
			height: 44px;
			border-right: 1px solid #e6e6e6;
			font-size: 13px;
			color: #525252;
			text-align: center;
			line-height: 45px;
		}
	}
}
.productlist{
	position: absolute;
	top: 167px;
	width: 375px;
	height: 1204px;
	.cat-row{
		width: 210px;
		height: 239px;
		margin-top: 10px;
		display: inline;
		.cat-col{
			width: 187px;
			height: 242px;
			background: #fff;
			margin-top: 3px;
			border-bottom: 1px solid #D2D2D4;
			border-left: 3px solid #D2D2D4;
			.cat-img{
				width: 184px;
				height: 184px;
				border-radius: 5px 5px 0 0;;
			}
			.cat-price{
				color: #c00;
				font-size: 16px;
				font-weight: 700;
				margin-left: 50px;
				margin-bottom: 0;
			}
			.cat-title{
				white-space:nowrap;
				overflow:hidden;
				text-overflow:ellipsis;
				color: #333;
				font-size: 14px;
				text-decoration: none;
				margin-left: 18px;
			}
		}
	}
}
</style>
