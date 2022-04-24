<template>
  <div class="carousel">
    <div
      class="focus-pictures"
      @mouseover="mouseOnFocusPictures"
      @mouseleave="mouseLeaveFocusPictures"
    >
      <ul class="pic">
        <home-body-screen-carousel-focus
          v-for="pic in focus_pictures"
          :key="pic.name"
          :url="pic.link"
          :imgSrc="pic.src"
          v-show="current_index === pic.id"
        >
        </home-body-screen-carousel-focus>
      </ul>
      <ul class="banner-circle">
        <li
          v-for="pic in focus_pictures"
          :key="pic.id"
          :class="{ red: pic.id === current_index }"
        >
          {{ pic.id }}
        </li>
      </ul>
      <div>
        <div class="left-div"></div>
        <div class="right-div"></div>
        <transition name="left-btn">
          <div class="left" v-show="mouse_on_focus_pictures"></div>
        </transition>
        <transition name="right-btn">
          <div class="right" v-show="mouse_on_focus_pictures"></div>
        </transition>
      </div>
    </div>
    <div
      class="discount"
      @mouseover="mouseOnFocusDiscount"
      @mouseleave="mouseLeaveFocusDiscount"
    >
      <div>
        <div class="left-div"></div>
        <div class="right-div"></div>
        <transition name="left-btn">
          <div class="left" v-show="mouse_on_discount"></div>
        </transition>
        <transition name="right-btn">
          <div class="right" v-show="mouse_on_discount"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBodyScreenCarouselFocus from "./HomeBodyScreenCarouselFocus.vue";

export default {
  components: {
    HomeBodyScreenCarouselFocus,
  },
  data() {
    return {
      mouse_on_focus_pictures: false,
      mouse_on_discount: false,
      current_index: 1,
      timer: null, // 装定时器
    };
  },
  methods: {
    mouseOnFocusPictures() {
      this.mouse_on_focus_pictures = true;
    },
    mouseLeaveFocusPictures() {
      this.mouse_on_focus_pictures = false;
    },
    mouseOnFocusDiscount() {
      this.mouse_on_discount = true;
    },
    mouseLeaveFocusDiscount() {
      this.mouse_on_discount = false;
    },
    startInterval() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.current_index++;
        if (this.current_index > this.focus_pictures.length) {
          this.current_index = 1;
        }
      }, 3000);
    },
    clickIcon(name, id) {},
  },
  computed: {
    focus_pictures() {
      return this.$store.getters["bodyScreen/getFocusPictures"];
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>

<style scoped>
.carousel {
  /* TODO:记得删去 */
  background-color: bisque;
  width: 796px;
}

.focus-pictures {
  background-color: aquamarine;
  height: 326px;
  position: relative;
}

.discount {
  background-color: cadetblue;
  height: 160px;
  position: relative;
}

.left-div,
.right-div {
  background-color: #fafafa;
  z-index: 2;
}

.right-div {
  left: -33px;
}

.left-div {
  right: -33px;
}

.left-div,
.right-div,
.right,
.left {
  width: 33px;
  height: 70px;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
}

.right,
.left {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
  background-position: center;
  opacity: 0.2;
  z-index: 1;
}

.left {
  background-image: url("../../assets/icon/后退-white.svg");
}

.right {
  background-image: url("../../assets/icon/前进-white.svg");
  right: 0;
}

.left:hover,
.right:hover {
  opacity: 0.5;
}

.discount > div > .left,
.discount > div > .right,
.discount > div > .left-div,
.discount > div > .right-div {
  height: 50px;
}

.left-btn-enter-from,
.left-btn-leave-to {
  transform: translate(-33px, -50%);
}

.right-btn-enter-from,
.right-btn-leave-to {
  transform: translate(33px, -50%);
}

.left-btn-enter-active,
.right-btn-enter-active {
  transition: all 0.2s ease-in;
}

.left-btn-leave-active,
.right-btn-leave-active {
  transition: all 0.2s ease-out;
}

.left-btn-enter-to,
.left-btn-leave-from {
  opacity: 0.2;
  transform: translateX(0, -50%);
}

.right-btn-enter-to,
.right-btn-leave-from {
  opacity: 0.2;
  transform: translate(0, -50%);
}

.banner-circle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4px;
  display: flex;
  width: 182px;
  justify-content: space-between;
}

.banner-circle > li {
  color: #fff;
  background-color: #646464;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}

.banner-circle > li:hover {
  background-color: #ff2832;
}

.banner-circle > .red {
  background-color: #ff2832;
}
</style>
