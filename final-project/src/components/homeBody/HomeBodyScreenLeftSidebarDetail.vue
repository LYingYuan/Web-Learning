<template>
  <div class="detail">
    <div class="left-box">
      <div class="special-link">
        <slot name="special-link"></slot>
      </div>
      <ul>
        <slot name="link"></slot>
      </ul>
    </div>
    <div class="logo" v-if="hasLogo">
      <slot name="logo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasLogo: {
      // 如果有logo会改变布局
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.detail {
  border: 2px solid #ff2832;
  border-top: 0;
  position: absolute;
  left: 199px;
  top: 0px;
  z-index: 4;
  width: 1001px;
  height: 488px;
  padding-left: 18px;
  font-size: 12px;
  background-color: #fff;

  display: flex;
}

.special-link {
  display: flex;
  padding-top: 10px;
}

.logo {
  width: 260px;
  padding: 25px 0 0 29px;
}

.left-box {
  width: 100%;
}
</style>
