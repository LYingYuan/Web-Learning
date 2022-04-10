<template>
  <div class="nav-item" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div class="title" :class="{ active: hover_title }">
      <base-link :class="{ activeTitle: hover_title }">{{ title }}</base-link>
      <img :src="img_src" />
    </div>
    <ul v-show="hover_title">
      <header-link-item-url
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :url="link.url"
      ></header-link-item-url>
    </ul>
  </div>
</template>

<script>
import HeaderLinkItemUrl from "./HeaderLinkItemUrl.vue";

export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    links: {
      type: Array,
      require: true,
    },
  },
  components: {
    HeaderLinkItemUrl,
  },
  data() {
    return {
      img_src: require("../../assets/icon/310向下、展开.svg"),
      hover_title: false,
    };
  },
  methods: {
    mouseOver() {
      this.hover_title = true;
      this.img_src = require("../../assets/icon/311向上、收起.svg");
    },
    mouseLeave() {
      this.hover_title = false;
      this.img_src = require("../../assets/icon/310向下、展开.svg");
    },
  },
};
</script>

<style scoped>
img {
  max-height: 12px;
  margin-left: 5px;
}

.title {
  position: relative;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  padding: 0 6px;
  border: 1px solid #f9f9f9;
}

ul {
  position: relative;
  top: -1px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  border-top: 0;
}

li {
  padding: 3px 0 3px 6px;
  margin-bottom: 5px;
}

li:last-child {
  margin: 0;
}

li:hover {
  background-color: #f9f9f9;
}

.activeTitle {
  color: red;
}

.active {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-bottom: 0;
  height: 30px;
  line-height: 30px;
}
</style>
