<template>
  <div class="shop">
    <!-- <div class="name">某店</div> -->
    <ul class="items">
      <cart-shop-item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :count="item.count"
      ></cart-shop-item>
    </ul>
  </div>
</template>

<script>
import CartShopItem from "./CartShopItem.vue";

export default {
  components: { CartShopItem },
  computed: {
    items() {
      return this.$store.getters["cart/getCartItems"];
    },
  },
  methods: {
    async loadCart() {
      try {
        await this.$store.dispatch("cart/fetchCartItems");
      } catch (error) {
        const error_msg = error.message || "加载购物车数据失败";
        alert(error_msg);
      }
    },
  },
  created() {
    this.loadCart();
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
