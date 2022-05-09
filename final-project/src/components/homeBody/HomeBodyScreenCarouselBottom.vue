<template>
  <ul class="bottom-pic">
    <li
      v-for="pic in pictures"
      :key="pic.id"
      @mouseover="hoverPic(pic.id)"
      @mouseleave="leavePic"
    >
      <router-link :to="pic.link">
        <img :src="pic.src" alt="" />
      </router-link>
      <div class="shadow" v-show="hover_id !== pic.id"></div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      hover_id: null,
      hover: false,
    };
  },
  methods: {
    hoverPic(id) {
      this.hover_id = id;
    },
    leavePic() {
      this.hover_id = null;
    },
  },
};
</script>

<style scoped>
.bottom-pic {
  height: 160px;
  width: 795px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background-color: #e6e6e6;
}

li {
  position: relative;
  overflow: hidden;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.03;
}

img {
  overflow: hidden;
}
</style>
