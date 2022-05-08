<template>
  <div class="notice-board">
    <div class="picture">
      <img :src="picture_src" alt="" />
    </div>
    <div class="notice">
      <ul class="head">
        <li
          class="head-list"
          :class="{ hoverHead: show_message }"
          @mouseover="hoverNoticeHead(true)"
          @mouseleave="leaveNoticeHead"
        >
          信息公告
        </li>
        <li
          class="head-list"
          :class="{ hoverHead: !show_message }"
          @mouseover="hoverNoticeHead(false)"
          @mouseleave="leaveNoticeHead"
        >
          服务公告
        </li>
      </ul>
      <div class="notice-content">
        <ul class="message" v-show="show_message">
          <li v-for="message in notice_messages" :key="message.text">
            <base-link :mode="message.mode" :to="message.url">{{
              message.text
            }}</base-link>
          </li>
        </ul>
        <ul class="serve" v-show="!show_message">
          <li v-for="serve in notice_serve" :key="serve.text">
            <base-link :mode="serve.mode" :to="serve.url">{{
              serve.text
            }}</base-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="carousel"
      @mouseover="hoverCarousel"
      @mouseleave="leaveCarousel"
    >
      <ul class="carousel-pic">
        <li
          v-for="pic in notice_carousel"
          :key="pic.id"
          v-show="pic.id === carousel_index"
        >
          <base-link :to="pic.url"><img :src="pic.pic_url" alt="" /></base-link>
        </li>
      </ul>
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
      <ul class="carousel-nav">
        <li
          v-for="pic in notice_carousel"
          :key="pic.id"
          :class="{ 'carousel-nav-on ': pic.id === carousel_index }"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouse_on_carousel: false,
      show_message: true,
      notice_timer: null,
      carousel_index: 1,
      carousel_timer: null,
    };
  },
  computed: {
    picture_src() {
      return this.$store.getters["bodyScreen/getNoticePicture"];
    },
    notice_messages() {
      return this.$store.getters["bodyScreen/getNoticeMessages"];
    },
    notice_serve() {
      return this.$store.getters["bodyScreen/getNoticeServe"];
    },
    notice_carousel() {
      return this.$store.getters["bodyScreen/getNoticeCarouselPic"];
    },
  },
  methods: {
    clickBtn(name) {
      if (name === "last") {
        this.carousel_index--;
        if (this.carousel_index === 0) {
          this.carousel_index = this.notice_carousel.length;
        }
      } else {
        this.carousel_index++;
        if (this.carousel_index > this.notice_carousel.length) {
          this.carousel_index = 1;
        }
      }
    },
    hoverCarousel() {
      clearInterval(this.carousel_timer);
      this.mouse_on_carousel = true;
    },
    leaveCarousel() {
      this.startCarouselInterval(this.carousel_index);
      this.mouse_on_carousel = false;
    },
    hoverNotice() {
      clearInterval(this.notice_timer);
    },
    hoverNoticeHead(isMessage) {
      clearInterval(this.notice_timer);
      this.show_message = isMessage;
    },
    leaveNotice() {
      this.startNoticeInterval();
    },
    leaveNoticeHead() {
      this.startNoticeInterval();
    },
    startNoticeInterval() {
      clearInterval(this.notice_timer);
      this.notice_timer = setInterval(() => {
        this.show_message = !this.show_message;
      }, 5000);
    },
    startCarouselInterval(start_index) {
      clearInterval(this.carousel_timer);
      this.carousel_timer = setInterval(() => {
        this.carousel_index++;
        if (this.carousel_index > this.notice_carousel.length) {
          this.carousel_index = 1;
        }
      }, 5000);
      this.carousel_index = start_index;
    },
  },
  mounted() {
    this.startNoticeInterval();
    this.startCarouselInterval(1);
  },
};
</script>

<style scoped>
.notice-board {
  width: 204px;
  border: 1px solid #e6e6e6;
  border-right: 0;
  border-top: 0;
  z-index: 3;
  position: relative;
  overflow: hidden;
}

.picture {
  width: 203px;
  height: 195px;
  overflow: hidden;
}

.notice {
  width: 204px;
  height: 173px;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
}

.head {
  display: flex;
  height: 29px;
  overflow: hidden;
  width: 204px;
}

.head li {
  
}

.head-list {
  margin-left: -1px;
  width: 103px;
  border: 1px solid #e6e6e6;
  border-top: 0;
  height: 28px;
  background-color: #f0f0f0;
  cursor: default;
  font: 14px/29px "Microsoft Yahei";
  text-align: center;
  color: #646464;
  overflow: hidden;
}

.hoverHead {
  background-color: #fff;
  border-bottom: 0;
  padding-bottom: 1px;
}

.head li:first-child {
  border-left: 0;
}

.head li:last-child {
  border-right: 0;
}

.message,
.serve {
  display: block;
  margin-left: 10px;
  margin-top: 5px;
  padding-left: 20px;
  list-style: disc;
}

.message > li,
.serve > li {
  line-height: 25px;
  width: 183px;
  height: 25px;
}

.carousel {
  width: 203px;
  height: 119px;
  position: relative;
  overflow: hidden;
}

.carousel-nav {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  display: flex;
}

.carousel-nav li {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: #c8c8c8;
  overflow: hidden;
  font-size: 0;
  line-height: 24px;
  margin: 0 6px 0 0;
}

li.carousel-nav-on {
  background-color: #ff2832;
}

.right,
.left {
  width: 33px;
  height: 43px;
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
