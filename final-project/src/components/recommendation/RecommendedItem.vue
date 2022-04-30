<template>
  <li>
    <base-link :to="`/dangdang/${id}`">
      <img :src="pic_url" alt="" />
    </base-link>
    <p class="name">
      <base-link mode="gray-line" :to="`/dangdang/${id}`">{{ name }}</base-link>
    </p>
    <p class="price">
      ￥<span>{{ price }}</span>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    pic_url: {
      type: String,
      required: true,
    },
  },
  // TODO:del
  // computed: {
  //   url() {
  //     return `/dangdang/${this.url}`;
  //   },
  // },
};
</script>

<style scoped>
li {
  width: 197px;
  height: 269px;
  padding: 4px 3px 7px;
  border: 1px solid #fff;
}

li:hover {
  border: 1px solid #efefef;
  box-shadow: 0 0 4px #ddd;
}

img {
  width: 190px;
  height: 190px;
}

.name {
  width: 190px;
  height: 40px;
  line-height: 16px;
  font-size: 12px;
  padding: 8px 0 0;
  margin-bottom: 5px;
  overflow: hidden;
}

.price {
  font: 18px Arial;
  color: #ff2832;
}
</style>
