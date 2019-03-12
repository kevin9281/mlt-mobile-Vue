<template>
  <div id="home" class="home">
    <!-- navigation  -->
<!--     <van-nav-bar class="vantHeader">
      <router-link to="" slot="left" id='vantTitle'>漫骆驼 - 二次元正版电商,购有爱！</router-link>
      <van-icon name="search" slot="right" class="search"/>
    </van-nav-bar> -->
    <my-header />
    <!-- classification -->
    <van-tabs @click="onClick" sticky animated>
      <van-tab title="首页" class="tabs">
    <!-- slideshow -->
    <van-swipe :autoplay="3000" :width="400" class="vanswipe">
      <van-swipe-item v-for="(images,index) in list" :key="index">
        <img :src='images.img_url' class="swipeimg"/>
      </van-swipe-item>
    </van-swipe>
    <!-- Four  -->
    <van-row type="flex" justify="space-around" class="Scratchable">
      <van-col span="6">
        <router-link to="/Category">
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

    <van-list v-model="loading" :finished="finished" finished-text="已经拉到底了" @load="onload">
      <van-cell v-for="(item,i) in prolist" :key="i">
        <van-card :price="item.price | keepTwoNum" :desc="item.brand" :title="item.title">
          <img :src='item.img_url' alt="" slot="thumb" class="itemimg" />
        </van-card>
      </van-cell>
    </van-list>

    </van-tab>
      <van-tab title="分类" class="tabs">
        <img src="../../public/img/pic1.png" class="pictabs">品牌预售
        <router-link to="/" class="link">11元专区</router-link>
        <router-link to="/" class="link">手办专区</router-link>
        <router-link to="/" class="link">模型专区</router-link>
        <router-link to="/" class="link">服饰鞋帽</router-link>
        <router-link to="/" class="link">生活娱乐</router-link>
        <router-link to="/" class="link">毛绒玩具</router-link>
        <router-link to="/" class="link">精品挂饰</router-link>
        <router-link to="/" class="link">卡通箱包</router-link>
        <router-link to="/" class="link">图书音像</router-link>
        <router-link to="/" class="link">配件工具</router-link>
        <router-link to="/" class="link">预售补款</router-link>
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
      </van-tab>
    </van-tabs>
    <van-button size="large" class="lastbut">查看更多 >></van-button>

  </div>
</template>

<script>
import myHeader from "../components/tabbar/header";

export default {
  name: "home",
  components: {
		myHeader
  },
  data(){
    return{
      prolist:[],
      size:2,
      active:0,
      loading: false,
      finished: false,
      list: [],
      tabslist:[]
    }
  },
  created(){ /* 一般可以在created函数中调用ajax获取页面初始化所需的数据。 */
    this.load(); /* 页面初始化调用这个方法 */
    this.getImage();

  },
  methods:{   
  /* 实现点tabs 点哪个就弹框出哪个 */
    onClick(index, title) {
      this.$toast(title);
    },
    load(){ 
      console.log("加载数据中");
  //发送请求get
      this.axios.get('http://127.0.0.1:3000/product/homelist').then((res)=>{
        //console.log(res.data.data);
          this.prolist = res.data.data
      })
    }, 
    onload(){
      console.log('加载more数据中`');
      // 异步更新数据
      setTimeout(() =>{
        if(this.prolist.length >= this.size) {
          this.size += 2;
          this.axios.get('http://127.0.0.1:3000/product/homelist').then((res)=>{
              this.prolist = res.data.data;
            this.loading = false;
          })
        }
        //数据全部加载完成
        else if (this.prolist.length < this.size) {
          //数据加载状态结束
          this.loading = false;
          this.finished = true;
          this.toast('没有更多数据了');
        }
      },500);
    },
    getImage(){
      this.axios.get('http://127.0.0.1:3000/product/imageList').then(
        result=>{
          //console.log(result);
          this.list = result.data;
        });
    },

  },
}
</script>

<style lang="less" >
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
    margin:0 0 8px 11px;
    }
  }
/* 加载图片 */
.van-cell{
  height: 460px ;
  padding: 0 !important;
  margin-bottom: 12px ;
  .van-card{
    padding:0px;
    margin: 0px;
      .van-card__thumb{
        margin: 0px;
        width: 100%;
        height: 360px;
        .itemimg{
          width:375px;
        }
      }
      .van-card__content{
        top:382px;
        right: 360px;
        width: 100%;
        height: 200px;
          .van-card__title{
            width: 258px;
            color: #51545a;
            font-size: 1.2em;
            font-weight: 700;
          }
          .van-card__desc{
            width:220px;
            color: #87888c;
            font-size: 1.1em;
            margin-top:7px;
          }
          .van-card__price{
            width: 100px;
            top: 0px;
            left: 265px;
            position:absolute;
            color: #f60;
            font-size: 1.25em;
            font-weight: 700;
      }
    }
  }
}
.lastbut{
margin-bottom:20px !important;
font-weight: 700;
font-size: 10px !important;
color: #51545a;
}
.tabs{
  background-color: #fff;
  color: #525252;
  font-size: 15px;
  .link{
    display: block;
    color: #525252;
    font-size: 15px;
    margin-top:30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 40px;
    padding-left: 25px;
  }
  .pictabs{
    width: 3%;
    margin:20px 20px 0 140px;
  }
  .imgsix{
  width:100%;
  }
} 

</style>

