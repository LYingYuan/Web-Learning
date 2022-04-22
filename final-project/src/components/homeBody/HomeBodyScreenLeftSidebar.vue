<template>
  <div class="left-sidebar">
    <ul class="classify">
      <home-body-screen-left-sidebar-item
        @mouseover="hoverItem(0)"
        @mouseleave="leaveItem(0)"
        sign="0"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail0 }"
            >图书</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail0 }"
            >童书</router-link
          >
        </span>
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item
        @mouseover="hoverItem(1)"
        @mouseleave="leaveItem(1)"
        sign="1"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail1 }"
            >电子书</router-link
          >
        </span>
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item
        @mouseover="hoverItem(2)"
        @mouseleave="leaveItem(2)"
        sign="2"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail2 }"
            >创意文具</router-link
          >
        </span>
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item
        @mouseover="hoverItem(3)"
        @mouseleave="leaveItem(3)"
        sign="3"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail3 }"
            >服饰</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail3 }"
            >内衣</router-link
          >
        </span>
      </home-body-screen-left-sidebar-item>
      <home-body-screen-left-sidebar-item
        @mouseover="hoverItem(4)"
        @mouseleave="leaveItem(4)"
        sign="4"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail4 }"
            >鞋靴</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail4 }"
            >箱包</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(5)"
        @mouseleave="leaveItem(5)"
        sign="5"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail5 }"
            >运动户外</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(6)"
        @mouseleave="leaveItem(6)"
        sign="6"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail6 }"
            >孕</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail6 }"
            >婴</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail6 }"
            >童</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(7)"
        @mouseleave="leaveItem(7)"
        sign="7"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail7 }"
            >家居</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail7 }"
            >家纺</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail7 }"
            >汽车</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(8)"
        @mouseleave="leaveItem(8)"
        sign="8"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail8 }"
            >家具</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail8 }"
            >家装</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail8 }"
            >康体</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(9)"
        @mouseleave="leaveItem(9)"
        sign="9"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail9 }"
            >个人护理</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail9 }"
            >清洁</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(10)"
        @mouseleave="leaveItem(10)"
        sign="10"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail10 }"
            >食品</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail10 }"
            >茶酒</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(11)"
        @mouseleave="leaveItem(11)"
        sign="11"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail11 }"
            >珠宝饰品</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(12)"
        @mouseleave="leaveItem(12)"
        sign="12"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail12 }"
            >手机</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail12 }"
            >数码</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail12 }"
            >电脑办公</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(13)"
        @mouseleave="leaveItem(13)"
        sign="13"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail13 }"
            >家用电器</router-link
          >
        </span> </home-body-screen-left-sidebar-item
      ><home-body-screen-left-sidebar-item
        @mouseover="hoverItem(14)"
        @mouseleave="leaveItem(14)"
        sign="14"
      >
        <span>
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail14 }"
            >当当礼品卡</router-link
          >、
          <router-link
            to="#"
            class="red-line"
            :class="{ aHover: displayDetail14 }"
            >生活服务</router-link
          >
        </span>
      </home-body-screen-left-sidebar-item>
    </ul>
    <!-- 图书、童书 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail0"
      @mouseover="hoverItem(0)"
      @mouseleave="leaveItem(0)"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="图书馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="童书馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail0"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 图书、童书 end -->
    <!-- 电子书 start-->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail1"
      @mouseover="hoverItem(1)"
      @mouseleave="leaveItem(1)"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="免费书"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="电子书馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="下载当当阅读"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail1"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 电子书 end-->
    <!-- 创意文具 start-->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail2"
      @mouseover="hoverItem(2)"
      @mouseleave="leaveItem(2)"
    >
      <template #special-link
        ><home-body-screen-left-sidebar-detail-link
          title="文创馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="艺术拍卖馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="艺术设计/艺术衍生品馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail2"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 创意文具 end-->
    <!-- 服饰、内衣 start-->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail3"
      @mouseover="hoverItem(3)"
      @mouseleave="leaveItem(3)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="内衣"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail3"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
      <template #logo>
        <ul class="logo-box">
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/1-拉夏贝尔.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/3.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/4.png" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/5.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/6.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/7.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/8.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/9.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/10.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/11.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/3/12.png" />
            </router-link>
          </li>
        </ul>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 服饰、内衣 end-->
    <!-- 鞋靴、 箱包 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail4"
      @mouseover="hoverItem(4)"
      @mouseleave="leaveItem(4)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="鞋靴馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="箱包馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail4"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
      <template #logo>
        <ul class="logo-box">
          <li>
            <router-link to="#">
              <img src="../../assets/logo/4/1.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/4/1.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/4/2.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/4/3.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/4/4.jpg" />
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <img src="../../assets/logo/4/5.jpg" />
            </router-link>
          </li>
        </ul>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 鞋靴、 箱包 end -->
    <!-- 运动户外 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail5"
      @mouseover="hoverItem(5)"
      @mouseleave="leaveItem(5)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="户外运动馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail5"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 运动户外 end -->
    <!-- 孕、 婴、 童 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail6"
      @mouseover="hoverItem(6)"
      @mouseleave="leaveItem(6)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="童装童鞋"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="母婴馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="玩具馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="童书馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail6"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 孕、 婴、 童 end -->
    <!-- 家居、 家纺、 汽车 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail7"
      @mouseover="hoverItem(7)"
      @mouseleave="leaveItem(7)"
    >
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail7"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 家居、 家纺、 汽车 end -->
    <!-- 家具、 家装、 康体 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail8"
      @mouseover="hoverItem(8)"
      @mouseleave="leaveItem(8)"
    >
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail8"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 家具、 家装、 康体 end -->
    <!-- 个人护理、 清洁 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail9"
      @mouseover="hoverItem(9)"
      @mouseleave="leaveItem(9)"
      :hasLogo="true"
    >
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail9"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 个人护理、 清洁 end -->
    <!-- 食品、 茶酒 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail10"
      @mouseover="hoverItem(10)"
      @mouseleave="leaveItem(10)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="食品"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail10"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 食品、 茶酒 end -->
    <!-- 珠宝饰品 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail11"
      @mouseover="hoverItem(11)"
      @mouseleave="leaveItem(11)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="珠宝馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail11"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 珠宝饰品 end -->
    <!-- 手机、 数码、 电脑办公 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail12"
      @mouseover="hoverItem(12)"
      @mouseleave="leaveItem(12)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="手机通讯"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail12"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 手机、 数码、 电脑办公 end -->
    <!-- 家用电器 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail13"
      @mouseover="hoverItem(13)"
      @mouseleave="leaveItem(13)"
      :hasLogo="true"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="家用电器"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail13"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 家用电器 end -->
    <!-- 当当礼品卡、 生活服务 start -->
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail14"
      @mouseover="hoverItem(14)"
      @mouseleave="leaveItem(14)"
    >
      <template #special-link>
        <home-body-screen-left-sidebar-detail-link
          title="礼品卡馆"
        ></home-body-screen-left-sidebar-detail-link>
        <home-body-screen-left-sidebar-detail-link
          title="礼品卡优惠专区"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template #link>
        <home-body-screen-left-sidebar-detail-list
          v-for="line in detail14"
          :key="line.title"
          :title="line.title"
          :links="line.links"
          :mode="line.mode"
        ></home-body-screen-left-sidebar-detail-list>
      </template>
    </home-body-screen-left-sidebar-detail>
    <!-- 当当礼品卡、 生活服务 end -->
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebarItem from "./HomeBodyScreenLeftSidebarItem.vue";
import HomeBodyScreenLeftSidebarDetail from "./HomeBodyScreenLeftSidebarDetail.vue";
import HomeBodyScreenLeftSidebarDetailLink from "./HomeBodyScreenLeftSidebarDetailLink.vue";
import HomeBodyScreenLeftSidebarDetailList from "./HomeBodyScreenLeftSidebarDetailList.vue";
// import HomeBodyScreenLeftSidebarDetailLogo from "./HomeBodyScreenLeftSidebarDetailLogo.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebarItem,
    HomeBodyScreenLeftSidebarDetail,
    HomeBodyScreenLeftSidebarDetailLink,
    HomeBodyScreenLeftSidebarDetailList,
    // HomeBodyScreenLeftSidebarDetailLogo,
  },
  computed: {
    detail0() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail0"];
    },
    detail1() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail1"];
    },
    detail2() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail2"];
    },
    detail3() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail3"];
    },
    detail4() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail4"];
    },
    detail5() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail5"];
    },
    detail6() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail6"];
    },
    detail7() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail7"];
    },
    detail8() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail8"];
    },
    detail9() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail9"];
    },
    detail10() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail10"];
    },
    detail11() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail11"];
    },
    detail12() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail12"];
    },
    detail13() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail13"];
    },
    detail14() {
      return this.$store.getters["bodyScreen/getLeftSidebarItemDetail14"];
    },
    displayDetail0() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem0"];
    },
    displayDetail1() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem1"];
    },
    displayDetail2() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem2"];
    },
    displayDetail3() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem3"];
    },
    displayDetail4() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem4"];
    },
    displayDetail5() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem5"];
    },
    displayDetail6() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem6"];
    },
    displayDetail7() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem7"];
    },
    displayDetail8() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem8"];
    },
    displayDetail9() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem9"];
    },
    displayDetail10() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem10"];
    },
    displayDetail11() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem11"];
    },
    displayDetail12() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem12"];
    },
    displayDetail13() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem13"];
    },
    displayDetail14() {
      return this.$store.getters["bodyScreen/getLeftSidebarItem14"];
    },
  },
  methods: {
    hoverItem(num) {
      this.$store.dispatch("bodyScreen/hoverLeftSidebarItem", {
        sign: num,
        flag: true,
      });
    },
    leaveItem(num) {
      this.$store.dispatch("bodyScreen/hoverLeftSidebarItem", {
        sign: num,
        flag: false,
      });
    },
  },
};
</script>

<style scoped>
.left-sidebar {
  padding: 4px 0;
  height: 480px;
  width: 200px;
  background-color: #fafafa;
  position: relative;
}

.red-line {
  color: black;
}

.red-line:hover {
  text-decoration-line: underline;
}

.aHover {
  color: #ff2832;
}

.logo-box {
  display: flex;
  flex-wrap: wrap;
  width: 260px;
}

.logo-box li {
  margin: 0 22px 11px 0;
}
.logo-box a {
  display: block;
  width: 88px;
  height: 58px;
  padding: 4px;
  border: 1px solid #fff;
}

.logo-box a:hover {
  border-color: #ff2832;
}

.logo-box img {
  max-height: 50px;
  max-width: 80px;
}
</style>
