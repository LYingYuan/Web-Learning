<template>
  <home-box :title="items.title" :nav_links="items.nav" :logos="items.logos">
    <template #content>
      <div class="content">
        <div class="item">
          <router-link :to="items.first_content.url"
            ><img :src="items.first_content.src" alt=""
          /></router-link>
        </div>
        <div class="item" v-for="content in items.contents" :key="content.src">
          <router-link :to="content.url"
            ><img :src="content.src" alt=""
          /></router-link>
        </div>
      </div>
    </template>
  </home-box>
</template>

<script>
import HomeBox from "./HomeBox.vue";

export default {
  components: { HomeBox },
  computed: {
    items() {
      return this.$store.getters["items/getChildItems"];
    },
  },
};
</script>

<style scoped>
.content {
  width: 1200px;
  height: 391px;
  background-color: #e6e6e6;
  display: grid;
  grid-template: repeat(2, 194px) / 220px 314px repeat(3, 220px);
  gap: 1px;
  border: 1px solid #e6e6e6;
}

.item {
  overflow: hidden;
  background-color: white;
}

.item img {
  padding-top: 10px;
  padding-left: 10px;
}

.item:first-child img {
  padding: 0;
}

.item:first-child {
  grid-column: 2/3;
  grid-row: 1/3;
  width: 314px;
}
</style>
