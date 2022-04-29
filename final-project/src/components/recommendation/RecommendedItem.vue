<template>
  <li>
    <base-link>
      <img src="../../assets/pic/items/recommendations/1.jpg" alt="" />
    </base-link>
    <p class="name">
      <base-link mode="gray-line">长短经（又名《反经》，全注全译全</base-link>
    </p>
    <p class="price">￥<span>58.00</span></p>
  </li>
</template>

<style scoped>
li {
  width: 197px;
  height: 269px;
  padding: 4px 3px 7px;
  border: 1px solid #fff;
}

li:hover {
  border: 1px solid #efefef;
  box-shadow: 0 0 4px #ddd;
}

img {
  width: 190px;
  height: 190px;
}

.name {
  width: 190px;
  height: 40px;
  line-height: 16px;
  font-size: 12px;
  padding: 8px 0 0;
  margin-bottom: 5px;
  overflow: hidden;
}

.price {
  font: 18px Arial;
  color: #ff2832;
}
</style>
