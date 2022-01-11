<template>
  <div>
    <Header></Header>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/index.vue";
import Header from "./components/header/index.vue";

export default {
    name: "App",
    components: { Footer, Header }
}
</script>

<style>
</style>
