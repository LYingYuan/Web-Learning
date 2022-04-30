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
            to="/shoppingcart"
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
              <span v-show="span.showSpan5">购物车</span>
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
          <base-link mode="none">
            <img
              src="../../assets/icon/扫描.svg"
              alt=""
              @mouseover="mouseOver(7)"
              @mouseleave="mouseLeave(7)"
            />
            <img
              class="code"
              v-show="span.showSpan7"
              src="../../assets/pic/nav/code_three.jpg"
              alt=""
            />
          </base-link>
        </li>
        <li>
          <!-- TODO:定位到顶部 -->
          <base-link
            mode="none"
            @mouseover="mouseOver(6)"
            @mouseleave="mouseLeave(6)"
          >
            <img src="../../assets/icon/向上.svg" alt="" />
            <transition name="span">
              <span v-show="span.showSpan6">返回顶部</span>
            </transition>
          </base-link>
        </li>
        <li>
          <base-link mode="none">
            <div class="feedback">意见反馈</div>
          </base-link>
        </li>
        <li>
          <div class="ad">广告</div>
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
        // 显示返回顶部
        showSpan6: false,
        // 显示二维码
        showSpan7: false,
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
  z-index: 10;
}

.nav-top > ul {
  position: absolute;
  top: 134px;
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
  padding: 4px;
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

.feedback {
  color: white;
  font-size: 12px;
  width: 34px;
  height: 38px;
  border: 0;
  padding: 0 5px;
}

.code {
  display: block;
  position: absolute;
  left: -346px;
  top: -4px;
  width: 350px;
  height: 129px;
  max-width: 350px;
}

.ad {
  margin-top: 2px;
  font-size: 12px;
  color: white;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #474747;
}
</style>
