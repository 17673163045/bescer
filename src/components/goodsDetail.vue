<!--这是商品详情页面的组件-->
<template>
  <div id="goodsDetail">
    <mt-swipe :auto="2000" class="swip-contain">
      <mt-swipe-item v-for="(item,index) in imgUrlList" :key="index">
        <img class="bannerImg" :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <p class="proName" v-text="queryData.Name"></p>
    <div class="newordiscount">
      <div class="txt">新</div>
    </div>
    <p class="bg"></p>
    <div class="Prodetail">
      <div class="detailItem" v-for="(item,index) in describe" :key="index">
        <div class="itemTitle" v-text="item.title"></div>
        <div class="itemContent" v-html="item.content"></div>
      </div>
    </div>
    <p class="bg"></p>
    <div class="comment">
      <div class="itemLeft">
        <i class="iconfont"></i>
        <span>商品评价</span>
      </div>
      <div class="itemRight">
        <span class="commentNum">(7469条)</span>
        <i class="iconfont"></i>
      </div>
    </div>
    <p class="bg"></p>
    <!-- 选择商品尺寸或种类 -->
    <div class="goodsSize">
      <div
        class="btn"
        v-for="(item,index) in CakeType"
        :key="index"
        v-text="item.Size"
        :class="{'current':index==sizeCurrent}"
        @click="changeSizeCurrent(index),selectSize(item)"
      ></div>
    </div>
    <p class="bg"></p>

    <!-- 商品加减的逻辑 -->
    <div class="addNum" v-if="$store.state.selectedSize">
      <div class="buyTxt">购买数量</div>
      <div class="buyNum">
        <span class="buyitem sub">-</span>
        <span class="buyitem" v-text="goodsNum"></span>
        <span class="buyitem add" @click="addNum">+</span>
      </div>
    </div>
    <PriceThrough></PriceThrough>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      // 定义初始化页面数据
      KeepFresh:
        "最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月30日建议3天内食用。",
      queryData: "", //路由携带数据,添加城市属性
      imgUrlList: "", // 详情页轮播图数据,按照queryData的货号函数拼接
      resData: "", //详情页接口商品总数据,根据queryData的商品名称等参数请求各个商品的接口
      infosData: "", //详情页的商品描述数据,包含甜度,原料等,要兼容接口数据
      CakeType: "", //详情页商品尺寸种类size数据
      describe: "", // 根据infosData的数据筛选出来的的商品描述
      //定义逻辑数据
      sizeCurrent: 0, //改变尺寸样式数据
      goodsNum: 1, //详情页商品加减后的数量数据
    };
  },
  //按需取数据
  created() {
    this.queryData = this.$route.query; //利用this.$route.query取到路由跳转的参数
    this.queryData.City = this.$store.state.City; // 设置queryData的城市参数,城市参数保存在Vuex
    this.imgUrlList = this.$globalFns.getImgByQuery(this.$route.query); //用函数处理queryData拼接图片地址
    //异步数据同步处理
    this._getGoodsApi(res => {
      this.resData = res;
      this.infosData = this.getInfosData(this.resData, this.queryData.City)[0];
      this.CakeType = this.getInfosData(this.resData, this.queryData.City)[1];
      this.describe = [
        {
          title: "甜度",
          content: `<img style="height:16px" src=${this.getSweetImg(
            this.CakeType[0].Sweet
          )}>`
        },
        { title: "口味", content: this.infosData.CategoryName },
        {
          title: "原材料",
          content: this.infosData.Resourse || this.infosData.Resource
        },
        { title: "适合人群", content: this.infosData.Detail || "所有人群" },
        {
          title: "保鲜条件",
          content: this.infosData.KeepFresh || this.KeepFresh
        }
      ];
      this.selectSize(this.CakeType[0]);
    });
  },
  mounted() {},
  watch: {},
  methods: {
    ...mapMutations(["selectSize"]),
    //加减商品的数量
    addNum() {
      this.goodsNum++;
      this.$store.state.selectedSize.Num++;
      console.log(this.$store.state.selectedSize)
      //   this.$store.state.selectedSize.Num++;
    },
    //按照不同的queryData参数请求各个商品的接口,回调函数处理result
    _getGoodsApi(callback) {
      //不同的接口参数,必须在queryData设置后才能设置
      var KSKdata = {
        city: this.queryData.City,
        ProName: this.queryData.Name,
        c: "Product",
        m: "GetCakeByName",
        v: new Date().getTime()
      };
      var NSdata = {
        Name: this.queryData.Name,
        c: "NsCakeCenter",
        m: "GetNSCakeByName",
        v: new Date().getTime()
      };
      var JZdata = {
        city: this.queryData.City,
        ProName: this.queryData.Name,
        c: "IndexCenter",
        m: "GetjzCakeInfo",
        v: new Date().getTime()
      };
      var RPdata = {
        Name: this.queryData.Name,
        c: "NsCakeCenter",
        m: "GetRuPCakeByName",
        v: new Date().getTime()
      };
      //如果是经典系列,请求这个接口
      if (this.queryData.SupplyNo.indexOf("KSK") != -1) {
        var promiseData = this.$apis.getApiByQuery(KSKdata);
        promiseData.then(res => {
          callback(res);
        });
      }
      //如果是女神系列,请求这个接口
      else if (this.queryData.SupplyNo.indexOf("NS") != -1) {
        var promiseData = this.$apis.getApiByQuery(NSdata);
        promiseData.then(res => {
          callback(res);
        });
      }
      //如果是伴手礼系列,请求这个接口
      else if (this.queryData.SupplyNo.indexOf("JZ") != -1) {
        var promiseData = this.$apis.getApiByQuery(JZdata);
        promiseData.then(res => {
          callback(res);
        });
      }
      //如果是乳品系列,请求这个接口
      else if (this.queryData.SupplyNo.indexOf("RP") != -1) {
        var promiseData = this.$apis.getApiByQuery(RPdata);
        promiseData.then(res => {
          callback(res);
        });
      }
    },

    //处理返回的数据,得到infosData,兼容数组和对象两种情况,兼容数组只有一位的情况
    //得到CakeType,兼容CakeType没有值的情况
    getInfosData(resData, city) {
      let infosData = "";
      let CakeType = [];
      let tag = resData.data.Tag;
      if (Array.isArray(tag)) {
        if (tag.length <= 2) {
          infosData = tag[0];
          CakeType = tag[0].CakeType;
          CakeType.forEach(item => {
            item.Size = item.KW;
          });
        } else {
          tag.forEach(el => {
            if (el.City == city) {
              infosData = el;
              CakeType.unshift(el);
              infosData.Detail = JSON.parse(el.Details).details_tips;
            }
          });
        }
      } else {
        infosData = tag.infos;
        CakeType = infosData.CakeType;
        infosData.Detail = JSON.parse(resData.data.Tag.Detail[0]).details_tips;
      }
      return [infosData, CakeType];
    },

    //处理返回的数据,传入已经得到的infosData,
    getCakeType(infosData) {
      let CakeType = [];
      if (infosData.CakeType) {
        CakeType = infosData.CakeType;
      } else {
        CakeType[0] = infosData;
      }
      return CakeType;
    },
    //选择商品size改变类名样式
    changeSizeCurrent(index) {
      this.sizeCurrent = index;
    },
    //获取甜度图片
    getSweetImg(sweet) {
      return `https://res.bestcake.com/m-images/ww/jz/tiandu_${sweet}.png`;
    }
  },

  components: {}
};
</script>

<style lang="scss" scoped>
#goodsDetail {
  height: auto;
  width: r(375);
  margin: 0 auto;
}
.swip-contain {
  height: r(450);
}
.bannerImg {
  height: 100%;
  width: 100%;
}
.proName {
  text-align: center;
  color: #222;
  font-weight: bold;
  font-size: r(18);
  padding: r(6) 0;
}
.newordiscount {
  height: r(50);
}
.newordiscount .txt {
  font-size: r(18);
  text-align: center;
  height: r(30);
  line-height: r(30);
  width: r(30);
  margin: 0 auto;
  background: #f2495e;
  color: #fff;
  border-radius: r(4);
}
.bg {
  height: r(20);
  background-color: rgb(244, 244, 244);
}
.Prodetail {
  height: auto;
  width: r(375);
  margin: 0 auto;
  padding: r(30) r(16);
}
.detailItem {
  display: flex;
  padding: r(6) 0;
  font-size: r(14);
}
.itemTitle {
  color: #999;
  width: r(80);
}
.itemContent {
  flex: 1;
  color: #333;
}
.comment {
  height: r(50);
  padding: r(8) r(16);
}
.comment .itemLeft {
  height: r(34);
  line-height: r(34);
  float: left;
}
.comment .itemRight {
  height: r(34);
  line-height: r(34);
  float: right;
}
.goodsSize {
  height: r(80);
  padding: r(25) r(16);
}
.goodsSize .btn {
  float: left;
  height: r(30);
  padding: 0 r(14);
  line-height: r(30);
  color: #000;
  border: 1px solid rgb(184, 183, 183);
  border-radius: 3px;
  margin-right: r(16);
}
.goodsSize .btn.current {
  background-color: #02d3d6;
  color: #fff;
  border: 1px solid transparent;
}
.addNum {
  width: r(375);
  margin: 0 auto;
  height: r(40);
  padding: r(10) r(16);
  font-size: r(14);
}
.addNum .buyTxt {
  float: left;
}
.addNum .buyNum {
  float: right;
}
.addNum .buyNum .buyitem {
  float: left;
  width: r(30);
  text-align: center;
  font-size: r(14);
}
.addNum .buyNum .sub {
  color: #999;
}
</style>