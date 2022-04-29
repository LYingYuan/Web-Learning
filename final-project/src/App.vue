<template>
  <router-view></router-view>
</template>

<script>
export default {
  computed: {
    didAutoLogout() {
      return this.$store.getters.getDidAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        // 当token过期自动登出时，如果还在购物车界面，切换到登陆界面
        this.$router.replace("/auth");
      }
    },
  },
  created() {
    // 尝试自动登录
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style>
:root {
  box-sizing: border-box;
  font-size: 14px;
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
