<template>
  <ul class="list">
    <home-box-book-ranking-list-page-item
      v-for="book in books"
      :key="book.id"
      :book="book"
    ></home-box-book-ranking-list-page-item>
  </ul>
</template>

<script>
import HomeBoxBookRankingListPageItem from "./HomeBoxBookRankingListPageItem.vue";

export default {
  props: ["books"],
  components: {
    HomeBoxBookRankingListPageItem,
  },
};
</script>

<style scoped>
.list {
  /* TODO:del */
  background-color: aqua;
  padding-top: 10px;
}
</style>
