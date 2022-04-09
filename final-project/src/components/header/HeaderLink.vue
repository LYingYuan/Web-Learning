<template>
  <section>
    <div class="link-start"></div>
    <div class="container clearflex">
      <div class="address" @mouseover="mouseOver" @mouseleave="mouseLeaveCity">
        <div class="selected-city" :class="{ hover: hover_city }">
          送至：<span>{{ selected_city }}</span>
          <img :src="img_src" />
        </div>
        <ul class="cities" v-show="cities_showing">
          <li
            v-for="city in cities"
            :key="city"
            :city="city"
            @click="changeCity(city)"
          >
            <base-link>{{ city }}</base-link>
          </li>
        </ul>
        <div class="bar" v-show="hover_city"></div>
      </div>
      <div class="link"></div>
    </div>
    <div class="link-end"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected_city: "北京",
      hover_city: false,
      cities_showing: false,
      img_src: require("../../assets/icon/310向下、展开.svg"),
    };
  },
  methods: {
    // 改变样式并显示其他城市
    mouseOver() {
      this.cities_showing = true;
      this.hover_city = true;
      this.img_src = require("../../assets/icon/311向上、收起.svg");
    },
    mouseLeaveCity() {
      this.cities_showing = false;
      this.hover_city = false;
      this.img_src = require("../../assets/icon/310向下、展开.svg");
    },
    changeCity(city) {
      this.selected_city = city;
    },
  },
  computed: {
    cities() {
      return this.$store.getters["nav/addresses"];
    },
  },
};
</script>

<style scoped>
section {
  font: 12px "Hiragino Sans GB", "simsun", "Arial";
  color: #646464;
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #f2f2f2;
  height: 34px;
  /* z-index: 10010; */
}

.link-start,
.link-end {
  height: 2px;
}

.address {
  position: relative;
}

.selected-city {
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #f9f9f9;
}

img {
  max-height: 12px;
  margin-left: 5px;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cities {
  list-style: none;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  top: 29px;
  left: 0px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 10px 0 0 20px;
  width: 300px;
  height: 220px;
}

.bar {
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  height: 1px;
  background-color: #fff;
  position: relative;
  bottom: 1px;
}

.hover {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-bottom: 1px solid #fff;
}
</style>
