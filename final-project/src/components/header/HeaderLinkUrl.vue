<template>
  <div>
    <base-link :to="url">
      <slot></slot>
    </base-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      to: String,
      require: false,
      default: "#",
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
