import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      // 地址数据
      addresses: [
        "北京",
        "天津",
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "上海",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "海南",
        "重庆",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃",
        "青海",
        "宁夏",
        "新疆",
        "台湾",
        "香港",
        "澳门",
        "钓鱼岛",
      ],
      // 我的当当
      user_nav_links: [
        {
          name: "银铃铛抵现",
          url: "#",
        },
        {
          name: "我的收藏",
          url: "#",
        },
        {
          name: "我的余额",
          url: "#",
        },
        {
          name: "我的评论",
          url: "#",
        },
        {
          name: "礼券/礼品卡",
          url: "#",
        },
      ],
      // 当当拼团
      group_booking_links: [
        {
          name: "当当拼团",
          url: "#",
        },
      ],
      // 企业采购
      enterprise_links: [
        {
          name: "大宗采购",
          url: "#",
        },
        {
          name: "礼品卡采购",
          url: "#",
        },
        {
          name: "礼品卡激活",
          url: "#",
        },
        {
          name: "礼品卡使用",
          url: "#",
        },
        {
          name: "分销/荐购",
          url: "#",
        },
        {
          name: "礼品卡专区",
          url: "#",
        },
      ],
      // 客户服务
      customer_service_links: [
        {
          name: "帮助中心",
          url: "#",
        },
        {
          name: "自助退换货",
          url: "#",
        },
        {
          name: "自助发票",
          url: "#",
        },
        {
          name: "联系客服",
          url: "#",
        },
        {
          name: "我要投诉",
          url: "#",
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
