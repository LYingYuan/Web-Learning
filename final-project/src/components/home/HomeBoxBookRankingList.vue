<template>
  <div class="ranking-list">
    <ul class="head">
      <li :class="{ on: list_index === 1 }" @mouseover="changeList(1)">
        <router-link to="#">图书畅销榜</router-link>
      </li>
      <li :class="{ on: list_index === 2 }" @mouseover="changeList(2)">
        <router-link to="#">童书新书榜</router-link>
      </li>
    </ul>
    <home-box-book-ranking-list-page
      v-for="list in ranking_lists"
      :key="list.index"
      :books="list.books"
      :hover_ranking="list.hover_ranking"
      :list_index="list.index"
      v-show="list.index === list_index"
    ></home-box-book-ranking-list-page>
  </div>
</template>

<script>
import HomeBoxBookRankingListPage from "./HomeBoxBookRankingListPage.vue";

export default {
  components: {
    HomeBoxBookRankingListPage,
  },
  data() {
    return {
      list_index: 1,
    };
  },
  methods: {
    changeList(index) {
      this.list_index = index;
    },
  },
  computed: {
    ranking_lists() {
      return this.$store.getters["items/getRankingLists"];
    },
  },
};
</script>

<style scoped>
.ranking-list {
  position: absolute;
  width: 280px;
  height: 499px;
  right: 0;
  border: 1px solid #e6e6e6;
}

.head {
  display: flex;
}

.head a {
  color: #666;
}

.head a:hover {
  text-decoration: underline;
}

.head > li {
  height: 46px;
  width: 139px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  text-align: center;
  color: #464646;
  font: 16px/46px "Microsoft YaHei", Simsun;
  background-color: #f5f5f5;
  cursor: default;
}

.head > li:last-child {
  border-right: 0;
}

li.on {
  background-color: #fff;
  border-bottom: 1px solid #fff;
}
</style>
