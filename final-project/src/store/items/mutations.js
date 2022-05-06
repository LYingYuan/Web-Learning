export default {
  setRanking(state, payload) {
    // payload:
    // {
    //   index: 1,
    //   ranking: '1'
    // }

    // for (const list in state.ranking_lists) {
    //   if (list.index === payload.index) {
    //     list.hover_ranking = payload.ranking;
    //   }
    // }
    state.ranking_lists.forEach((list) => {
      if (list.index === payload.index) {
        list.hover_ranking = payload.ranking;
      }
    });
  },
};
