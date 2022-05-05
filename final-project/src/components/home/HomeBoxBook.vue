<template>
  <div class="book">
    <div class="head">
      <div class="title">
        <router-link to="#">图书</router-link>
        <span> . </span>
        <router-link to="#">电子书</router-link>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <ul>
          <li :class="{ on: nav_index === 1 }" @mouseover="changeIndex(1)">
            最新上架
          </li>
          <li :class="{ on: nav_index === 2 }" @mouseover="changeIndex(2)">
            独家畅品
          </li>
          <li :class="{ on: nav_index === 3 }" @mouseover="changeIndex(3)">
            重点推荐
          </li>
          <li :class="{ on: nav_index === 4 }" @mouseover="changeIndex(4)">
            电子书
          </li>
        </ul>
      </div>
      <home-box-book-detail
        v-for="book_page in book_pages"
        :key="book_page.index"
        :left_pic="book_page.left_pic"
        :left_links="book_page.left_links"
        :right_first="book_page.right_first"
        :right_links="book_page.right_links"
        :has_carousel="book_page.has_carousel"
        v-show="book_page.index === nav_index"
      ></home-box-book-detail>
    </div>
    <home-box-book-ranking-list></home-box-book-ranking-list>
  </div>
</template>

<script>
import HomeBoxBookDetail from "./HomeBoxBookDetail.vue";
import HomeBoxBookRankingList from "./HomeBoxBookRankingList.vue";

export default {
  components: {
    HomeBoxBookDetail,
    HomeBoxBookRankingList,
  },
  data() {
    return {
      nav_index: 1,
    };
  },
  computed: {
    book_pages() {
      return this.$store.getters["items/getBooks"];
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
.book {
  height: 499px;
  overflow: hidden;
  position: relative;
  margin: 0 auto 30px;
}

.head {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 910px;
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

.content {
  position: absolute;
  top: 56px;
  left: 0;
  width: 910px;
  height: 443px;
  border: 1px solid #e6e6e6;
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
  z-index: 2;
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
