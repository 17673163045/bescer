<!--这是用户"我的"的组件-->
<template>
  <div id="usermy">
    <login v-if="!islogin" :routeFrom="routeFrom"></login>
    <div class="usermain" v-if="islogin">
      <div class="userInfo">
        <!-- 用户头像 -->
        <div class="touxiang">
          <div class="imgMain">
            <img src="https://res.bestcake.com/m-images/order/mw-person-tx.png" alt />
          </div>
        </div>
        <!-- 用户姓名 -->
        <div class="userName">16680449520</div>
      </div>
      <div class="usertitle">
        <div class="titleItem" v-for="(item,index) in usertitle" :key="index" v-text="item.title"></div>
      </div>
      <div class="uservalue">
        <div class="valueItem" v-for="(item,index) in uservalue" :key="index" v-text="item.value"></div>
      </div>
      <div class="bg"></div>
      <div class="userBuyInfo">
        <div class="order-goods BuyInfoItem">
          <span class="iconfont icon-icon_order left iconfontItem"></span>
          <span class="left">我的订单</span>
          <span class="iconfont icon-jiantou right"></span>
        </div>
        <div class="userPlace BuyInfoItem">
          <span class="iconfont icon-shouhuodizhi- left iconfontItem"></span>
          <span class="left">收货地址</span>
          <span class="iconfont icon-jiantou right"></span>
        </div>
      </div>
      <div class="kefu">
        <div class="kefutel">客服热线：400-627-5757</div>
        <div class="xieyi">服务协议与证照信息</div>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/components/login2";
export default {
  data() {
    return {
      routeFrom:"",
      usertitle: [
        { title: "会员等级" },
        { title: "吉致币" },
        { title: "优惠券" },
        { title: "兑换券" }
      ],
      uservalue: [
        { value: "V0" },
        { value: "0" },
        { value: "0" },
        { value: "0" }
      ],
      uName: ""
    };
  },
  created() {},
  computed: {
    //监听islogin是否登录,同步login组件的话用this.$store.state.islogin,刷新的话要用window.sessionStorage
    islogin() {
      if (window.sessionStorage.getItem("islogin")) {
        return window.sessionStorage.getItem("islogin");
      } else {
        return this.$store.state.islogin;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm=>{
      vm.routeFrom = from.path
    });
  },
  components: {
    login
  }
};
</script>

<style lang="scss" scoped>
#usermy {
  width: 100%;
  height: 100%;
  .usermain {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .userInfo {
    height: r(160);
    padding: r(20) 0;
    width: 100%;
    .touxiang {
      height: r(90);
      display: flex;
      justify-content: center;
      align-items: center;
      .imgMain {
        height: r(80);
        width: r(80);
        border-radius: 50%;
        background: #ddd;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .userName {
      height: r(30);
      text-align: center;
    }
  }
  .usertitle {
    padding: r(6) r(10);
    color: #999;
    font-size: r(14);
    display: flex;
    justify-content: space-between;
    text-align: center;
    .titleItem {
      flex: 1;
    }
  }
  .uservalue {
    padding: r(6) r(10);
    font-size: r(14);
    display: flex;
    justify-content: space-between;
    text-align: center;
    .valueItem {
      flex: 1;
    }
  }
  .bg {
    height: r(15);
    background-color: rgb(244, 244, 244);
  }
  .userBuyInfo {
    height: r(110);
    padding-left: r(16);
    .BuyInfoItem {
      font-size: r(16);
      height: r(55);
      padding: r(10);
      line-height: r(35);
      border-bottom: 1px solid #ddd;
      .left {
        float: left;
        margin-right: r(6);
      }
      .iconfontItem {
        font-size: r(24);
      }
      .icon-jiantou.right {
        float: right;
        color: #ddd;
      }
    }
    .userPlace {
      border-bottom: none;
    }
  }
  .kefu {
    flex: 1;
    background-color: rgb(244, 244, 244);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: #999;
    .kefutel,
    .xieyi {
      margin-bottom: r(60);
    }
  }
}
</style>