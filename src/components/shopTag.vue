<template>
  <div id="shopTag">
    <section>
      <div v-if="!GoodsList.length" class="empty">购物车是空的哦~</div>
      <ul class="shopgoods" v-if="GoodsList.length">
        <!-- 购物商品展示开始 -->
        <li class="shopgoodsItem" v-for="(item,index) in GoodsList" :key="index">
          <div class="selectBox">
            <label
              class="selectLabel"
              :class="{'current':toggleClass(item)}"
              :for="'checkBtn'+index"
            >
              <input
                class="selectBtn"
                type="checkbox"
                :id="'checkBtn'+index"
                :value="item.id"
                v-model="selectList"
                @change="isAllSelect"
              >
            </label>
          </div>
          <div class="itemImgBox">
            <img class="itemImg" :src="item.ImgUrl" alt>
          </div>
          <div class="itemDetail">
            <p class="itemName" v-text="item.Name"></p>
            <p class="itemSize" v-text="item.Size">1.2磅</p>
            <p class="itemPrice" v-text="item.Price * item.Num + '.00'"></p>
          </div>
          <div class="addGoods">
            <span class="sub iconfont icon-jian" @click="subGoodsNum(item)"></span>
            <span class="GoodsNum" v-text="item.Num"></span>
            <span class="add iconfont icon-jiahao1" @click="addGoodsNum(item)"></span>
          </div>
          <div class="bg"></div>
        </li>
        <!-- 购物商品展示结束 -->
      </ul>
      <HotProduct></HotProduct>
    </section>
    <!-- 结算部分 -->
    <div class="footCount">
      <div class="allcheckBox">
        <!-- 全选框 -->
        <label class="selectLabel" :class="{'current':isSelectAll}" for="allChecked">
          <input
            class="selectBtn"
            type="checkbox"
            id="allChecked"
            v-model="isSelectAll"
            @change="selectAll"
          >
        </label>
      </div>
      <div class="allCheckTxt txt">全选</div>
      <!-- 清空框 -->
      <div class="clearTxt txt" @click="removeAll">清空</div>
      <div class="countPrice">
        <div class="countNumBox">
          <!-- 总价框 -->
          <span class="countNum countitem" v-text="totalPrice + '.00'"></span>
          <span class="countTxt countitem">合计&nbsp;:</span>
        </div>
        <div class="countNumBox">
          <!-- 优惠框 -->
          <span class="discountNum countitem">0.00</span>
          <span class="discountTxt countitem">已优惠&nbsp;:</span>
        </div>
      </div>
      <!-- 结算按钮 -->
      <div class="countBtn">结算</div>
    </div>
  </div>
</template>

<script>
import HotProduct from "@/components/HotProduct";
export default {
  data() {
    return {
      //定义初始化数据:
      GoodsList: [], //渲染商品的数组列表,从localstorage获取

      //定义逻辑数据
      selectList: [], //勾选的商品,双向绑定单选框的value,value绑定为item.id
      isSelectAll: "" //双向绑定全选框
    };
  },
  created() {
    //给GoodsList赋值
    this.GoodsList = JSON.parse(
      window.localStorage.getItem("shopCarList") || "[]"
    );
    //查询选中商品
    this.selectList = JSON.parse(
      window.localStorage.getItem("selectedGoods") || "[]"
    );
    //初始化查询是否所有都选中
    this.SelectedInit();
    this.isAllSelect();
  },
  computed: {
    //计算总价
    totalPrice() {
      let totalPrice = 0;
      this.selectList.forEach(el => {
        this.GoodsList.forEach(item => {
          if (el == item.id) {
            totalPrice += item.Price * item.Num;
          }
        });
      });
      return totalPrice;
    }
  },
  watch: {},
  methods: {
    //添加商品的数量,最多20个,绑给加号按钮
    addGoodsNum(item) {
      if (item.Num >= 20) {
        return;
      }
      item.Num++;
      window.localStorage.setItem(
        "shopCarList",
        JSON.stringify(this.GoodsList)
      );
    },
    //减少商品数量,减到0删除商品,并更新localstorage,绑给减号按钮
    subGoodsNum(item) {
      if (item.Num <= 1) {
        if (confirm("确认要删除商品吗")) {
          this.GoodsList.forEach((el, index) => {
            if (el.id == item.id) {
              this.GoodsList.splice(index, 1);
              if (!this.GoodsList.length) {
                this.isSelectAll = false;
              }
              this.$store.state.shopCarList = this.GoodsList;
              window.localStorage.setItem(
                "shopCarList",
                JSON.stringify(this.GoodsList)
              );
            }
          });
          this.selectList.forEach((element, index) => {
            if (element == item.id) {
              this.selectList.splice(index, 1);
              window.localStorage.setItem(
                "selectedGoods",
                JSON.stringify(this.selectList)
              );
            }
          });
        }
        return;
      }
      item.Num--;
      window.localStorage.setItem(
        "shopCarList",
        JSON.stringify(this.GoodsList)
      );
    },
    //全选,反选的函数,绑给全选框
    selectAll() {
      if (!this.GoodsList.length) {
        this.isSelectAll = false;
        return false;
      }
      if (this.isSelectAll) {
        this.selectList.length = 0; //全选时进来先清空单选
        this.GoodsList.forEach(el => {
          this.selectList.push(el.id);
        });
        window.localStorage.setItem(
          "selectedGoods",
          JSON.stringify(this.selectList)
        );
      } else {
        for (var i = 0; i < this.GoodsList.length; i++) {
          this.selectList.pop();
        }
        window.localStorage.setItem(
          "selectedGoods",
          JSON.stringify(this.selectList)
        );
      }
    },
    //判断是否全部选中的函数,绑给每个单选框
    isAllSelect() {
      window.localStorage.setItem(
        "selectedGoods",
        JSON.stringify(this.selectList)
      );
      if (
        this.selectList.length == this.GoodsList.length &&
        this.selectList.length != 0
      ) {
        this.isSelectAll = true;
      } else {
        this.isSelectAll = false;
      }
    },
    //给选中状态的框添加或移除current类名,返回true或false,通过:class来控制
    toggleClass(item) {
      var flag = false;
      this.selectList.forEach(el => {
        if (item.id == el) {
          flag = true;
        }
      });
      return flag;
    },
    //清空所有商品
    removeAll() {
      //如果本来是空的,return,节省性能.
      if (!this.GoodsList.length) {
        this.isSelectAll = false;
        return;
      }
      this.GoodsList = [];
      this.$store.state.shopCarList = [];
      window.localStorage.setItem("shopCarList", "[]");
      this.selectList = [];
      window.localStorage.setItem("selectedGoods", "[]");
      this.isSelectAll = false;
    },
    //记住选中状态的函数,结算时要得到选中的商品再结算
    SelectedInit() {
      this.selectList = [];
      this.GoodsList.forEach(el => {
        this.selectList.push(el.id);
      });
      window.localStorage.setItem(
        "selectedGoods",
        JSON.stringify(this.selectList)
      );
    }
  },
  components: {
    HotProduct
  }
};
</script>

<style lang="scss" scoped>
#shopTag {
  display: flex;
  flex-wrap: wrap;
  width: r(375);
  height: auto;
  margin: 0 auto;
}
#shopTag section {
  height: auto;
  overflow: hidden;
  margin-bottom: r(60);
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
  position: absolute;
  top: 20px;
  left: 0;
  visibility: hidden;
}
.selectLabel {
  position: relative;
  overflow: hidden;
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
//结算部分
.footCount {
  display: flex;
  align-items: center;
  height: r(60);
  width: r(375);
  margin: 0 auto;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  bottom: r(60);
}
.allcheckBox {
  padding: 0 r(6) 0 r(16);
  display: flex;
  align-items: center;
}
.allCheckTxt {
  font-size: r(16);
  height: r(50);
  line-height: r(50);
}
.footCount .clearTxt {
  font-size: r(14);
  height: r(50);
  line-height: r(50);
  padding: 0 r(10);
}

.countPrice {
  width: r(150);
  height: r(50);
}
.countNumBox {
  height: r(25);
  width: 100%;
}
.countPrice .countitem {
  height: r(25);
  line-height: r(25);
  float: right;
  padding-right: r(6);
  margin-right: r(4);
}
.countNumBox .countNum {
  color: #f2495e;
  font-size: r(16);
  font-weight: bold;
}
.countNumBox .discountNum {
  font-size: r(12);
  font-weight: bold;
}

.countBtn {
  flex: 1;
  height: r(60);
  background-color: #02d4d7;
  color: #fff;
  line-height: r(60);
  text-align: center;
  font-size: r(18);
}
</style>