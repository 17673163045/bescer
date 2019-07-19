<template>
  <div id="shopTag">
    <section>
      <div v-if="!GoodsList.length" class="empty">购物车是空的哦~</div>
      <ul class="shopgoods" v-if="GoodsList.length">
        <!-- 购物商品展示开始 -->
        <li class="shopgoodsItem" v-for="(item,index) in GoodsList" :key="index">
          <div class="selectBox">
            <label class="selectLabel" for="checkBtn">
              <input class="selectBtn" type="checkbox" id="checkBtn" value />
            </label>
          </div>
          <div class="itemImgBox">
            <img class="itemImg" :src="item.ImgUrl" alt />
          </div>
          <div class="itemDetail">
            <p class="itemName" v-text="item.Name"></p>
            <p class="itemSize" v-text="item.Size">1.2磅</p>
            <p class="itemPrice" v-text="item.Price + '.00'">118.00</p>
          </div>
          <div class="addGoods">
            <span class="sub iconfont icon-jian"></span>
            <span class="GoodsNum">1</span>
            <span class="add iconfont icon-jiahao1"></span>
          </div>
          <div class="bg"></div>
        </li>
        <!-- 购物商品展示结束 -->
      </ul>
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
    </section>
div.
  </div>
</template>

<script>
export default {
  data() {
    return {
      //定义初始化数据:
      GoodsList: [], //渲染商品的数组列表
    };
  },
  created() {
    this.GoodsList = JSON.parse(window.localStorage.getItem("shopCarList"));
  }
};
</script>

<style lang="scss" scoped>
#shopTag {
  display: flex;
  flex-wrap: wrap;
  width: r(375);
  height: auto;
}
#shopTag section{

}
.empty {
  height: r(60);
  line-height: r(60);
  text-align: center;
  color: rgb(17, 16, 16);
}
//购物商品开始
//ul盒子
.shopgoods {
  width: r(375);
  height: auto;
}
//每个商品的li
.shopgoodsItem {
  padding: r(4) 0;
  height: r(140);
  display: flex;
  position: relative;
}
.selectBox {
  height: 100%;
  width: r(40);
  padding: 0 r(10);
  display: flex;
  align-items: center;
}
.selectBtn {
  height: r(20);
  visibility: hidden;
}
.selectLabel {
  width: r(20);
  height: r(20);
  background: url("https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.selectLabel.current {
  background: url("https://res.bestcake.com/m-images/order/mw_firm_duihao_1.jpg")
    no-repeat;
  background-size: 100% 100%;
}
.shopgoodsItem .itemImgBox {
  width: r(110);
}
.shopgoodsItem .itemImgBox .itemImg {
  width: 100%;
}
.itemDetail {
  width: r(120);
  padding: 0 r(4);
}
.itemDetail .itemName {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: r(16);
  color: #222;
  padding: r(6) 0;
}
.itemDetail .itemSize {
  color: #999;
  font-size: r(12);
  padding-bottom: r(6);
}
.itemDetail .itemPrice {
  padding: r(6) 0;
  font-size: r(13);
  font-weight: bold;
}
.shopgoodsItem .addGoods {
  flex: 1;
  padding: r(12);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: r(14);
}
.addGoods .sub {
  flex: 1;
  height: r(20);
  font-size: r(14);
  font-weight: bold;
  color: #444;
  padding-top: r(2);
}
.addGoods .add {
  flex: 1;
  font-size: r(14);
  font-weight: bold;
  color: #444;
}
.addGoods .GoodsNum {
  flex: 1;
  font-size: r(14);
}
.shopgoodsItem .bg {
  background: rgb(243, 243, 243);
  position: absolute;
  bottom: 0;
  height: r(10);
  width: 100%;
}
//购物商品结束
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