<template>
  <li @mouseover="changeHoverState(true)" @mouseleave="changeHoverState(false)">
    <span class="ranking">{{ book.ranking }}</span>
    <p class="book-detail hover-book" :class="{ 'hover-book': hover }">
      <router-link :to="`/dangdang/${book.id}`" class="picture" 
        ><img :src="book.picture" alt=""
      /></router-link>
      <router-link :to="`/dangdang/${book.id}`" class="link">
        <span class="name">{{ book.name }}</span>
        <span class="introduction">{{ book.introduction }}</span>
      </router-link>
    </p>
  </li>
</template>

<script>
export default {
  props: ["book"],
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    changeHoverState(state) {
      this.hover = state;
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
}

li:hover {
  border-bottom: 1px solid #e5e5e5;
  width: 278px;
  clear: both;
  vertical-align: top;
}

.ranking {
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
  width: 140px;
  height: 33px;
  font: 12px/33px Arial;
  overflow: hidden;
}

.hover-book {
  height: 100px;
  /* margin: 15px 0 0 5px; */
}

.picture {
  /* display: block; */
  width: 90px;
  height: 90px;
  /* overflow: hidden; */
  margin: 15px 0 0;
}

.picture > img {
  width: 90px;
  height: 90px;
}

.link {
  line-height: 20px;
  /* TODO:del */
  background-color: black;
}

.link:hover {
  color: #ff2832;
  text-decoration: underline;
}
</style>
