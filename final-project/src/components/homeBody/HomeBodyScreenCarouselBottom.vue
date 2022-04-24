<template>
  <li>
    <img src="" alt="" />
    <div class="shadow"></div>
  </li>
</template>

<script>
export default {
  props: {
    pics: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  /* TODO:大小 */
  height: 100%;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
