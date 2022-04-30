<template>
  <h3>为您推荐</h3>
  <div class="recommendations">
    <ul>
      <recommended-item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :pic_url="item.picture"
      ></recommended-item>
    </ul>
  </div>
</template>

<script>
import RecommendedItem from "./RecommendedItem.vue";

export default {
  components: {
    RecommendedItem,
  },
  computed: {
    items() {
      return this.$store.getters["items/getRecommendedItems"];
    },
  },
};
</script>

<style scoped>
h3 {
  height: 34px;
  color: #ff2832;
  font: bold 20px "Microsoft YaHei";
  border-bottom: 2px solid #ff3228;
  padding-left: 5px;
}

.recommendations {
  border: 1px solid #e6e6e6;
  width: 1198px;
  margin: 10px auto 0;
  overflow: hidden;
  padding: 10px 0 15px;
}

.recommendations > ul {
  display: flex;
  padding-left: 6px;
  width: 1188px;
  flex-wrap: wrap;
}
</style>
