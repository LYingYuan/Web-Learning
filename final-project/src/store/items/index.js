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
          publish_time: "2021年10月",
          discount: "6.89折",
        },
        {
          name: "儿童观察力贴纸书全6册 贴纸3-4-6岁儿童智力潜能开发手工亲子互动游戏玩具思维益智书观察力+记忆力+数字联想+视觉记忆",
          author: "米艺文化",
          id: "3",
          price: "19.90",
          picture: require("../../assets/pic/items/panicBuying/20/1.jpg"),
          introduction:
            "专为3-6岁儿童设计智力开发潜能手工书，开启聪明大脑，挑战超强思维有助于提升孩子专注力、观察力、想象力以及记忆力。",
          publish: "广东旅游出版社",
          publish_time: "2021年01月",
          discount: "3.32折",
        },
        {
          name: "中华国学传世经典一山海经（套装全6册）",
          author: "谢普",
          id: "4",
          price: "125.00",
          picture: require("../../assets/pic/items/panicBuying/20/2.jpg"),
          introduction: "",
          publish: "应急管理出版社",
          publish_time: "2020年07月 ",
          discount: "7.45折",
        },
        {
          name: "小学生4年级下册开心同步作文+阅读理解与答题模板 共2册 四年级下册 2022春人教RJ版教材 同步作文写作指导 课内课外阅读理解强化训练 开",
          author: "开心教育研究中心",
          id: "5",
          price: "25.80",
          picture: require("../../assets/pic/items/panicBuying/20/3.jpg"),
          introduction: "名师亲力指导及视频讲解，同步考点高分训练答案详解，让孩子读写快人一步！",
          publish: "湖南教育出版社",
          publish_time: "2021年12月 ",
          discount: "3.77折",
        },
        {
          name: "",
          author: "",
          id: "3",
          price: "",
          picture: require("../../assets/pic/items/panicBuying/20/1.jpg"),
          introduction: "",
          publish: "",
          publish_time: "",
          discount: "",
        },
      ],
      // 秒杀
      panic_buying_scenes: [
        {
          id: "20",
          items: [
            {
              id: "3",
              name: "儿童观察力贴纸书全6册 贴纸3-4-6岁儿童智力潜能开发手工亲子互动游戏玩具思维益智书观察力+记忆力+数字联想+视觉记忆",
              price: "28.9",
              discount_price: "19.9",
              snapped_up: 27,
              picture: require("../../assets/pic/items/panicBuying/20/1.jpg"),
            },
            {
              name: "中华国学传世经典一山海经（套装全6册）",
              id: "4",
              price: "168.00",
              discount_price: "125.00",
              snapped_up: 28,
              picture: require("../../assets/pic/items/panicBuying/20/2.jpg"),
            },
            {
              name: "小学生4年级下册开心同步作文+阅读理解与答题模板 共2册 四年级下册 2022春人教RJ版教材 同步作文写作指导 课内课外阅读理解强化训练 开",
              id: "5",
              price: "68.60",
              discount_price: "25.80",
              snapped_up: 22,
              picture: require("../../assets/pic/items/panicBuying/20/3.jpg"),
            },
          ],
        },
      ],
      // 推荐商品
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
      // 厂商周图片
      firmPictures: [
        {
          id: 1,
          pictures: [
            {
              id: 1,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/1/1.jpeg"),
            },
            {
              id: 2,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/1/2.jpeg"),
            },
            {
              id: 3,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/1/3.jpg"),
            },
            {
              id: 4,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/1/4.jpeg"),
            },
          ],
        },
        {
          id: 2,
          pictures: [
            {
              id: 1,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/2/1.jpg"),
            },
            {
              id: 2,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/2/2.jpeg"),
            },
            {
              id: 3,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/2/3.jpeg"),
            },
            {
              id: 4,
              url: "#",
              pic_url: require("../../assets/pic/items/panicBuying/firm/2/4.jpeg"),
            },
          ],
        },
      ],
    };
  },
  actions,
  getters,
  mutations,
};
