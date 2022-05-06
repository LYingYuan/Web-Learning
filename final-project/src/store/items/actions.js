export default {
  setRanking(context, payload) {
    // payload:
    // {
    //   index: 1,
    //   ranking: '1'
    // }
    context.commit("setRanking", payload);
  },
};
