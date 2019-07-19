<!--这是自营顶部的"选择分类"组件-->
<template>
  <div id="classifySelect">
    <div
      class="item"
      v-for="(item,index) in title"
      :key="index"
      v-text="item"
      @click="select(index)"
      :class="{'current':index==isSelect}"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSelect:this.cindex,
      isSelect: 0,
      title: ["经典", "女神", "伴手礼"]
    };
  },
  mounted() {},
  methods: {
    select(index) {
      this.isSelect = index;
      this.currentSelect = index;
      this.$emit("changeCindex", this.currentSelect)
    }
  },
  props:["cindex"]
};
</script>

<style lang="scss" scoped>
#classifySelect {
  width:r(375);
  margin:0 auto;
  height: r(52);
  display: flex;
  align-items: baseline;
  padding: r(20) r(120) 0 r(70);
}
#classifySelect .item {
  flex: 1;
  text-align: center;
  font-size: r(15);
}
#classifySelect .item.current {
  font-size: r(16);
  font-weight: 600;
  border-bottom:4px solid #1fb1b9
}
</style>