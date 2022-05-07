<template>
  <div class="clothes">
    <div class="head">
      <div class="title">
        <router-link to="#">服装</router-link>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <ul>
          <li :class="{ on: nav_index === 1 }" @mouseover="changeIndex(1)">
            服装鞋包
          </li>
          <li :class="{ on: nav_index === 2 }" @mouseover="changeIndex(2)">
            运动潮流
          </li>
          <li :class="{ on: nav_index === 3 }" @mouseover="changeIndex(3)">
            女装男装内衣
          </li>
          <li :class="{ on: nav_index === 4 }" @mouseover="changeIndex(4)">
            童装童鞋
          </li>
          <li :class="{ on: nav_index === 5 }" @mouseover="changeIndex(5)">
            鞋靴箱包
          </li>
        </ul>
      </div>
      <div class="classify">
        <router-link to="#"
          ><img src="../../assets/pic/clothes/left_pic.png" alt=""
        /></router-link>
        <ul class="links">
          <li v-for="link in nav_links" :key="link.name">
            <router-link :to="link.url">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="pages">
        <home-box-clothes-page
          v-for="page in clothes_pages"
          :key="page.index"
          :carousel="page.carousel"
          :others="page.others"
          v-show="nav_index === page.index"
        ></home-box-clothes-page>
      </div>
      <div class="logos">
        <home-box-clothes-logos :items="logos_pages"></home-box-clothes-logos>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBoxClothesLogos from "./HomeBoxClothesLogos.vue";
import HomeBoxClothesPage from "./HomeBoxClothesPage.vue";

export default {
  components: {
    HomeBoxClothesLogos,
    HomeBoxClothesPage,
  },
  data() {
    return {
      nav_index: 1,
    };
  },
  computed: {
    nav_links() {
      return this.$store.getters["items/getClothesNav"];
    },
    logos_pages() {
      return this.$store.getters["items/getClothesLogoPages"];
    },
    clothes_pages() {
      return this.$store.getters["items/getClothesPages"];
    },
  },
  methods: {
    changeIndex(index) {
      this.nav_index = index;
    },
  },
};
</script>

<style scoped>
.head {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-bottom: 2px solid #000;
  color: #323232;
  font: bold 20px/44px "Microsoft YaHei";
  z-index: 1;
}

.title a {
  color: #323232;
}

.title a:hover {
  color: #ff2832;
}

.title span {
  font-size: 16px;
  position: relative;
  top: -3px;
}

.clothes {
  height: 655px;
  overflow: hidden;
  position: relative;
  margin: 0 auto 30px;
}

.content {
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: 579px;
  border: 1px solid #e6e6e6;
  background-color: #e6e6e6;
}

.classify {
  width: 238px;
  height: 521px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.links {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 1px;
  background: url(http://img63.ddimg.cn/upload_img/00111/home/home_bg_1509.png)
    0 0;
  display: flex;
  flex-wrap: wrap;
  padding-left: 17px;
}

.links li {
  width: 33%;
  height: 28px;
  line-height: 28px;
  overflow: hidden;
}

.links a {
  color: #323232;
  font: 12px/28px "Microsoft YaHei";
}

.links a:hover {
  color: #ff2832;
  text-decoration: underline;
}

.logos {
  background-color: white;
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
}

.pages {
  position: absolute;
  width: 959px;
  height: 521px;
  right: 0;
}

.nav {
  height: 44px;
  width: 655px;
  border-right: 1px solid #e6e6e6;
  position: absolute;
  top: -57px;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
}

.nav ul {
  display: flex;
}

.nav li {
  width: 114px;
  height: 42px;
  padding-top: 1px;
  border: 1px solid #e6e6e6;
  border-width: 1px 0 0 1px;
  text-align: center;
  background-color: #f5f5f5;
  font: 14px/42px "Microsoft YaHei";
  color: #646464;
  cursor: default;
  overflow: hidden;
  z-index: 1;
}

li.on {
  font-weight: bold;
  background-color: #fff;
  height: 44px;
  width: 112px;
  border: 2px solid #000;
  border-bottom: 0;
  padding: 0 0 2px 0;
  margin-bottom: -2px;
  color: #525252;
}
</style>
