<template>
  <div class="detail">
    <!-- TODO:如果有则显示 -->
    <div class="special-link">
      <home-body-screen-left-sidebar-detail-link
        title="图书馆"
      ></home-body-screen-left-sidebar-detail-link>
    </div>
    <ul>
      <home-body-screen-left-sidebar-detail-list></home-body-screen-left-sidebar-detail-list>
    </ul>
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebarDetailLink from "./HomeBodyScreenLeftSidebarDetailLink.vue";
import HomeBodyScreenLeftSidebarDetailList from "./HomeBodyScreenLeftSidebarDetailList.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebarDetailLink,
    HomeBodyScreenLeftSidebarDetailList,
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
  z-index: 3;
  width: 1000px;
  height: 480px;
  padding-left: 18px;
  background-color: bisque;
}
</style>
