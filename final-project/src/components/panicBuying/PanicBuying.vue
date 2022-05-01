<template>
  <div class="panic-buying">
    <div class="left">
      <div class="left-head">
        <base-link
          ><img src="../../assets/pic/screen/抢购.png" alt=""
        /></base-link>
        <div class="time">
          <span class="hour">{{ count_down_h }}</span>
          <span class="min">{{ count_down_m }}</span>
          <span class="sec">{{ count_down_s }}</span>
        </div>
        <ul>
          <li>
            <router-link to="#" :class="{ on: now_scene === '0' }"
              >00:00场</router-link
            >
          </li>
          <li>
            <router-link to="#" :class="{ on: now_scene === '8' }"
              >08:00场</router-link
            >
          </li>
          <li>
            <router-link to="#" :class="{ on: now_scene === '12' }"
              >12:00场</router-link
            >
          </li>
          <li>
            <router-link to="#" :class="{ on: now_scene === '16' }"
              >16:00场</router-link
            >
          </li>
          <li>
            <router-link to="#" :class="{ on: now_scene === '20' }"
              >20:00场</router-link
            >
          </li>
        </ul>
      </div>
      <panic-buying-scene
        v-for="scene in panic_buying_scenes"
        :key="scene.id"
        :items="scene.items"
      ></panic-buying-scene>
    </div>
    <div class="right">
      <div class="right-head">
        <h3>厂商周</h3>
        <ul>
          <li
            :class="{ on: page_index === 1 }"
            @mouseover="hoverToChange(1)"
            @mouseleave="startFirmTimer"
          ></li>
          <li
            :class="{ on: page_index === 2 }"
            @mouseover="hoverToChange(2)"
            @mouseleave="startFirmTimer"
          ></li>
        </ul>
      </div>
      <ul
        class="firm-carousel"
        v-for="page in firm_pictures"
        :key="page.id"
        v-show="page.id === page_index"
      >
        <li v-for="pic in page.pictures" :key="pic.id">
          <router-link :to="pic.url"
            ><img :src="pic.pic_url" alt=""
          /></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PanicBuyingScene from "./PanicBuyingScene.vue";

export default {
  components: {
    PanicBuyingScene,
  },
  data() {
    return {
      timer: null,
      count_down_hour: 0,
      count_down_min: 0,
      count_down_sec: 0,
      // 当前的秒杀场次
      now_scene: "0",
      // 厂商周页面
      firm_timer: null,
      page_index: 1,
    };
  },
  watch: {
    count_down_sec(newValue) {
      if (newValue < 0) {
        this.count_down_sec = 59;
        this.changeTime("m");
      }
    },
    count_down_min(newValue) {
      if (newValue < 0) {
        this.count_down_min = 59;
        this.changeTime("h");
      }
    },
    count_down_hour(newValue) {
      if (newValue < 0) {
        this.count_down_hour = 0;
        this.calculateTime();
      }
    },
  },
  computed: {
    panic_buying_scenes() {
      return this.$store.getters["items/getPanicBuyingScenes"];
    },
    count_down_h() {
      if (this.count_down_hour < 10) {
        return "0" + this.count_down_hour;
      }
      return this.count_down_hour;
    },
    count_down_m() {
      if (this.count_down_min < 10) {
        return "0" + this.count_down_min;
      }
      return this.count_down_min;
    },
    count_down_s() {
      if (this.count_down_sec < 10) {
        return "0" + this.count_down_sec;
      }
      return this.count_down_sec;
    },
    firm_pictures() {
      return this.$store.getters["items/getFirmPictures"];
    },
  },
  methods: {
    calculateTime() {
      // 各秒杀场次的时间戳
      // 00:00
      const time1 = new Date(new Date().toLocaleDateString()).getTime();
      // 08:00
      const time2 = new Date(time1).getTime() + 8 * 60 * 60 * 1000;
      // 12:00
      const time3 = new Date(time1).getTime() + 12 * 60 * 60 * 1000;
      // 16:00
      const time4 = new Date(time1).getTime() + 16 * 60 * 60 * 1000;
      // 20:00
      const time5 = new Date(time1).getTime() + 20 * 60 * 60 * 1000;
      // 第二天 00:00
      const time6 = new Date(time1).getTime() + 24 * 60 * 60 * 1000;
      // 获得当前的时间戳
      const now_time = new Date().getTime();

      switch (true) {
        case now_time >= time5:
          this.now_scene = "20";
          break;
        case now_time >= time4:
          this.now_scene = "16";
          break;
        case now_time >= time3:
          this.now_scene = "12";
          break;
        case now_time >= time2:
          this.now_scene = "8";
          break;
        case now_time >= time1:
          this.now_scene = "0";
          break;
        default:
          this.now_scene = "0";
          break;
      }

      // 当前场次剩余时间（距离下一场的时间）
      let remaining_time = 0;
      switch (this.now_scene) {
        case "0":
          remaining_time = time2 - now_time;
          break;
        case "8":
          remaining_time = time3 - now_time;
          break;
        case "12":
          remaining_time = time4 - now_time;
          break;
        case "16":
          remaining_time = time5 - now_time;
          break;
        case "20":
          remaining_time = time6 - now_time;
          break;
      }
      this.count_down_hour = Math.floor(+remaining_time / 1000 / 3600);
      this.count_down_min = Math.floor(
        (+remaining_time / 1000 - this.count_down_hour * 3600) / 60
      );
      this.count_down_sec = Math.floor(
        +remaining_time / 1000 -
          this.count_down_hour * 3600 -
          this.count_down_min * 60
      );
    },
    setTimer() {
      this.timer = setInterval(() => {
        this.changeTime("s");
      }, 1000);
    },
    changeTime(what) {
      switch (what) {
        case "s":
          this.count_down_sec--;
          break;
        case "m":
          this.count_down_min--;
          break;
        case "h":
          this.count_down_hour--;
          break;
      }
    },
    // 厂商周 start
    hoverToChange(which) {
      clearInterval(this.firm_timer);
      this.page_index = which;
    },
    startFirmTimer() {
      clearInterval(this.firm_timer);
      this.firm_timer = setInterval(() => {
        if (this.page_index === 1) {
          this.page_index = 2;
        } else {
          this.page_index = 1;
        }
      }, 5000);
    },
    // 厂商周 end
  },
  created() {
    this.calculateTime();
    this.setTimer();
    this.startFirmTimer();
  },
};
</script>

<style scoped>
.panic-buying {
  display: flex;
}

.left {
  width: 996px;
}

.right {
  width: 204px;
}

.right-head {
  height: 39px;
  line-height: 34px;
  border-bottom: 2px solid #ff2832;
  position: relative;
  overflow: hidden;
  padding-top: 5px;
}

.right-head h3 {
  color: #ff2832;
  font-size: 20px;
  padding-left: 8px;
  width: 128px;
  height: 28px;
  font-weight: normal;
}

.right-head > ul {
  position: absolute;
  right: 0;
  top: 20px;
  display: flex;
}

.right-head > ul > li {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #c8c8c8;
  line-height: 24px;
  margin-right: 6px;
  cursor: pointer;
}

.right-head > ul > .on {
  background-color: #ff2832;
}

.left-head {
  display: flex;
  justify-content: space-between;
  height: 39px;
  border-bottom: 2px solid #3c3c3c;
  position: relative;
}

.left-head > ul {
  display: flex;
  position: absolute;
  top: 0;
  left: 305px;
}

.left-head > ul > li {
  width: 80px;
  text-align: center;
  height: 38px;
  margin-right: 50px;
}

.left-head > ul a {
  display: block;
  width: 80px;
  text-align: center;
  height: 39px;
  line-height: 38px;
  padding-bottom: 1px;
  font-size: 20px;
  font-weight: bold;
  color: #666;
}

.left-head > ul a:hover {
  padding-bottom: 0;
  border-bottom: 3px solid #ff2832;
  position: relative;
}

.left-head .on {
  color: #ff2832;
}

.left-head > a > img {
  display: block;
  width: 64px;
  height: 39px;
}

.left-head > img {
  margin-top: 10px;
  max-height: 20px;
  margin-left: 10px;
}

.time {
  position: absolute;
  background: url(../../assets/pic/screen/home_miaosha.png) no-repeat 83px 0;
  height: 37px;
  padding-left: 113px;
}

.time > span {
  float: left;
  height: 24px;
  line-height: 24px;
  padding: 5px 8px 0 0;
  text-align: center;
  width: 36px;
  overflow: hidden;
}

.firm-carousel {
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
}

.firm-carousel li {
  border-bottom: 1px solid #e5e5e5;
  height: 114px;
  width: 203px;
}

.firm-carousel img:hover {
  transform: translateX(-3px);
}

.firm-carousel img {
  height: 113px;
  width: 203px;
}

.firm-carousel a {
  display: block;
  height: 113px;
  position: relative;
  width: 203px;
  padding-left: 1px;
  overflow: hidden;
  background-color: #fff;
}
</style>
