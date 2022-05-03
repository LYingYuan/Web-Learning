<template>
  <div class="item">
    <base-link :to="`/dangdang/${item.id}`"
      ><img :src="item.src" alt=""
    /></base-link>
    <base-link :to="`/dangdang/${item.id}`" mode="gray-line">{{
      item.name
    }}</base-link>
    <span>{{ item.discount_price }}</span
    ><span>{{ item.price }}</span>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped></style>
