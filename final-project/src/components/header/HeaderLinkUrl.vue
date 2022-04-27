<template>
  <div>
    <base-link :to="url" :mode="mode">
      <slot></slot>
    </base-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      style: String,
      require: false,
      default: "#",
    },
    mode: {
      style: String,
      require: false,
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid #f9f9f9;
  height: 30px;
  line-height: 30px;
}

div > a {
  padding: 0 6px;
}
</style>
