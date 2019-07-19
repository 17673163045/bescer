<!--这是选择分类选择顶部组件-->
<template>
  <div id="classifyTop">
    <div
      v-for="(item,index) in title"
      :key="index"
      v-text="item"
      class="item"
      :class="{'current':index==isSelect}"
      @click="select(index)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelect: 0,
      currentindex: this.topindex,
      title: ["自营", "贝式严选"]
    };
  },
  mounted() {},
  methods: {
    select(index) {
      this.isSelect = index;
      this.currentindex = index;
      this.$emit("changeTopindex",this.currentindex)
    }
  },
  props:["topindex"]
};
</script>

<style lang="scss" scoped>
#classifyTop {
  display: flex;
  width:r(375);
  margin:0 auto;
  height: r(40);
  border-bottom: 1px solid rgb(194, 191, 191);
}
#classifyTop .item {
  height: r(40);
  line-height: r(40);
  flex: 1;
  text-align: center;
  font-size: r(15);
}
#classifyTop .item.current {
  color: #1fb1b9;
  border-bottom: 2px solid #1fb1b9;
}
</style>