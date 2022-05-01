<template>
  <the-header></the-header>
  <the-home-body></the-home-body>
  <the-footer></the-footer>
  <the-nav></the-nav>
  <sticky-nav></sticky-nav>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";
import TheHomeBody from "../layout/TheHomeBody.vue";
import TheFooter from "../layout/TheFooter.vue";
import TheNav from "../layout/TheNav.vue";
import StickyNav from "../stickyNav/StickyNav.vue";


export default {
  components: {
    TheHeader,
    TheHomeBody,
    TheFooter,
    TheNav,
    StickyNav,
  },
};
</script>
