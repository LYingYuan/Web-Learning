<template>
  <li>
    <h4 class="title">{{ title }}</h4>
    <div class="links" :class="mode">
      <!-- <slot></slot> -->
      <home-body-screen-left-sidebar-detail-list-item
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :to="link.url"
        :mode="link.mode"
      >
      </home-body-screen-left-sidebar-detail-list-item>
    </div>
  </li>
</template>

<script>
import HomeBodyScreenLeftSidebarDetailListItem from "./HomeBodyScreenLeftSidebarDetailListItem.vue";

export default {
  components: { HomeBodyScreenLeftSidebarDetailListItem },
  props: {
    title: { type: String, require: true },
    links: {
      type: Array,
      require: true,
    },
    mode: {
      type: String,
      require: false,
      default: "",
    },
  },
};
</script>

<style scoped>
li {
  margin-left: 70px;
  margin-right: 20px;
  margin-top: 5px;
  position: relative;
}

h4 {
  color: #ff2832;
  font-weight: bold;
  position: absolute;
  left: -70px;
  padding-top: 4px;
}

.links {
  border-bottom: 1px dotted #d5d5d5;
  padding: 4px 0 3px 0px;
}

.no-border {
  border-bottom: 0;
}
</style>
