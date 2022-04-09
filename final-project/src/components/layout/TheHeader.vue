<template>
  <header-link></header-link>
  <header-search></header-search>
  <header-nav></header-nav>
</template>

<script>
import HeaderLink from "../header/HeaderLink.vue";
import HeaderSearch from "../header/HeaderSearch.vue";
import HeaderNav from "../header/HeaderNav.vue";

export default {
  components: {
    HeaderLink,
    HeaderSearch,
    HeaderNav,
  },
};
</script>

<style scoped></style>
