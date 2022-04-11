<template>
  <div class="container">
    <ul>
      <li class="all-classification">
        <base-link mode="none">
          <span>全部商品分类</span>
          <img src="../../assets/icon/展开-white.svg" />
        </base-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  height: 40px;
  background-color: aqua;
  font-weight: bold;
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
</style>
