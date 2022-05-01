import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      cart_items: [],
      items_count: 0,
    };
  },
  actions,
  getters,
  mutations,
};
