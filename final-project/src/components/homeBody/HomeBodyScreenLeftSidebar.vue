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
    </ul>
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail0"
      @mouseover="hoverItem(0)"
      @mouseleave="leaveItem(0)"
    >
      <template v-slot:special-link>
        <home-body-screen-left-sidebar-detail-link
          title="图书馆"
        ></home-body-screen-left-sidebar-detail-link>
      </template>
      <template v-slot:link>
        <home-body-screen-left-sidebar-detail-list
          >hello</home-body-screen-left-sidebar-detail-list
        >
      </template>
      <template v-slot:logo> </template>
    </home-body-screen-left-sidebar-detail>
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail1"
      @mouseover="hoverItem(1)"
      @mouseleave="leaveItem(1)"
    ></home-body-screen-left-sidebar-detail>
    <home-body-screen-left-sidebar-detail
      v-show="displayDetail2"
      @mouseover="hoverItem(2)"
      @mouseleave="leaveItem(2)"
    ></home-body-screen-left-sidebar-detail>
  </div>
</template>

<script>
import HomeBodyScreenLeftSidebarItem from "./HomeBodyScreenLeftSidebarItem.vue";
import HomeBodyScreenLeftSidebarDetail from "./HomeBodyScreenLeftSidebarDetail.vue";
import HomeBodyScreenLeftSidebarDetailLink from "./HomeBodyScreenLeftSidebarDetailLink.vue";
import HomeBodyScreenLeftSidebarDetailList from "./HomeBodyScreenLeftSidebarDetailList.vue";

export default {
  components: {
    HomeBodyScreenLeftSidebarItem,
    HomeBodyScreenLeftSidebarDetail,
    HomeBodyScreenLeftSidebarDetailLink,
    HomeBodyScreenLeftSidebarDetailList,
  },
  computed: {
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
</style>
