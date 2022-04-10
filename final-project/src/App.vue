<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
:root {
  box-sizing: border-box;
  font-size: 1em;
}

*,
::before,
::after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: none;
}

ul {
  list-style: none;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  color: white;
  text-decoration: none;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.clearflex::before,
.clearflex::after {
  display: table;
  content: " ";
}

.clearflex::after {
  clear: both;
}
</style>
