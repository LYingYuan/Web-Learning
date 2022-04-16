<template>
  <div class="detail">
    <!-- TODO:如果有则显示 -->
    <div class="special-link">
      <slot name="special-link"></slot>
    </div>
    <ul>
      <slot name="link"></slot>
      </ul>
    <div class="logo">
      <slot name="logo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.detail {
  border: 2px solid #ff2832;
  border-top: 0;
  position: absolute;
  left: 200px;
  top: 0px;
  z-index: 3;
  width: 1000px;
  height: 480px;
  padding-left: 18px;
  background-color: bisque;
}
</style>
