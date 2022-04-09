<template>
  <router-link :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    // 链接的样式
    // red：  当hover时显示为红色
    // black：当hover时显示为红色
    mode: {
      type: String,
      required: false,
      // 默认无特殊样式
      default: "red",
    },
    to: {
      type: String,
      required: false,
      default: "#",
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}

.red {
  color: #646464;
}

.red:hover {
  color: #ff2838;
}
</style>
