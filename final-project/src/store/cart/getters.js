export default {
  getCartItems(state) {
    return state.cart_items;
  },
  getItemsCount(state) {
    let count = 0;
    for (const item of state.cart_items) {
      count += +item.count;
    }
    return count;
  },
  getCartCost(state) {
    let cost = 0;
    for (const item of state.cart_items) {
      cost += +item.count * +item.price;
    }
    return cost;
  },
};
