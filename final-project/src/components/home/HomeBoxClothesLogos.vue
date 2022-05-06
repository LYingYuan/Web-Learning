<template>
  <div class="carousel" @mouseover="hoverCarousel" @mouseleave="leaveCarousel">
    <transition-group tag="ul" name="content" class="carousel-content">
      <li
        v-for="item in items"
        :key="item.index"
        v-show="item.index === current_index"
      >
        <ul class="logos">
          <li v-for="logo in item.logos" :key="logo.src">
            <router-link :to="logo.url">
              <img :src="logo.src" alt=""
            /></router-link>
          </li>
        </ul>
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
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
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

.carousel-content {
  width: 1190px;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.carousel-content > li {
  height: 100%;
  width: 100%;
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

.logos {
  width: 100%;
  display: flex;
  padding-left: 5px;
}

.logos > li {
  width: 118px;
  height: 55px;
  padding: 3px 4px 2px 5px;
  float: left;
  overflow: hidden;
}

.logos a {
  display: block;
  width: 110px;
  height: 50px;
  overflow: hidden;
  text-align: center;
}
</style>
