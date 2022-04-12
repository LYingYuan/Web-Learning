<template>
  <router-link :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    // 链接的样式
    // 初始颜色为 #646464;
    // red：        当hover时显示为红色 #ff2838
    // black：      当hover时显示为红色 #ff2838
    // gray-back:   字体颜色不变
    // red-line:    当hover时由 #949494 显示为红色且有下划线 #ff2838
    // none:        没有样式
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

.gray-back {
  color: #646464;
}

.red-line {
  color: #949494;
}

.red-line:hover {
  color: #ff2838;
  text-decoration-line: underline;
}

.black {
  color: black;
}

.black:hover {
  color: #ff2838;
}
</style>
