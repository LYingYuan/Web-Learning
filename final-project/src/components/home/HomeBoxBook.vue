<template>
  <home-box>
    <div class="title">
      <router-link to="#">图书</router-link>
      . <router-link to="#">电子书</router-link>
    </div>
    <div class="nav"></div>
    <div class="content"></div>
  </home-box>
</template>

<script>
import HomeBox from "./HomeBox.vue";

export default {
  components: {
    HomeBox,
  },
};
</script>

<style scoped></style>
