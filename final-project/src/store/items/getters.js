export default {
  getAllItems(state) {
    return state.all_items;
  },
  getRecommendedItems(state) {
    return state.recommended_items;
  },
  getPanicBuyingScenes(state) {
    return state.panic_buying_scenes;
  },
};
