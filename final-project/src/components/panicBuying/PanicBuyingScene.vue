<template>
  <ul class="list">
    <panic-buying-scene-item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :picture="item.picture"
      :name="item.name"
      :price="item.price"
      :discount_price="item.discount_price"
      :snapped_up="item.snapped_up"
    ></panic-buying-scene-item>
    <!-- TODO:del -->
    <panic-buying-scene-item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :picture="item.picture"
      :name="item.name"
      :price="item.price"
      :discount_price="item.discount_price"
      :snapped_up="item.snapped_up"
    ></panic-buying-scene-item>
  </ul>
</template>

<script>
import PanicBuyingSceneItem from "./PanicBuyingSceneItem.vue";

export default {
  props: ["items"],
  components: {
    PanicBuyingSceneItem,
  },
};
</script>

<style scoped>
.list {
  border: 1px solid #e6e6e6;
  border-right: none;
  width: 995px;
  height: 456px;
  padding-top: 1px;
  display: flex;
  flex-wrap: wrap;
}
</style>
