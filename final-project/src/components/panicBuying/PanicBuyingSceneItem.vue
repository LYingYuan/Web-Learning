<template>
  <li>
    <base-link :to="item_url">
      <img :src="picture" alt="" />
    </base-link>
    <div class="line">
      <span class="bar" :style="{ width: `${snapped_up}%` }"></span>
    </div>
    <div class="num">已抢购{{ snapped_up }}%</div>
    <div class="name">
      <base-link :to="item_url" mode="gray-line">{{ name }}</base-link>
    </div>
    <div class="price">
      ￥
      <span class="discount-price">{{ discount_price }}</span>
      <span class="price">{{ price }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "picture", "name", "price", "discount_price", "snapped_up"],
  computed: {
    item_url() {
      return `/dangdang/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  width: 198px;
  height: 227px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  position: relative;
}

li > a {
  display: block;
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin: 10px auto 0;
}

.line {
  position: absolute;
  top: 160px;
  width: 150px;
  height: 8px;
  border-radius: 5px;
  background: #ffb7b7;
  left: 24px;
  line-height: 0;
  font-size: 0;
  z-index: 10;
}

.bar {
  background: #fc2c3a;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 8px;
  border-radius: 5px;
  z-index: 10;
}

.num {
  background: #fe8d91;
  border-radius: 10px;
  width: 76px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 153px;
  left: 62px;
  z-index: 12;
  font-family: Arial;
}

.name {
  width: 180px;
  overflow: hidden;
  line-height: 22px;
  height: 37px;
  margin: 0 auto;
  padding-top: 15px;
}

.price {
  color: #ff2832;
  width: 180px;
  margin: 2px auto 0;
  overflow: hidden;
  line-height: 20px;
  height: 20px;
  font-family: Arial;
}

.price > span {
  font-size: 16px;
  margin-left: 5px;
  position: relative;
  top: 1px;
}

span.price {
  color: #969696;
  text-decoration: line-through;
  font-size: 12px;
}
</style>
