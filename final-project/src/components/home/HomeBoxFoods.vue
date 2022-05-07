<template>
  <home-box :title="foods.title" :nav_links="foods.nav" :logos="foods.logos">
    <template #content>
      <div class="content">
        <div class="item">
          <base-carousel
            :items="foods.first_content"
            nav_mode="circle"
          ></base-carousel>
        </div>
        <div class="item" v-for="content in foods.contents" :key="content.src">
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
import BaseCarousel from "../ui/BaseCarousel.vue";

export default {
  components: { HomeBox, BaseCarousel },
  computed: {
    foods() {
      return this.$store.getters["items/getHomeFoods"];
    },
  },
};
</script>

<style scoped>
.content {
  width: 1199px;
  height: 343px;
  background-color: #e6e6e6;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(6, 1fr);
  gap: 1px;
  border: 1px solid #e6e6e6;
}

.item {
  overflow: hidden;
}

.item:first-child {
  grid-column: 3/5;
  grid-row: 1/3;
}
</style>
