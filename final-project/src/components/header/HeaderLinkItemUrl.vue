<template>
  <li>
    <base-link mode="gray-back" :to="url">{{ name }}</base-link>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
};
</script>
