<template>
  <li class="sidebar-item">
    <div class="title" :class="{ titleHover: over_title }">
      <slot></slot>
    </div>
    <div class="bar" v-show="over_title"></div>
  </li>
</template>

<script>
export default {
  props: {
    sign: {
      type: String,
      require: true,
    },
  },
  computed: {
    over_title() {
      return this.$store.getters[`bodyScreen/getLeftSidebarItem${this.sign}`];
    },
  },
};
</script>

<style scoped>
.sidebar-item {
  color: #323232;
  font: 14px/30px "Microsoft Yahei";
  position: relative;
  z-index: 4;
}

.title {
  line-height: 30px;
  padding-left: 18px;
  position: relative;
}

.titleHover {
  /* TODO：设置下划线 */
  background: #fff;
  border: 2px solid #ff2832;
  border-right: 0;
  margin: -2px 0;
  padding: 0 1px 0 16px;
  font: 16px/30px "Microsoft Yahei";
  color: #ff2832;
}

.bar {
  width: 2px;
  border-left: 2px solid #fff;
  height: 30px;
  position: absolute;
  left: 200px;
  top: 2px;
  z-index: 4;
}
</style>
