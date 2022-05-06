export default {
  setRanking(state, payload) {
    // payload:
    // {
    //   index: 1,
    //   ranking: '1'
    // }
    state.ranking_lists.forEach((list) => {
      if (list.index === payload.index) {
        list.hover_ranking = payload.ranking;
      }
    });
  },
};
