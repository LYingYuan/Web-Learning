<template>
  <div class="clothes-page">
    <div class="item">
      <base-carousel :items="carousel"></base-carousel>
    </div>
    <div class="item" v-for="other in others" :key="other.id">
      <router-link :to="other.url">
        <img :src="other.src" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseCarousel from "../ui/BaseCarousel.vue";

export default {
  props: ["carousel", "others"],
  components: {
    BaseCarousel,
  },
};
</script>

<style scoped>
.clothes-page {
  background-color: #e6e6e6;
  display: grid;
  grid-template-columns: repeat(5, 191px);
  grid-template-rows: 340px 180px;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
}

.item:nth-child(1) {
  grid-column: 1 / 3;
}

.item:nth-child(2),
.item:nth-child(3) {
  z-index: 1;
}
</style>
