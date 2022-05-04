<template>
  <div class="item">
    <base-link :to="`/dangdang/${item.id}`" class="pic"
      ><img :src="item.src" alt=""
    /></base-link>
    <base-link class="name" mode="gray-line" :to="`/dangdang/${item.id}`">{{
      item.name
    }}</base-link>
    <div class="price">
      <span class="discount-price">￥{{ item.discount_price }}</span>
      <span class="price">￥{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.item {
  background-color: #fff;
}

.pic {
  display: block;
  width: 150px;
  height: 150px;
  overflow: hidden;
  text-align: center;
  margin: 7px auto 0;
}

.name {
  display: block;
  height: 16px;
  line-height: 16px;
  width: 150px;
  margin: 5px auto 0;
  overflow: hidden;
}

.price {
  width: 150px;
  margin: 3px auto 0;
}

.discount-price {
  color: #ff2832;
  font: 14px Arial;
  display: inline-block;
  margin-right: 10px;
}

.price {
  font: 12px Arial;
  color: #969696;
  text-decoration: line-through;
}
</style>
