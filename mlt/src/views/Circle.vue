<template>
	<div id="circle">
		<my-header1 />
		<!-- closeable 模式，在右侧显示关闭按钮 -->
		<van-notice-bar mode="closeable">
			漫骆驼,二次元正版电商 够有爱!漫社区,品牌预售,特价闪购,品牌街
		</van-notice-bar>
		<!-- link 模式，在右侧显示链接箭头 -->
		<van-notice-bar mode="link">
  		漫骆驼,二次元正版电商 够有爱!漫社区,品牌预售,特价闪购,品牌街
		</van-notice-bar>
		<img src="../../public/img/head/big7.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big8.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big9.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big10.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big7.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big8.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big9.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big10.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big7.jpg" alt="" class="imgsix">
    <img src="../../public/img/head/big8.jpg" alt="" class="imgsix">
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

<style>
.imgsix{
  width:100%;
}
</style>
