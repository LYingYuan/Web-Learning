<template>
  <teleport to="body"
    ><div class="sticky-nav">
      <div class="search-box" v-show="show_nav">
        <div class="container">
          <div class="logo">
            <base-link to="/dangdang"
              ><img src="../../assets/icon/logo.jpg" alt=""
            /></base-link>
          </div>
          <div class="search">
            <input type="text" />
            <div class="icon">
              <img src="../../assets/icon/搜索.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <transition name="nav">
        <div class="nav-box" v-show="show_nav">
          <ul>
            <li class="book">
              <button>
                <img src="../../assets/icon/stickyNav/书-gray.svg" alt="" />
              </button>
            </li>
            <li class="clothes">
              <button>
                <img src="../../assets/icon/stickyNav/服装-gray.svg" alt="" />
              </button>
            </li>
            <li class="goods">
              <button>
                <img src="../../assets/icon/stickyNav/衣架-gray.svg" alt="" />
              </button>
            </li>
            <li class="child">
              <button>
                <img src="../../assets/icon/stickyNav/婴儿车-gray.svg" alt="" />
              </button>
            </li>
            <!-- TODO:设置锚点 -->
            <li class="recommendation">
              <button>
                <img src="../../assets/icon/stickyNav/点赞-gray.svg" alt="" />
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      show_nav: false,
    };
  },
  methods: {
    scrollHandler() {
      let distance_Y =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (distance_Y > 900) {
        this.show_nav = true;
      } else {
        this.show_nav = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style scoped>
.search-box {
  width: 100%;
  height: 52px;
  position: fixed;
  top: 0;
  background-color: rgba(229, 27, 41, 0.9);
  z-index: 20;
  left: 0;
  display: flex;
  
}

.container {
  position: relative;
}

.logo {
  padding: 6px 0 0;
  width: 210px;
  float: left;
  overflow: hidden;
  height: 52px;
}

.search {
  width: 738px;
  height: 32px;
  overflow: hidden;
  background: #fff;
  font: 14px/32px "Microsoft YaHei";
  margin-top: 9px;
  padding-left: 10px;
  position: absolute;
  left: 210px;
}

.search input {
  height: 32px;
  background: #fff;
  line-height: 32px;
  border: 0;
  width: 700px;
  color: #666;
  outline: none;
}

.icon {
  position: absolute;
  background-color: #d31e28;
  top: 0;
  right: 0;
}

.icon img {
  max-height: 30px;
}

.nav-box {
  left: 50%;
  margin-left: -638px;
  position: fixed;
  bottom: 30px;
  /* TODO:del */
  background-color: #f6f6f6;
}

.nav-box ul {
  width: 38px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.nav-box li {
  height: 40px;
  line-height: 40px;
  position: relative;
  z-index: 5;
  width: 38px;
  overflow: hidden;
}

.nav-box img {
  max-width: 38px;
  padding: 0 3px;
}

.nav-box button {
  background-color: #f6f6f6;
}

.nav-box button:hover {
  background-color: white;
}

.nav-enter-from,
.nav-leave-to {
  transform: scale(1.2);
  opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
  transition: all 0.3s ease;
}

.nav-enter-to,
.nav-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
