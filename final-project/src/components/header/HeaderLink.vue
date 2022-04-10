<template>
  <section>
    <div class="link-start"></div>
    <div class="container">
      <div class="address" @mouseover="mouseOver" @mouseleave="mouseLeaveCity">
        <div class="selected-city" :class="{ hover: hover_city }">
          送至：<span>{{ selected_city }}</span>
          <img :src="img_src" />
        </div>
        <ul class="cities" v-show="cities_showing">
          <li
            v-for="city in cities"
            :key="city"
            :city="city"
            @click="changeCity(city)"
          >
            <base-link>{{ city }}</base-link>
          </li>
        </ul>
        <div class="bar" v-show="hover_city"></div>
      </div>
      <!-- TODO:用户登录登出 -->
      <ul class="link">
        <li>
          <!-- TODO:用户购物车 -->
          <!-- 需要图(已经下载)、需要设置用户当前购物车数量 -->
          <header-link-url url="#">购物车</header-link-url>
        </li>
        <li>
          <header-link-url url="#">我的订单</header-link-url>
        </li>
        <li>
          <header-link-url url="#">我的云书房</header-link-url>
        </li>
        <li>
          <header-link-item
            title="我的当当"
            :links="user_nav_links"
          ></header-link-item>
        </li>
        <li>
          <header-link-item
            title="当当拼团"
            :links="group_booking_links"
          ></header-link-item>
        </li>
        <li>
          <header-link-url url="#">小说投稿</header-link-url>
        </li>
        <li>
          <header-link-item
            title="企业采购"
            :links="enterprise_links"
          ></header-link-item>
        </li>
        <li>
          <header-link-item
            title="客户服务"
            :links="customer_service_links"
          ></header-link-item>
        </li>
        <li>
          <header-link-url url="#">切换无障碍</header-link-url>
        </li>
      </ul>
    </div>
    <div class="link-end"></div>
  </section>
</template>

<script>
import HeaderLinkItem from "./HeaderLinkItem.vue";
import HeaderLinkUrl from "./HeaderLinkUrl.vue";

export default {
  components: {
    HeaderLinkItem,
    HeaderLinkUrl,
  },
  data() {
    return {
      selected_city: "北京",
      hover_city: false,
      cities_showing: false,
      img_src: require("../../assets/icon/310向下、展开.svg"),
    };
  },
  methods: {
    // 改变样式并显示其他城市
    mouseOver() {
      this.cities_showing = true;
      this.hover_city = true;
      this.img_src = require("../../assets/icon/311向上、收起.svg");
    },
    mouseLeaveCity() {
      this.cities_showing = false;
      this.hover_city = false;
      this.img_src = require("../../assets/icon/310向下、展开.svg");
    },
    changeCity(city) {
      this.selected_city = city;
    },
  },
  computed: {
    // 城市
    cities() {
      return this.$store.getters["nav/getAddresses"];
    },
    // 我的当当
    user_nav_links() {
      return this.$store.getters["nav/getUserNavLinks"];
    },
    // 当当拼团
    group_booking_links() {
      return this.$store.getters["nav/getGroupBookingLinks"];
    },
    // 企业采购
    enterprise_links() {
      return this.$store.getters["nav/getEnterpriseLinks"];
    },
    // 客户服务
    customer_service_links() {
      return this.$store.getters["nav/getCustomerServiceLinks"];
    },
  },
};
</script>

<style scoped>
section {
  font: 12px "Hiragino Sans GB", "simsun", "Arial";
  color: #646464;
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #f2f2f2;
  height: 34px;
  /* z-index: 10010; */
}

.link-start,
.link-end {
  height: 2px;
}

.address {
  position: relative;
}

.selected-city {
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #f9f9f9;
}

img {
  max-height: 12px;
  margin-left: 5px;
}

.container {
  display: flex;
  justify-content: space-between;
}

.cities {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  top: 29px;
  left: 0px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 10px 0 0 20px;
  width: 300px;
  height: 220px;
}

.bar {
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  height: 1px;
  background-color: #fff;
  position: relative;
  bottom: 1px;
}

.hover {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-bottom: 1px solid #fff;
}

.link {
  display: flex;
}

.link > li {
  padding-right: 5px;
}
</style>
