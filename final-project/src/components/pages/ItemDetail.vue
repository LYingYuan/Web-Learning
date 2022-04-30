<template>
  <the-header></the-header>
  <div class="container">
    <div class="item">
      <div class="picture">
        <img :src="item.picture" alt="" />
      </div>
      <div class="information">
        <div class="detail">
          <div class="name">
            <h1>{{ item.name }}</h1>
            <h2>
              {{ item.introduction }}
            </h2>
          </div>
          <div class="publish">
            <span class="title"
              >作者:
              <base-link mode="blue-line">{{ item.author }}</base-link>
            </span>
            <span class="title"
              >出版社:
              <base-link mode="blue-line">{{ item.publish }}</base-link>
            </span>
            <span class="title"
              >出版时间:<span>{{ item.publish_time }}</span></span
            >
            <div class="comment">
              <span class="title">
                <span class="star-box"> <span class="star"></span></span>
                <base-link mode="blue-line">24</base-link>
                <span>条评论</span>
              </span>
            </div>
            <div class="price">
              <div class="pc">
                <!-- TODO:写到这儿了 -->
                <div class="current-price">
                  <span class="title-2">
                    <span>当当价</span>
                    <base-link mode="blue-line" class="reduce"
                      >降价通知</base-link
                    >
                  </span>
                  <span><span>￥</span>{{ item.price }}</span>
                </div>
                <div class="discount">({{ item.discount }})</div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <div class="num">
            <input type="number" v-model.number="item_num" />
            <button class="num-add" @click="changeNum('add')">+</button>
            <button class="num-del" @click="changeNum('del')">-</button>
          </div>
          <button class="cart-btn" @click="addToCart">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";

export default {
  props: ["itemId"],
  components: {
    TheHeader,
  },
  data() {
    return {
      item: null,
      item_num: 0,
    };
  },
  methods: {
    changeNum(method) {
      if (method === "add") {
        this.item_num++;
      } else {
        this.item_num--;
      }
      if (this.item_num < 0) {
        this.item_num = 0;
      }
    },
    addToCart() {
      const data = {
        id: this.itemId,
        price: this.item.price,
        name: this.item.name,
        count: this.item_num,
      };
      this.$store.dispatch("cart/addCartItem", data);
    },
  },
  created() {
    this.item = this.$store.getters["items/getAllItems"].find(
      (item) => item.id === this.itemId
    );
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
}

.picture {
  width: 320px;
  padding: 0 20px 30px 0;
}

.detail {
  line-height: 24px;
  padding: 0 0 0 10px;
  margin-top: 5px;
}

.name {
  font-family: "Verdana", "Microsoft Yahei";
  font-weight: normal;
  border-bottom: 1px solid #f5f5f5;
  padding: 0 6px 12px 0;
}

.name > h1 {
  line-height: 24px;
  max-height: 48px;
  overflow: hidden;
  color: #323232;
  font-size: 18px;
  margin: 0 auto;
}

.name > h2 {
  padding-top: 6px;
  max-height: 96px;
  overflow: hidden;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}

.title {
  display: inline-block;
  padding-right: 25px;
}

.star-box {
  float: left;
  width: 70px;
  height: 12px;
  background: url(../../assets/pic/items/icon_star.png) repeat-x 0 -12px;
  margin: 6px 6px 0 0;
  _display: inline;
  overflow: hidden;
}

.star {
  background: url(../../assets/pic/items/icon_star.png) repeat-x 0 0;
  display: block;
  height: 12px;
}

.price {
  background-color: #fcfaf7;
  padding: 0 0 0 10px;
  margin: 6px 0 0 -10px;
  line-height: 24px;
  position: relative;
  width: 630px;
  z-index: 6666;
}

.current-price {
  font-size: 26px;
  color: #e52222;
}

.discount {
  color: #e52222;
  height: 20px;
  display: flex;
  align-items: flex-end;
  line-height: 1.5;
  font-size: 13px;
}

.title-2 {
  color: #8f8f8f;
  font-weight: normal;
  font-size: 12px;
}

.reduce {
  margin-left: 10px;
}

.pc {
  float: left;
  overflow: hidden;
  padding: 9px 5px 0 0;
  width: 100px;
}

.information {
  display: flex;
  flex-direction: column;
}

.cart-btn {
  height: 36px;
  font: 16px/36px "Microsoft Yahei";
  overflow: hidden;
  margin: 0 0 3px 10px;
  float: left;
  padding: 0 15px;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  background-color: #ff2832;
  cursor: pointer;
}

.cart-btn:hover {
  background-color: #f00000;
}

.num {
  float: left;
  height: 34px;
  border: 1px solid #e9e9e9;
  width: 38px;
  padding-right: 23px;
  overflow: hidden;
  text-align: center;
  position: relative;
}

.num-add {
  background-position: -37px 0;
  top: 0;
}

.num-def {
  background-position: -37px -17px;
  top: 17px;
}

.num button {
  position: absolute;
  right: 0;
  display: block;
  width: 23px;
  height: 17px;
  margin-left: 6px;
  cursor: pointer;
}
</style>
