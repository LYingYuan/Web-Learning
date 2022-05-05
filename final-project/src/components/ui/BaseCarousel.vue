<template>
  <!-- 使用该组件需要在父组件中使用一个容器包裹（设置大小） -->
  <!-- 要使该组件的z-index小于父组件 -->
  <div class="carousel" @mouseover="hoverCarousel" @mouseleave="leaveCarousel">
    <transition-group tag="ul" name="content" class="carousel-content">
      <li
        v-for="item in items"
        :key="item.id"
        v-show="item.id === current_index"
      >
        <router-link :to="item.url"><img :src="item.src" alt="" /></router-link>
      </li>
    </transition-group>
    <div class="carousel-button">
      <div
        class="left"
        v-show="mouse_on_carousel"
        @click="clickBtn('last')"
      ></div>
      <div
        class="right"
        v-show="mouse_on_carousel"
        @click="clickBtn('next')"
      ></div>
    </div>
    <ul class="carousel-nav" v-if="nav">
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ 'carousel-nav-on ': item.id === current_index }"
        @click="clickNav(item.id)"
      ></li>
    </ul>
    <div class="carousel-mask">
      <div :style="{ 'background-color': mask_color }" class="right-mask"></div>
      <div :style="{ 'background-color': mask_color }" class="left-mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
    nav: {
      type: Boolean,
      required: false,
      default: true,
    },
    mask_color: {
      type: String,
      required: false,
      default: "#e6e6e6",
    },
  },
  data() {
    return {
      mouse_on_carousel: false,
      current_index: 1,
      carousel_timer: null,
    };
  },
  methods: {
    startCarouselInterval(start_index) {
      clearInterval(this.carousel_timer);
      this.carousel_timer = setInterval(() => {
        this.current_index++;
        if (this.current_index > this.items.length) {
          this.current_index = 1;
        }
      }, 5000);
      this.current_index = start_index;
    },
    hoverCarousel() {
      clearInterval(this.carousel_timer);
      this.mouse_on_carousel = true;
    },
    leaveCarousel() {
      this.startCarouselInterval(this.current_index);
      this.mouse_on_carousel = false;
    },
    clickBtn(name) {
      if (name === "last") {
        this.current_index--;
        if (this.current_index === 0) {
          this.current_index = this.items.length;
        }
      } else {
        this.current_index++;
        if (this.current_index > this.items.length) {
          this.current_index = 1;
        }
      }
    },
    clickNav(index) {
      this.current_index = index;
    },
  },
  mounted() {
    this.startCarouselInterval(1);
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
}

.right,
.left {
  width: 33px;
  height: 43px;
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
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

.carousel-nav {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
  display: flex;
}

.carousel-nav > li {
  width: 10px;
  height: 3px;
  margin-right: 4px;
  font-size: 0;
  line-height: 9px;
  overflow: hidden;
  background: #fff;
}

li.carousel-nav-on {
  background-color: #5e5e5e;
}

.carousel-content {
  position: relative;
}

.carousel-content > li {
  height: 100%;
  position: absolute;
}

.content-enter-from {
  left: 100%;
  z-index: -1;
}

.content-enter-active {
  transition: left 0.4s ease;
}

.content-leave-active {
  transition: left 0.4s ease;
}

.content-enter-to,
.content-leave-from {
  left: 0;
}

.content-leave-to {
  left: -100%;
}

.right-mask,
.left-mask {
  width: 100%;
  height: 100%;
  position: absolute;
}

.right-mask {
  right: 100%;
}

.left-mask {
  left: 100%;
}
</style>
