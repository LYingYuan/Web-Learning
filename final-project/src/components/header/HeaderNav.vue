<template>
  <div class="container">
    <ul>
      <li class="all-classification">
        <base-link mode="none">
          <span>全部商品分类</span>
          <img src="../../assets/icon/展开-white.svg" />
        </base-link>
      </li>
      <li>
        <base-link mode="black">图书</base-link>
      </li>
      <li>
        <base-link mode="black">电子书</base-link>
      </li>
      <li>
        <base-link mode="black">童鞋童装</base-link>
      </li>
      <li>
        <base-link mode="black">女装</base-link>
      </li>
      <li>
        <base-link mode="black">食品</base-link>
      </li>
      <li>
        <base-link mode="black">母婴玩具</base-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  height: 40px;
  font-weight: bold;
}

.all-classification {
  margin-right: 17px;
}

.all-classification > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 40px;
  background-color: #ff2832;
  padding-left: 20px;
}

.all-classification img {
  max-height: 20px;
  margin-right: 25px;
}

ul {
  display: flex;
}

ul > li {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
}

ul > li:first-child {
  padding: 0;
}
</style>
