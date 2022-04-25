<template>
  <div class="notice-board">
    <div class="picture"></div>
    <div class="notice"></div>
    <div
      class="carousel"
      @mouseover="hoverCarousel"
      @mouseleave="leaveCarousel"
    >
      <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouse_on_carousel: false,
    };
  },
  methods: {
    clickBtn(name) {
      if (name === "last") {
        this.current_index--;
        if (this.current_index === 0) {
          this.current_index = this.focus_pictures.length;
        }
      } else {
        this.current_index++;
        if (this.current_index > this.focus_pictures.length) {
          this.current_index = 1;
        }
      }
    },
    hoverCarousel() {
      this.mouse_on_carousel = true;
    },
    leaveCarousel() {
      this.mouse_on_carousel = false;
    },
  },
};
</script>

<style scoped>
.notice-board {
  /* TODO:delete */
  background-color: aqua;
  width: 205px;
  border: 1px solid #e6e6e6;
  border-top: 0;
  border-left: 0;
  z-index: 3;
}

.picture {
  /* TODO:delete */
  background-color: antiquewhite;
  width: 100%;
  height: 195px;
}

.notice {
  /* TODO:delete */
  background-color: blue;
  width: 100%;
  height: 173px;
}

.carousel {
  /* TODO:delete */
  background-color: blueviolet;
  width: 100%;
  height: 119px;
  position: relative;
}

.right,
.left {
  width: 33px;
  height: 70px;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
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
</style>
