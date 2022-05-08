<template>
  <router-link :to="url" :class="mode">
    {{ name }}
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: false,
      default: "#",
    },
    mode: {
      type: String,
      require: false,
      default: "gray-line",
    },
  },
};
</script>

<style scoped>
a {
  font-size: 12px;
  display: inline-block;
  padding: 0 10px;
  margin-bottom: 6px;
  border-right: 1px solid #cfd1d8;
}

.red {
  color: #ff2832;
}

.no-sep {
  border-right: 0;
}

.gray-line,
.no-sep {
  color: #646464;
}

.red-no-sep {
  color: #ff2832;
  border-right: 0;
}

a:hover {
  color: #ff2832;
  text-decoration-line: underline;
}
</style>
