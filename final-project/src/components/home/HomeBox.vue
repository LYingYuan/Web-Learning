<template>
  <div class="home-box">
    <div class="head">
      <div class="title">{{ title }}</div>
      <ul class="nav">
        <li v-for="link in nav_links" :key="link.name">
          <router-link :to="link.url"
            >{{ link.name }}<span>{{ link.subtitle }}</span></router-link
          >
        </li>
      </ul>
    </div>
      <slot name="content"></slot>
    <div class="logos" v-if="logos.length !== 0">
      <ul>
        <li v-for="logo in logos" :key="logo.index">
          <router-link :to="logo.url">
            <img :src="logo.src" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
    nav_links: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {},
};
</script>

<style scoped>
.home-box {
  margin: 0 auto 20px;
}

.head {
  width: 100%;
  height: 40px;
  font: bold 20px/24px "Microsoft YaHei";
  color: #323232;
  display: flex;
}

.title {
  margin: 9px 0 7px;
  padding: 0 20px 0 6px;
  font: bold 20px/24px "Microsoft YaHei";
  border-right: 1px solid #b7b7b7;
  background: #fff;
  color: #323232;
}

.title:hover {
  color: #ff2832;
}

.nav {
  display: flex;
  height: 40px;
  overflow: hidden;
}

.nav > li {
  padding: 0 30px;
  margin: 13px 0 0 -13px;
  background: url(http://img63.ddimg.cn/upload_img/00111/home/title_bg.png)
    no-repeat left 3px;
  font: 16px/20px "Microsoft YaHei";
}

.nav a {
  font: bold 16px/20px "Microsoft YaHei";
  text-decoration: none;
  color: #323232;
}

.nav span {
  font: 14px/20px "Microsoft YaHei";
  padding-left: 5px;
}

.nav li:hover > a {
  color: #ff2832;
}

.logos {
  height: 64px;
  border: 1px solid #e6e6e6;
  border-top: 0;
  overflow: hidden;
  background-color: #f7f7f7;
}

.logos > ul {
  display: flex;
  margin: 10px auto 0;
  width: 1179px;
}

.logos li {
  width: 119px;
  height: 44px;
  margin-left: -1px;
  border-left: 1px dashed #dfdfdf;
}

.logos li:first-child {
  border-left: 0;
}
</style>
