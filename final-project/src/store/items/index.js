import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      all_items: [
        {
          name: "长短经（又名《反经》，全注全译全",
          author: "（唐）赵蕤",
          id: "1",
          price: "58.00",
          picture: require("../../assets/pic/items/recommendations/1.jpg"),
          introduction:
            "职场、官场、商场智慧修炼之经典，*、乾隆、南怀瑾等一致推崇，比《孙子兵法》更实用，比《资治通鉴》更精彩",
          publish: "中国书店出版社",
          publish_time: "2013年01月",
          discount: "5.92折",
        },
        {
          name: "活着（余华代表作，精装，易烊千玺推荐阅读。当当专享印签藏书票+限量赠珍藏复刻手稿）",
          author: "余华",
          id: "2",
          price: "31.00",
          picture: require("../../assets/pic/items/recommendations/2.jpg"),
          introduction:
            "余华代表作，DU家授权正版。限量赠·珍藏复刻手稿。人是为了活着本身而活着的，而不是为了活着之外的任何事物而活着。",
          publish: "北京十月文艺出版社",
          publish_time: "2021年10月 ",
          discount: "6.89折",
        },
      ],
      recommended_items: [
        {
          name: "长短经（又名《反经》，全注全译全",
          id: "1",
          price: "58.00",
          picture: require("../../assets/pic/items/recommendations/1.jpg"),
        },
        {
          name: "活着",
          id: "2",
          price: "31.00",
          picture: require("../../assets/pic/items/recommendations/2.jpg"),
        },
      ],
    };
  },
  actions,
  getters,
  mutations,
};
