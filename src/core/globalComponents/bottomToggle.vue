<!--这是底部切换选项组件-->
<template>
  <div id="bottomToggle">
    <mt-tabbar :fixed="true" id="wraper">
      <mt-tab-item
        class="item"
        v-for="(item,index) in ToggleDataList"
        :key="index"
        :class="{current:isSelect}"
        @click.native="selectCurrent(index)"
      >
        <router-link :to="item.path" class="toggleLink" :class="{'current':index==isSelect}">
          <p :class="item.iconfont" class="iconfont"></p>
          <p class="txt" v-text="item.name"></p>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelect: 0,
      ToggleDataList: [
        { name: "首页", path: "/home", iconfont: "icon-shouye" },
        { name: "分类", path: "/goodsClassify", iconfont: "icon-fenlei" },
        { name: "购物车", path: "/shopTag", iconfont: "icon-ai-cart" },
        { name: "我的", path: "/usermy", iconfont: "icon-wode" }
      ]
    };
  },
  mounted() {},
  methods: {
    selectCurrent(index) {
      this.isSelect = index;
    }
  }
};
</script>

<style lang="scss" scoped>
#bottomToggle {
  width: r(375);
  margin-top: 60px;
  background-color: #eaeaea;
}
#wraper {
  height: r(62);
  width: r(375);
  margin: 0 auto;
}
#wraper .item {
  color: #999;
  font-size: r(14);
  height: r(62);
  padding: r(10);
  text-align: center;
}
#wraper .item .current {
  color: #1fb1b8;
}
.iconfont {
  font-size: r(30);
}
.txt {
  margin-top: r(6);
  font-size: r(14);
}
.toggleLink {
  text-decoration: none;
  color: #999;
}
</style>