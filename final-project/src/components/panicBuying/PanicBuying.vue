<template>
  <div class="left">
    <div class="left-head">
      <base-link
        ><img src="../../assets/pic/screen/抢购.png" alt=""
      /></base-link>
      <div class="time">
        <span class="hour">11</span>
        <span class="min">11</span>
        <span class="sec">11</span>
      </div>
      <ul></ul>
    </div>
  </div>
  <div class="right">
    <div class="right-head"></div>
  </div>
</template>

<style scoped>
.left-head {
  display: flex;
  height: 39px;
  border-bottom: 2px solid #3c3c3c;
}

.left-head > a > img {
  display: block;
  width: 64px;
  height: 39px;
}

.left-head > img {
  margin-top: 10px;
  max-height: 20px;
  margin-left: 10px;
}

.time {
  background: url(../../assets/pic/screen/home_miaosha.png) no-repeat 83px 0;
  height: 39px;
  padding-left: 113px;
  
}

.time > span {
  float: left;
  height: 24px;
  line-height: 24px;
  padding: 5px 11px 0 0;
  text-align: center;
  width: 26px;
  overflow: hidden;
}
</style>
