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

		</div>
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

		}
	}
}
</script>

<style  lang="less" >
#Category{
	height: 1420px;
	background: #EAEAEA;
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

}
</style>
