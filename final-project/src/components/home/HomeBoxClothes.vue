<template>
  <div class="clothes">
    <div class="head">
      <div class="title">
        <router-link to="#">服装</router-link>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <ul>
          <li :class="{ on: nav_index === 1 }" @mouseover="changeIndex(1)">
            服装鞋包
          </li>
          <li :class="{ on: nav_index === 2 }" @mouseover="changeIndex(2)">
            运动潮流
          </li>
          <li :class="{ on: nav_index === 3 }" @mouseover="changeIndex(3)">
            女装男装内衣
          </li>
          <li :class="{ on: nav_index === 4 }" @mouseover="changeIndex(4)">
            童装童鞋
          </li>
          <li :class="{ on: nav_index === 5 }" @mouseover="changeIndex(5)">
            鞋靴箱包
          </li>
        </ul>
      </div>
      <div class="detail"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_index: 1,
    };
  },
  methods: {
    changeIndex(index) {
      this.nav_index = index;
    },
  },
};
</script>

<style scoped>
.clothes {
  height: 499px;
  overflow: hidden;
  position: relative;
  margin: 0 auto 30px;
}

.head {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-bottom: 2px solid #000;
  color: #323232;
  font: bold 20px/44px "Microsoft YaHei";
}

.title a {
  color: #323232;
}

.title a:hover {
  color: #ff2832;
}

.title span {
  font-size: 16px;
  position: relative;
  top: -3px;
}

.content {
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: 443px;
  background-color: aqua;
}

.nav {
  height: 44px;
  width: 655px;
  border-right: 1px solid #e6e6e6;
  position: absolute;
  top: -56px;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
}

.nav ul {
  display: flex;
}

.nav li {
  width: 114px;
  height: 42px;
  padding-top: 1px;
  border: 1px solid #e6e6e6;
  border-width: 1px 0 0 1px;
  text-align: center;
  background-color: #f5f5f5;
  font: 14px/42px "Microsoft YaHei";
  color: #646464;
  cursor: default;
  overflow: hidden;
}

li.on {
  font-weight: bold;
  background-color: #fff;
  height: 44px;
  width: 112px;
  border: 2px solid #000;
  border-bottom: 0;
  padding: 0 0 2px 0;
  margin-bottom: -2px;
  color: #525252;
}
</style>
