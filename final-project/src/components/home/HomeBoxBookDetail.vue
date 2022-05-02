<template>
  <div class="detail">
    <div class="left">
      <base-link></base-link>
      <ul>
        <li>童书</li>
        <li>中小学教辅</li>
        <li>外语</li>
        <li>hello</li>
      </ul>
    </div>
    <div class="right">hello</div>
  </div>
</template>

<style scoped>
.left a {
  width: 238px;
  height: 441px;
  border: 1px solid #e6e6e6;
  border-width: 0 1px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  text-align: center;
}

.left ul {
  position: absolute;
  bottom: 0;
  left: 1px;
  width: 237px;
  padding-left: 1px;
  background-color: #fff;
  background: url(http://img63.ddimg.cn/upload_img/00111/home/home_bg_1509.png)
    0 0;
}

.left li {
  float: left;
  width: 63px;
  height: 28px;
  line-height: 28px;
  padding-left: 16px;
  overflow: hidden;
}
</style>
