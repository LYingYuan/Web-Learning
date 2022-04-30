<template>
  <li v-if="show && count">
    <div class="item">
      <span>{{ name }}</span>
      <br />
      <span>数量：{{ count }}</span>
      <br />
      <span>单价：{{ price }}</span>
    </div>
    <button @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  props: ["name", "count", "price", "id"],
  data() {
    return {
      show: true,
    };
  },
  methods: {
    deleteItem() {
      this.show = false;
      this.$store.dispatch("cart/deleteCartItem", { id: this.id });
    },
  },
};
</script>

<style scoped>
button {
  height: 36px;
  font: 16px/36px "Microsoft Yahei";
  overflow: hidden;
  margin: 0 0 3px 10px;
  padding: 0 15px;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  background-color: #ff2832;
  cursor: pointer;
}

.item {
  margin-top: 20px;
}
</style>
