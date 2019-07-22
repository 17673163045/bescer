<!--这是城市选择组件-->
<template>
  <div id="HotProduct">
    <div class="hotProduct">
      <div class="hotTitle">
        <div class="titleTXtEN">Hot Recommend</div>
        <div class="titleTXtCH">热销新品推荐</div>
      </div>
      <div class="hotProductItem">
        <div class="item">
          <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg" class="itemImg" />
          <p class="itemTitle">伴手礼系列-吉致生巧</p>
          <span class="itemPrice">168.00</span>
          <span class="itemSize">/1盒</span>
        </div>
        <div class="item">
          <img src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg" class="itemImg" />
          <p class="itemTitle">伴手礼系列-吉致牛轧糖</p>
          <span class="itemPrice">68.00</span>
          <span class="itemSize">/16粒装</span>
        </div>
        <div class="item">
          <img src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg" class="itemImg" />
          <p class="itemTitle">伴手礼系列-吉致泡芙</p>
          <span class="itemPrice">88.00</span>
          <span class="itemSize">/0.8磅</span>
        </div>
      </div>
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
#HotProduct{
  margin-bottom:r(62)
}
.hotTitle {
  height: r(240);
  background-color: rgb(244, 244, 244);
  padding-top: r(130);
  text-align: center;
}
.hotTitle .titleTXtEN {
  display: inline-block;
  height: r(40);
  line-height: r(40);
  font-size: r(22);
  font-weight: bold;
  color: #222;
  // padding:r(2) 0;
  border-bottom: 2px solid #222;
}
.hotTitle .titleTXtCH {
  height: r(26);
  line-height: r(26);
  color: #222;
  font-size: r(15);
  font-weight: bold;
}
.hotProductItem {
  width: r(375);
  padding: 0 r(16);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hotProductItem .item {
  width: 49%;
  height: r(230);
  margin-bottom: r(10);
}
.hotProductItem .item .itemImg {
  width: 100%;
}
.hotProductItem .item .itemTitle {
  font-size: r(14);
  font-weight: 600;
  padding: r(4) 0;
}
.hotProductItem .item .itemPrice {
  font-size: r(12);
  font-weight: 600;
}
.hotProductItem .item .itemSize {
  font-size: r(12);
}
</style>