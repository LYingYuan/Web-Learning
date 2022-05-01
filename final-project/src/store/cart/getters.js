export default {
  // 获取购物车物品
  getCartItems(state) {
    return state.cart_items;
  },
  // 获取购物车总数量
  getItemsCount(state) {
    // let count = 0;
    // for (const item of state.cart_items) {
    //   count += +item.count;
    // }
    // return count;

    return state.items_count;
  },
  // 获取购物车总价
  getCartCost(state) {
    let cost = 0;
    for (const item of state.cart_items) {
      cost += +item.count * +item.price;
    }
    return cost;
  },
};
