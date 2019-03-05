<template>
  <div id="home" class="home">
    <!-- 导航栏 -->
    <van-nav-bar class="vantHeader">
      <router-link to="" slot="left" id='vantTitle'>漫骆驼 - 二次元正版电商,购有爱！</router-link>
      <van-icon name="search" slot="right" class="search"/>
    </van-nav-bar>
    <!-- 分类 -->
    <van-tabs>
      <van-tab title="首页" class="tabs">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :width="400" class="vanswipe">
      <van-swipe-item v-for="(images,index) in images" :key="index">
        <img :src='images' class="swipeimg"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 四宫格 -->
    <van-row type="flex" justify="space-around" class="Scratchable">
      <van-col span="6">
        <router-link to="/Newslist">
          <img src="../../public/img/commom/icon_indexn_01.c85c4c7b.png" class="latex">
          <div class="text">品牌预售</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/Newslist">
          <img src="../../public/img/commom/icon_indexn_02.png" class="latex">
          <div class="text">特价闪购</div>
        </router-link>  
      </van-col>
      <van-col span="6">
        <router-link to="/Newslist">
          <img src="../../public/img/commom/icon_indexn_04.png" class="latex">
          <div class="text">品牌街</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/Newslist">
          <img src="../../public/img/commom/icon_indexn_08.png" class="latex">
          <div class="text">联系我们</div>
        </router-link>
      </van-col>
    </van-row>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onload">
      <van-cell v-for"(e,i) of list" :key="i" @click="todetail(e.pid)">
        <van-card :price="e.price" :desc="e.brand" :title="e.title" :origin-price="e.oldprice">
          <img :src="e.goodPic.split(' ')[0]" slot="thumb">
          <div slot="footer">
            <van-button size="mini">查看详情</van-button>
          </div>
        </van-card>
      </van-cell>
    </van-list>
    </van-tab>
      <van-tab title="分类" class="tabs">
          什么都没有
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      size:2,
      active:0,
      loading: false,
      finished: false,
      images: [
        './img/head/big1.jpg',
        './img/head/big5.jpg',
        './img/head/big6.jpg',
        './img/head/big4.jpg',
      ],
    }
  },
  created(){
    this.load()
  },
  methods:{
    onClick(index, title) {
    this.$toast(title);
    },
    load(){
      console.log("加载数据中");
    },
    onload(){
      
    }
  }
}
</script>

<style lang="less">
.home{
  background-color: #EBECED;
}
/* tabs text */
.van-tabs__nav{
  background-color: #EBECED !important;
    .van-tabs__line{
      background-color: #ff8600 !important;
      }
    .van-ellipsis{
      font-family:"微软雅黑";
      font-weight:bold;
    }
  }

/* navbar */
.vantHeader{
  background: linear-gradient(#ffad52,#ff8600) !important;
  width:100%;
  height:60px !important;
  line-height:60px !important;
  border:0;
    #vantTitle{
      color: #fff;
      font-size: 18px;
    }
    .search{
      color:#fff !important;
      font-size: 30px !important;
  }
}
/* swipe */
.swipeimg{
  width: 100%;
}
/* Scratchable latex */
.Scratchable{
  margin: 10px 0 0 20px;;
    .latex{
      width: 70px;
    }
    .text{
    color: #333;
    font-size: 13px;
    margin-left: 11px;
    }
  }

</style>

