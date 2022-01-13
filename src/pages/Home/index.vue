<template>
  <div class="">
    <!-- 商品分类导航 -->
    <TypeNav></TypeNav>
    <!--列表-->
    <ListContainer></ListContainer>
    <!--今日推荐-->
    <Recommend></Recommend>
    <!-- 商品排行 -->
    <Rank></Rank>
    <!-- 猜你喜欢 -->
    <Like></Like>
    <!--楼层-->
    <Floor></Floor>
    <!--楼层-->
    <Floor></Floor>
    <!--商标-->
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Brand from "@/pages/Home/Brand";
import Floor from "@/pages/Home/Floor";
import Like from "@/pages/Home/Like";
import Rank from "@/pages/Home/Rank";
export default {
  data() {
    return {};
  },
  methods: {
    
  },
  components: {
    ListContainer,
    Recommend,
    Brand,
    Like,
    Rank,
    Floor
  },
};
</script>

<style lang="less" scoped>
</style>
