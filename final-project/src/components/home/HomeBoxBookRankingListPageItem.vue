<template>
  <li
    @mouseover="changeHoverState(true)"
    @mouseleave="changeHoverState(false)"
    :class="{ 'hover-list': hover }"
  >
    <span class="ranking" :class="`${book.ranking_mode}`">{{
      book.ranking
    }}</span>
    <p class="book-detail" :class="{ 'hover-book': hover }">
      <router-link :to="`/dangdang/${book.id}`" class="picture" v-show="hover"
        ><img :src="book.picture" alt=""
      /></router-link>
      <router-link
        :to="`/dangdang/${book.id}`"
        class="link"
        :class="{ 'hover-book-link': hover }"
      >
        <span class="name">{{ book.name }}</span>
        <br />
        <span class="introduction">{{ book.introduction }}</span>
      </router-link>
    </p>
  </li>
</template>

<script>
export default {
  props: ["book", "hover_ranking", "list_index"],
  data() {
    return {
      hover: false,
    };
  },
  watch: {
    hover_ranking(newValue) {
      if (newValue !== this.book.ranking) {
        this.hover = false;
      }
    },
  },
  methods: {
    changeHoverState(state) {
      if (state === true) {
        this.$store.dispatch("items/setRanking", {
          index: this.list_index,
          ranking: this.book.ranking,
        });
        this.hover = true;
      }
    },
  },
  created() {
    if (this.book.ranking === this.hover_ranking) {
      this.hover = true;
    }
  },
};
</script>

<style scoped>
li {
  display: flex;
  margin-left: 40px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}

li:last-child {
  border-bottom: 0;
}

.hover-list {
  height: 136px;
  width: 278px;
  clear: both;
  vertical-align: top;
}

.ranking {
  position: absolute;
  left: -40px;
  width: 40px;
  height: 33px;
  font: 12px/33px Arial;
  padding-left: 15px;
  background: #fff;
  margin-bottom: -1px;
  overflow: hidden;
}

.book-detail {
  display: flex;
  justify-content: space-between;
  height: 33px;
  font: 12px/33px Arial;
  overflow: hidden;
}

.hover-book {
  height: 103px;
  margin-top: 15px;
}

a.hover-book-link {
  line-height: 20px;
}

.picture {
  width: 90px;
  height: 100px;
}

.picture > img {
  width: 90px;
  height: 90px;
}

.link {
  line-height: 33px;
  width: 140px;
  height: 120px;
  margin-left: 5px;
}

.link:hover .name,
.link:hover .introduction {
  color: #ff2832;
  text-decoration: underline;
}

.name {
  color: #646464;
}

.introduction {
  color: #969696;
}

.gray {
  color: #666;
}

.red-bold,
.red {
  color: #ff2832;
}

.red-bold {
  font-weight: bold;
}
</style>
