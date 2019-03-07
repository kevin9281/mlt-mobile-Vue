<template>
<div id="my-footer">
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
			电脑版
		</van-col>
		<van-col span="6">
			会员登录
		</van-col>
		<van-col span="6" class="lastcol">
			购物车
		</van-col>
	</van-row>
	<p class="lastp">客服热线 <a @click="callPhone" class="lasta">010-57114765</a></p>

</div>
</template>

<script>
export default {
	name:'myFooter',
	data(){
		return{

		}
	},
	methods:{
	callPhone(){
      window.location.href = 'tel://010-57114765'
    },
	}
}

</script>


<style lang="less">
#my-footer{
	top: 10px;
	bottom: 10px;
	height: 200px;
	margin: 0;
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
		color: #88898d;
		font-size: 15px;
		.van-col--6{
			width: 20%;
			border-right: .06667em solid #ccc;
		}
		.lastcol{
			border:none !important;
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
</style>
