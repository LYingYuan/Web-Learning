<template>
  <div class="container">
    <div class="logo">
      <base-link to="/dangdang">
        <img src="../../assets/pic/PClogo-1648893484.gif" alt=""
      /></base-link>
    </div>
    <div class="search">
      <div class="search-box">
        <form>
          <div class="form-container">
            <label for="searchText"></label>
            <!-- TODO:搜索功能 -->
            <input
              id="searchText"
              type="text"
              :placeholder="search_text"
              v-model.trim.lazy="user_search_text"
              @focus="focusInputBpx"
              @blur="blurInputBox"
            />
          </div>
          <div class="form-container">
            <div class="selected-class">
              <!-- :class="{ hover: hover_classes }" -->
              <span>{{ selected_class }}</span>
              <img :src="img_src" />
            </div>
            <ul class="classes"></ul>
          </div>
          <div class="form-container icon">
            <!-- 搜索 -->
            <img class="search-icon" src="../../assets/icon/搜索.svg" alt="" />
          </div>
        </form>
      </div>
      <div class="hot-search">
        <div class="hot-words">
          <!-- TODO:搜索点击热搜词跳转 -->
          <span>热搜：</span>
          <ul>
            <header-search-hot-url
              v-for="hotWord in hot_search_words"
              :key="hotWord"
              :word="hotWord"
            ></header-search-hot-url>
          </ul>
        </div>
        <base-link to="#" mode="red-line">高级搜索</base-link>
      </div>
    </div>
    <div class="user"></div>
  </div>
</template>

<script>
import HeaderSearchHotUrl from "./HeaderSearchHotUrl.vue";

export default {
  components: {
    HeaderSearchHotUrl,
  },
  data() {
    return {
      user_search_text: "",
      search_text: "",
      // TODO:搜索的分类
      selected_class: "全部分类",
      img_src: require("../../assets/icon/310向下、展开.svg"),
    };
  },
  computed: {
    // 推荐搜索词
    recommend_search_text() {
      return this.$store.getters["nav/getSearchText"];
    },
    // 热门搜索词
    hot_search_words() {
      return this.$store.getters["nav/getHotSearchWords"];
    },
  },
  created() {
    this.search_text = this.recommend_search_text;
  },
  methods: {
    focusInputBpx() {
      this.search_text = "";
    },
    blurInputBox() {
      if (this.user_search_text === "") {
        this.search_text = this.recommend_search_text;
      }
    },
  },
};
</script>

<style scoped>
.container {
  /* background-color: aqua; */
  height: 100px;
  display: flex;
}

.search {
  margin-top: 20px;
  height: 100px;
}

.search-box {
  height: 40px;
  border: 2px solid #ff2832;
}

form {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form-container {
  height: 100%;
}

#searchText {
  width: 410px;
  outline-style: none;
  padding: 12px 0 9px 10px;
}

.selected-class {
  /* 计算左边 */
  padding: 7.5px 0 7.5px 14px;
  background-color: #f6f6f6;
}

.selected-class span {
  font: 16px "Microsoft Yahei";
  color: #969696;
}

.selected-class > img {
  margin-left: 6px;
  margin-right: 8px;
  max-width: 10px;
}

.icon {
  height: 36px;
  background-color: #ff2832;
}

.search-icon {
  margin: 4px 0;
  max-height: 28px;
  width: 50px;
}

.hot-search {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #969696;
}

.hot-words {
  display: flex;
}

.hot-words > span {
  margin-right: 5px;
}

.hot-words > ul {
  display: flex;
}

.hot-words > ul > li {
  margin-right: 15px;
}

.user {
  margin-top: 20px;
}
</style>
