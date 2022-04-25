<template>
  <header>
    <router-link to="/dangdang">
      <img src="../../assets/pic/auth/logo.png" alt="" />
    </router-link>
    <div class="right">
      <base-link mode="gray-back">切换无障碍</base-link>
      <base-link mode="gray-back">
        <img src="../../assets/icon/消息.svg" alt="" />
        <span>“登录页面“改进建议</span>
      </base-link>
    </div>
  </header>
</template>

<style scoped>
header {
  /* TODO:del */
  /* background-color: aqua; */
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.right img {
  width: 20px;
  height: 20px;
}
</style>
