<template>
  <div class="home-body">
    <div class="container">
      <home-body-screen></home-body-screen>
    </div>
    <div class="container">
      <the-recommendation></the-recommendation>
    </div>
  </div>
</template>

<script>
import HomeBodyScreen from "../homeBody/HomeBodyScreen.vue";
import TheRecommendation from "../recommendation/TheRecommendation.vue";

export default {
  components: {
    HomeBodyScreen,
    TheRecommendation,
  },
};
</script>

<style scoped>
.home-body {
  position: relative;
  background-image: url("../../assets/pic/bj-1648893862.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
