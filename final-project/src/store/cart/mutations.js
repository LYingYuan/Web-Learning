export default {
  setCartItems(state, payload) {
    state.cart_items = payload;
  },
  addCartItems(state, payload) {
    state.cart_items.push(payload);
  },
};
