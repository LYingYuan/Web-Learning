<template>
  <div class="home-body-screen">
    <home-body-screen-left-sidebar></home-body-screen-left-sidebar>
    <div class="carousel">轮播图</div>
    <div class="notice-board">公告栏</div>
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebar from "./HomeBodyScreenLeftSidebar.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebar,
  },
};
</script>

<style scoped>
.home-body-screen {
  display: flex;
  background-color: #fff;
}
</style>
