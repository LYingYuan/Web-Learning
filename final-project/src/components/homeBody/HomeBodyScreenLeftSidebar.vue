<template>
  <div class="left-sidebar">
    <ul class="classify">
      <home-body-screen-left-sidebar-item
        v-for="link in left_sidebar_titles"
        :key="link.name"
        :title="link.name"
      ></home-body-screen-left-sidebar-item>
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
  computed: {
    left_sidebar_titles() {
      console.log(this.$store.getters["bodyScreen/getLeftSidebarTitle"]);
      return this.$store.getters["bodyScreen/getLeftSidebarTitle"];
    },
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
