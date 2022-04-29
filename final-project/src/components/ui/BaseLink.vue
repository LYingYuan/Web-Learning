<template>
  <router-link :class="mode" :to="to" v-if="!isBottom">
    <slot></slot>
  </router-link>
  <button v-else :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    // 链接的样式
    // 初始颜色为 #646464;
    // red：        当hover时显示为红色 #ff2838
    // black：      当hover时显示为红色 #ff2838
    // black-line   当hover时显示为红色且有下划线 #ff2838
    // gray-back:   字体颜色不变
    // red-line:    当hover时由 #949494 显示为红色且有下划线 #ff2838
    // red-2:       当hover时由 #949494 显示为红色 #ff2838
    // none:        所有情况显示为白色且hover没有样式
    // black-all    全黑
    // red-all      全红
    // gray-line    color: #666 -> #ff2838 且有下划线
    // blue-line    color: #1a66b3 -> #1a66b3 且有下划线
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
    isBottom: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  background: none;
}

a:hover,
button:hover {
  color: #ff2838;
}

.gray-line {
  color: #666;
}

.red,
.gray-back {
  color: #646464;
}

.gray-back:hover {
  color: #646464;
}

.red-line,
.red-2 {
  color: #949494;
}

.red-line:hover,
.black-line:hover,
.gray-line:hover,
.blue-line:hover {
  text-decoration-line: underline;
}

.black,
.black-line,
.black-all {
  color: black;
}

.none {
  color: white;
}

.none:hover {
  color: white;
}

.black-all:hover {
  color: black;
}

.red-all {
  color: #ff2838;
}

.blue-line,
.blue-line:hover {
  color: #1a66b3;
}
</style>
