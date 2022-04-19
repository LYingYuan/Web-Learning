<template>
  <div class="nav">
    <div class="nav-top">
      <base-link class="ad"
        ><img src="../../assets/pic/nav/xintu38-1646722586.jpg"
      /></base-link>
      <ul>
        <li>
          <base-link
            mode="none"
            @mouseover="mouseOver(1)"
            @mouseleave="mouseLeave(1)"
          >
            <img src="../../assets/icon/购物车2.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan1">购物车</span>
            </transition>
          </base-link>
        </li>
        <li>
          <base-link
            mode="none"
            @mouseover="mouseOver(2)"
            @mouseleave="mouseLeave(2)"
          >
            <img src="../../assets/icon/收藏.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan2">我的收藏</span>
            </transition>
          </base-link>
        </li>
        <li>
          <base-link
            mode="none"
            @mouseover="mouseOver(3)"
            @mouseleave="mouseLeave(3)"
          >
            <img src="../../assets/icon/足迹.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan3">我的浏览</span>
            </transition>
          </base-link>
        </li>
        <li>
          <base-link
            mode="none"
            @mouseover="mouseOver(4)"
            @mouseleave="mouseLeave(4)"
          >
            <img src="../../assets/icon/提醒.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan4">我的银铃铛</span>
            </transition>
          </base-link>
        </li>
        <li>
          <base-link
            mode="none"
            @mouseover="mouseOver(5)"
            @mouseleave="mouseLeave(5)"
          >
            <img src="../../assets/icon/客服.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan5">咨询小当家</span>
            </transition>
          </base-link>
        </li>
      </ul>
      <!-- TODO:购物车内数量 -->
      <span class="cart-num">0</span>
    </div>
    <div class="nav-bottom">
      <ul class="foot">
        <li>
          <base-link
            mode="none"
            @mouseover="mouseOver(1)"
            @mouseleave="mouseLeave(1)"
          >
            <img src="../../assets/icon/客服.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan1">购物车</span>
            </transition>
          </base-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      span: {
        // 显示“购物车”
        showSpan1: false,
        // 显示“我的收藏”
        showSpan2: false,
        // 显示“我的浏览”
        showSpan3: false,
        // 显示“我的银铃铛”
        showSpan4: false,
        // 显示咨询小当家
        showSpan5: false,
      },
    };
  },
  methods: {
    mouseOver(num) {
      this.span[`showSpan${num}`] = true;
    },
    mouseLeave(num) {
      this.span[`showSpan${num}`] = false;
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;
  width: 34px;
  height: 100%;
}

.ad {
  height: 134px;
}

ul {
  position: absolute;
  display: flex;
  flex-direction: column;
}

li {
  position: relative;
}

a {
  display: block;
  height: 34px;
  width: 34px;
  background-color: #474747;
}

a:hover {
  background-color: #ff2832;
}

a > div {
  border: 5px solid aqua;
}

li span {
  position: absolute;
  left: -79px;
  width: 79px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background-color: #474747;
}

li img {
  max-width: 34px;
  padding: 0 2px;
}

.cart-num {
  position: fixed;
  top: 134px;
  right: 0px;
  font-size: 12px;
  line-height: 12px;
  padding: 0 6px;
  border-radius: 6px;
  background-color: #ff2832;
  color: white;
}

.foot {
  position: absolute;
  bottom: 10px;
}

.span-enter-from,
.span-leave-to {
  transform: translateX(79px);
}

.span-enter-active {
  transition: all 0.2s ease-in;
}

.span-leave-active {
  transition: all 0.1s ease-out;
}

.span-enter-to,
.span-leave-from {
  transform: translateX(0);
}
</style>
