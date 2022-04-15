<template>
  <the-header></the-header>
  <the-home-body></the-home-body>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";
import TheHomeBody from "../layout/TheHomeBody.vue";
import TheFooter from "../layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheHomeBody,
    TheFooter,
  },
};
</script>
