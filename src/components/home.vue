<template>
  <div id="home">
    <!--这是顶部轮播图组件-->
    <topbanner v-if="SwiperBannerList.length" :imgList="SwiperBannerList"></topbanner>
    <!--这是广告组件-->
    <ad></ad>
    <!-- 这是商品列表组件 -->
    <goodsList v-if="TopIconList.length" :imgList="TopIconList"></goodsList>
    <!-- 这是通知组件 -->
    <notice></notice>
    <!-- 这是精品商品系列组件 -->
    <finegoods v-if="CenterContentList.length" :imgList="CenterContentList"></finegoods>
    <!-- 这是更多商品的入口图片组件 传参moreGoodsparams[0]-->
    <moreGoods :ImgUrl="moreGoodsparams[0].ImgUrl"></moreGoods>
    <!-- 这是一个共同的轮播图组件 传入SaleList[0]-->
    <commonBanner v-if="SwiperBannerList.length" :imgList="SaleList[0].CakeList"></commonBanner>
    <!-- 这是更多商品的入口图片组件 传参moreGoodsparams[1]-->
    <moreGoods :ImgUrl="moreGoodsparams[1].ImgUrl"></moreGoods>
    <!-- 这是一个共同的轮播图组件 传入SaleList[1]-->
    <commonBanner v-if="SwiperBannerList.length" :imgList="SaleList[1].CakeList"></commonBanner>
    <!-- 这是更多商品的入口图片组件 传参moreGoodsparams[2]-->
    <moreGoods :ImgUrl="moreGoodsparams[2].ImgUrl"></moreGoods>
    <!-- 这是一个共同的轮播图组件 传入SaleList[2]-->
    <commonBanner v-if="SwiperBannerList.length" :imgList="SaleList[2].CakeList"></commonBanner>
    <!-- 这是底部的导航栏 -->
  </div>
</template>

<script>
//导入组件
import topbanner from "@/components/topBanner";
import ad from "@/components/ad";
import goodsList from "@/components/goodsList";
import notice from "@/components/notice";
import finegoods from "@/components/finegoods";
import moreGoods from "@/components/moreGoods";
import commonBanner from "@/components/commonBanner";

export default {
  data() {
    return {
      SwiperBannerList: [],
      TopIconList: [],
      CenterContentList: [],
      SaleList: [],
      moreGoodsparams: [
        {
          ImgUrl:
            "https://res.bestcake.com/m-images/HotRecommend/571060506020139900.jpg",
          routerPath: ""
        },
        {
          ImgUrl:
            "https://res.bestcake.com/m-images/HotRecommend/427276281583982800.jpg",
          routerPath: ""
        },
        {
          ImgUrl:
            "https://res.bestcake.com/m-images/HotRecommend/497197919096789000.jpg",
          routerPath: ""
        }
      ]
    };
  },
  mounted() {
    this.pageInit(); // 页面初始化
  },
  computed: {},
  methods: {
    pageInit() {
      this._bescerIndex(); //请求接口,拿到数据赋给data
    },

    //请求接口,拿到数据赋给data的函数
    _bescerIndex() {
      let bescerIndex = this.$apis.bescerIndex();
      bescerIndex.then(res => {
        let data = res.data.Tag.mainresult;
        this.SwiperBannerList = data.SwiperBannerList; //顶部轮播图数据
        this.TopIconList = data.TopIconList; //中间商品数据,西点,蛋糕等..
        this.CenterContentList = data.CenterContentList; //矩形排列商品数据,许愿天使等..
        this.SaleList = this.$globalFns.getImgUrl(data.SaleList); //三个轮播图数据;
      });
    },
  },
  //使用组件
  components: {
    topbanner,
    ad,
    goodsList,
    notice,
    finegoods,
    moreGoods,
    commonBanner,
  }
};
</script>


<style lang="scss" scoped>
</style>
