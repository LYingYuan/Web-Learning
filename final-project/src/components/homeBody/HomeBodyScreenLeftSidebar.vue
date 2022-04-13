<template>
  <div class="left-sidebar">
    <ul class="classify">
      <home-body-screen-left-sidebar-item
        title="图书、童书"
      ></home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item title="电子书">
      </home-body-screen-left-sidebar-item>
    </ul>
    <home-body-screen-left-sidebar-detail
      v-show="true"
    ></home-body-screen-left-sidebar-detail>
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebarItem from "./HomeBodyScreenLeftSidebarItem.vue";
import HomeBodyScreenLeftSidebarDetail from "./HomeBodyScreenLeftSidebarDetail.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebarItem,
    HomeBodyScreenLeftSidebarDetail,
  },
};
</script>

<style scoped>
.left-sidebar {
  padding: 4px 0;
  height: 480px;
  width: 200px;
  background-color: #fafafa;
  position: relative;
}
</style>
