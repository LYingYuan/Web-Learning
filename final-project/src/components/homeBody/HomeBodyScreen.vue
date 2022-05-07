<template>
  <div class="home-body-screen">
    <home-body-screen-left-sidebar></home-body-screen-left-sidebar>
    <home-body-screen-carousel></home-body-screen-carousel>
    <home-body-screen-notice-board></home-body-screen-notice-board>
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebar from "./HomeBodyScreenLeftSidebar.vue";
import HomeBodyScreenCarousel from "./HomeBodyScreenCarousel.vue";
import HomeBodyScreenNoticeBoard from "./HomeBodyScreenNoticeBoard.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebar,
    HomeBodyScreenCarousel,
    HomeBodyScreenNoticeBoard,
  },
};
</script>

<style scoped>
.home-body-screen {
  display: flex;
  background-color: #fff;
  padding-bottom: 20px;
  overflow: hidden;
}
</style>
