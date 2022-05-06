<template>
  <ul class="list">
    <home-box-book-ranking-list-page-item
      v-for="book in books"
      :key="book.id"
      :book="book"
      :list_index="list_index"
      :hover_ranking="hover_ranking"
    ></home-box-book-ranking-list-page-item>
  </ul>
</template>

<script>
import HomeBoxBookRankingListPageItem from "./HomeBoxBookRankingListPageItem.vue";

export default {
  props: ["books", "hover_ranking", "list_index"],
  components: {
    HomeBoxBookRankingListPageItem,
  },
  data() {
    return {
      displayIndex1: true,
    };
  },
};
</script>

<style scoped>
.list {
  padding-top: 10px;
}
</style>
