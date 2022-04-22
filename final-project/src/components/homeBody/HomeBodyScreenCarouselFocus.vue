<template>
  <li>
    <router-link :to="url">
      <img :src="imgSrc" alt="" />
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true,
    },
    imgSrc: {
      type: String,
      require: true,
    },
  },
};
</script>
