<template>
  <div>
    <base-link :to="url" :mode="mode" :isBottom="isBottom">
      <slot></slot>
    </base-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      style: String,
      required: false,
      default: "#",
    },
    mode: {
      style: String,
      required: false,
    },
    isBottom: {
      style: Boolean,
      required: false,
      default: false,
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
