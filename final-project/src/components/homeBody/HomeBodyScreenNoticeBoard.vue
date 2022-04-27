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
      show_message: true,
      notice_timer: null,
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
  },
  mounted() {
    this.startNoticeInterval();
  },
};
</script>

<style scoped>
.notice-board {
  width: 203px;
  border: 1px solid #e6e6e6;
  border-top: 0;
  z-index: 3;
}

.picture {
  /* TODO:delete */
  background-color: antiquewhite;
  width: 100%;
  height: 195px;
}

.notice {
  width: 100%;
  height: 173px;
  overflow: hidden;
}

.head {
  display: flex;
  flex-direction: row;
}

.head li {
  width: 101px;
  height: 28px;
  cursor: default;
  font: 14px/29px "Microsoft Yahei";
  text-align: center;
  color: #646464;
  overflow: hidden;
}

.head-list {
  background-color: #f0f0f0;
  border: 1px solid #e6e6e6;
  border-top: 0;
}

.hoverHead {
  background-color: #fff;
  border-bottom: 0;
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
