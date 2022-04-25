<template>
  <auth-header></auth-header>
  <auth-body></auth-body>
  <the-footer class="no-border"></the-footer>
</template>

<script>
import TheFooter from "../layout/TheFooter.vue";
import AuthHeader from "../auth/AuthHeader.vue";
import AuthBody from "../auth/AuthBody.vue";

export default {
  components: {
    TheFooter,
    AuthHeader,
    AuthBody,
  },
};
</script>
