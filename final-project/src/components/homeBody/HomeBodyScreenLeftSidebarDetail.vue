<template>
  <div class="detail">
    <!-- TODO:如果有则显示 -->
    <div class="special-link">
      <home-body-screen-left-sidebar-detail-link title="图书馆"></home-body-screen-left-sidebar-detail-link>
    </div>
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebarDetailLink from "./HomeBodyScreenLeftSidebarDetailLink.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebarDetailLink,
  },
};
</script>

<style scoped>
.detail {
  border: 2px solid #ff2832;
  border-top: 0;
  position: absolute;
  left: 200px;
  top: 0px;
  z-index: 2;
  width: 1000px;
  height: 480px;
  padding-left: 18px;
  background-color: bisque;
}
</style>
