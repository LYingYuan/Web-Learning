<template>
  <router-link :to="to" @mouseover="over" @mouseleave="leave">
    <div>
      <span :class="{ spanHover: mouse_over }">{{ title }}</span>
      <img
        src="../../assets/icon/前进-white.svg"
        :class="{ imgHover: mouse_over }"
      /></div
  ></router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: "#",
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mouse_over: false,
    };
  },
  methods: {
    over() {
      this.mouse_over = true;
    },
    leave() {
      this.mouse_over = false;
    },
  },
};
</script>

<style scoped>
a {
  font: 12px "Hiragino Sans GB", "Simsun";
  height: 20px;
  margin: 0 10px 3px 0;
}

div {
  display: flex;
}

img {
  background-color: #c9c9c9;
  max-height: 20px;
  padding: 3px 5px;
}

span {
  padding: 0 8px;
  line-height: 20px;
  background-color: #a3a3a3;
}

.spanHover {
  background-color: #ff2832;
}

.imgHover {
  background-color: #ffbdbf;
}
</style>
