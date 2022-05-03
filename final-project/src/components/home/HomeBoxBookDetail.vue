<template>
  <div class="detail">
    <div class="left">
      <base-link :to="left_pic.url"
        ><img :src="left_pic.src" alt=""
      /></base-link>
      <ul>
        <li v-for="left_link in left_links" :key="left_link.name">
          <base-link :to="left_link.url" mode="black-line" class="a-font">{{
            left_link.name
          }}</base-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="item" v-if="!has_carousel">
        <base-link :to="right_first.url"
          ><img :src="right_first.src" alt=""
        /></base-link>
      </div>
      <!-- TODO:v-else -->
      <li class="item" v-else></li>
      <home-box-book-detail-item
        v-for="item in right_links"
        :key="item.id"
        :item="item"
      ></home-box-book-detail-item>
    </div>
  </div>
</template>

<script>
import HomeBoxBookDetailItem from "./HomeBoxBookDetailItem.vue";

export default {
  props: [
    "left_pic",
    "left_links",
    "right_first",
    "right_links",
    "has_carousel",
  ],
  components: {
    HomeBoxBookDetailItem,
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  width: 100%;
  height: 443px;
}

.left {
  height: 100%;
  width: 238px;
}

.left > a {
  width: 238px;
  height: 441px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  text-align: center;
}

.left ul {
  position: absolute;
  bottom: 0;
  width: 238px;
  padding-left: 17px;
  background: url(http://img63.ddimg.cn/upload_img/00111/home/home_bg_1509.png)
    0 0;
  display: flex;
  flex-wrap: wrap;
}

.left li {
  width: 33%;
  height: 28px;
  line-height: 28px;
  overflow: hidden;
}

.a-font {
  font-size: 12px;
}

.right {
  width: 672px;
  height: 441px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 1px 1px;
  background-color: #e6e6e6;
}

.item:nth-child(1) {
  grid-row: 1/2;
  grid-column: 1/3;
}
</style>
