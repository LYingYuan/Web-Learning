<template>
  <the-header></the-header>
  <the-home-body></the-home-body>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";
import TheHomeBody from '../layout/TheHomeBody.vue';

export default {
  components: {
    TheHeader,
    TheHomeBody
  },
};
</script>
