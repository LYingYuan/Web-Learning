export default {
  // setLeftSidebarItem0(state, payload) {
  //   state.leftSidebarItem_0 = payload;
  // },
  setLeftSidebarItem(state, payload) {
    state[`leftSidebarItem_${payload.sign}`] = payload.flag;
  },
};
