<template>
  <the-header></the-header>
  <div class="container">
    <div class="item">
      <div class="picture">
        <img src="../../assets/pic/items/recommendations/1.jpg" alt="" />
      </div>
      <div class="information">
        <div class="detail clearflex">
          <div class="name">
            <h1>长短经（又名《反经》，全注全译全三册）中国书店</h1>
            <h2>
              职场、官场、商场智慧修炼之经典，*、乾隆、南怀瑾等一致推崇，比《孙子兵法》更实用，比《资治通鉴》更精彩
            </h2>
          </div>
          <div class="publish">
            <span class="title"
              >作者:
              <base-link mode="blue-line">（唐）赵蕤</base-link>
            </span>
            <span class="title"
              >出版社:
              <base-link mode="blue-line">中国书店出版社</base-link>
            </span>
            <span class="title">出版时间:<span>2013年01月</span></span>
            <div class="comment">
              <span class="title">
                <span class="star-box"> <span class="star"></span></span>
                <base-link mode="blue-line">24</base-link>
                <span>条评论</span>
              </span>
            </div>
            <div class="price">
              <div class="pc">
                <div class="current-price">
                  <span class="title-2">
                    <span>当当价</span>
                    <base-link mode="blue-line" class="reduce"
                      >降价通知</base-link
                    >
                  </span>
                  <span><span>￥</span>58.00 </span>
                </div>
                <div class="discount">(5.92折)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
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
  height: 49px;
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
</style>
