<template>
  <li>
    <base-link mode="red-line">{{ word }}</base-link>
  </li>
</template>

<script>
export default {
  props: ["word"],
};
</script>
