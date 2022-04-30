<template>
  <header-link></header-link>
  <div class="logo-box"></div>
  <div class="container content">
    <div class="all">
      <h2>总价：￥{{ cost }}</h2>
    </div>
    <div class="cart">
      <cart-item></cart-item>
    </div>
  </div>
</template>

<script>
import HeaderLink from "../header/HeaderLink.vue";
import CartItem from "../cart/CartIShop.vue";

export default {
  components: {
    HeaderLink,
    CartItem,
  },
  computed: {
    cost() {
      return this.$store.getters["cart/getCartCost"];
    },
  },
};
</script>

<style scoped>
.logo-box {
  width: 100%;
  border-bottom: 4px solid #ff2832;
  height: 100px;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
