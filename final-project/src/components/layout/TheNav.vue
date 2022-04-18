<template>
  <div class="nav">
    <base-link
      ><img src="../../assets/pic/nav/xintu38-1646722586.jpg" class="ad"
    /></base-link>
    <ul>
      <li>
        <base-link mode="none">
          <!-- TODO:购物车内数量 -->
          <img src="../../assets/icon/购物车2.svg" alt="" />
          <span>购物车</span>
        </base-link>
      </li>
      <li>
        <base-link mode="none">
          <img src="../../assets/icon/收藏.svg" alt="" />
        </base-link>
      </li>
      <li>
        <base-link mode="none">
          <img src="../../assets/icon/足迹.svg" alt="" />
        </base-link>
      </li>
      <li>
        <base-link mode="none">
          <img src="../../assets/icon/提醒.svg" alt="" />
        </base-link>
      </li>
      <li>
        <base-link mode="none">
          <img src="../../assets/icon/客服.svg" alt="" />
        </base-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #474747;
}

.ad {
  width: 34px;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  position: relative;
}

li span {
  position: absolute;
  left: -40px;
  background-color: #474747;
}

li img {
  max-width: 34px;
  padding: 0 2px;
}
</style>
