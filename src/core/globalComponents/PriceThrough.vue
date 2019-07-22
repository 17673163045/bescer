<!--这是价格划线和未划线组件-->
<template>
  <div id="PriceThrougn">
    <div class="pricethrough">
      <div class="leftTxt">划线价格</div>
      <div class="rightDetail">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
    </div>
    <div class="pricethrough">
      <div class="leftTxt">未划线价格</div>
      <div class="rightDetail">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#PriceThrougn {
  width: r(375);
  background-color: rgb(244, 244, 244);
  padding:r(30) 0;
  margin:0 auto;
  margin-bottom:r(62)
}
.pricethrough {
  font-size: r(14);
  margin-top: r(20);
  margin-bottom: r(20);
  height: r(90);
  width: r(343);
  margin: 0 auto;
  display: flex;
}
.pricethrough .leftTxt {
  height: r(90);
  width: r(100);
  color: #222;
}
.pricethrough .rightDetail {
  height: r(90);
  flex: 1;
  color: #999;
}
</style>