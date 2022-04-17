import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      leftSidebarItem: {
        leftSidebarItem_0: false,
        leftSidebarItem_1: false,
        leftSidebarItem_2: false,
        leftSidebarItem_3: false,
        leftSidebarItem_4: false,
        leftSidebarItem_5: false,
        leftSidebarItem_6: false,
        leftSidebarItem_7: false,
        leftSidebarItem_8: false,
        leftSidebarItem_9: false,
        leftSidebarItem_10: false,
        leftSidebarItem_11: false,
        leftSidebarItem_12: false,
        leftSidebarItem_13: false,
        leftSidebarItem_14: false,
      },
      leftSidebarItemDetail: {
        // 每一行数据：
        // {
        // 1、标题
        //   title: "童书",
        // 2、小链接
        //   links: [
        //     {
        //       name: "", 1.名称
        //       url: "#", 2.链接
        //       mode: "", 3.class类型，red为默认红色，no-sep为没有分界线，red-no-sep为默认红色且无分界线
        //     },
        //   ],
        // },
        Detail_0: [
          {
            title: "排行榜",
            links: [
              {
                name: "图书畅销榜 >>",
                url: "#",
                mode: "red-no-sep",
              },
              {
                name: "新书热卖榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "童书榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "热搜榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "好评榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "飙升榜 >>",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "特价榜 >>",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "童书",
            links: [
              {
                name: "0-2岁",
                url: "#",
              },
              {
                name: "3-6岁",
                url: "#",
                mode: "red",
              },
              {
                name: "7-10岁",
                url: "#",
                mode: "red",
              },
              {
                name: "11-14岁",
                url: "#",
              },
              {
                name: "绘本",
                url: "#",
                mode: "red",
              },
              {
                name: "中国儿童文学",
                url: "#",
              },
              {
                name: "外国儿童文学",
                url: "#",
              },
              {
                name: "科普/百科",
                url: "#",
              },
              {
                name: "婴儿读物",
                url: "#",
              },
              {
                name: "益智游戏",
                url: "#",
              },
              {
                name: "玩具书",
                url: "#",
              },
              {
                name: "动漫/卡通",
                url: "#",
              },
              {
                name: "少儿英语",
                url: "#",
                mode: "no-sep",
              },
              {
                name: "进口儿童书",
                url: "#",
              },
              {
                name: "少儿期刊",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "教育",
            links: [
              {
                name: "中小学用书",
                url: "#",
                mode: "red",
              },
              {
                name: "考试",
                url: "#",
              },
              {
                name: "大中专教材",
                url: "#",
              },
              {
                name: "外语工具书",
                url: "#",
              },
              {
                name: "教师用书",
                url: "#",
              },
              {
                name: "新概念",
                url: "#",
              },
              {
                name: "中小学阅读",
                url: "#",
              },
              {
                name: "英语四级",
                url: "#",
                mode: "red",
              },
              {
                name: "英语六级",
                url: "#",
              },
              {
                name: "考研",
                url: "#",
                mode: "red",
              },
              {
                name: "公务员",
                url: "#",
              },
              {
                name: "教师资格考试",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "文艺",
            links: [
              {
                name: "小说",
                url: "#",
                mode: "red",
              },
              {
                name: "文学",
                url: "#",
              },
              {
                name: "传记",
                url: "#",
              },
              {
                name: "青春文学",
                url: "#",
              },
              {
                name: "动漫/幽默",
                url: "#",
              },
              {
                name: "艺术",
                url: "#",
              },
              {
                name: "摄影",
                url: "#",
              },
              {
                name: "偶像明星",
                url: "#",
              },
              {
                name: "涂色/填色",
                url: "#",
                mode: "no-sep",
              },
            ],
          },
          {
            title: "人文社科",
            links: [
              { name: "哲学宗教", url: "#" },
              { name: "历史", url: "#", mode: "red" },
              { name: "政治军事", url: "#" },
              { name: "文化", url: "#" },
              { name: "社会科学", url: "#" },
              { name: "心理学", url: "#" },
              { name: "古籍", url: "#" },
              { name: "法律", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "励志",
            links: [
              { name: "励志/成功", url: "#", mode: "red" },
              { name: "心灵修养", url: "#" },
              { name: "职场", url: "#" },
              { name: "人生哲学", url: "#" },
              { name: "人际交往", url: "#" },
              { name: "口才/演讲/辩论", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "生活",
            links: [
              { name: "两性", url: "#" },
              { name: "孕期", url: "#" },
              { name: "育儿", url: "#" },
              { name: "亲子家教", url: "#" },
              { name: "保健", url: "#" },
              { name: "运动", url: "#" },
              { name: "休闲", url: "#" },
              { name: "旅游", url: "#" },
              { name: "美食", url: "#", mode: "red" },
              { name: "美妆", url: "#" },
              { name: "手工DIY", url: "#" },
              { name: "家庭家居", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "经管",
            links: [
              { name: "经济", url: "#" },
              { name: "管理", url: "#" },
              { name: "投资理财", url: "#" },
              { name: "股票", url: "#" },
              { name: "金融", url: "#" },
              { name: "市场/销售", url: "#" },
              { name: "会计", url: "#", mode: "red" },
              { name: "互联网", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "科技",
            links: [
              { name: "科普读物", url: "#" },
              { name: "计算机/网络", url: "#" },
              { name: "医学", url: "#" },
              { name: "工业技术", url: "#" },
              { name: "建筑", url: "#" },
              { name: "自然科学", url: "#" },
              { name: "农业/林业", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "当当出版",
            links: [
              { name: "小说", url: "#" },
              { name: "文学", url: "#" },
              { name: "社科", url: "#" },
              { name: "外语", url: "#" },
              { name: "教辅", url: "#" },
              { name: "艺术", url: "#" },
              { name: "童书", url: "#" },
              { name: "青春文学", url: "#" },
              { name: "生活", url: "#" },
              { name: "励志", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "期刊/进口书",
            links: [
              { name: "英文图书", url: "#" },
              { name: "港台图书", url: "#" },
              { name: "日文图书", url: "#" },
              { name: "法文图书", url: "#" },
              { name: "韩文图书", url: "#" },
              { name: "其他语种", url: "#" },
              { name: "杂志", url: "#" },
              { name: "英文原版小说", url: "#" },
              { name: "进口艺术画册", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "音像",
            mode: "no-border",
            links: [
              { name: "音乐", url: "#" },
              { name: "影视", url: "#" },
              { name: "软件", url: "#" },
              { name: "游戏", url: "#" },
              { name: "教育音像", url: "#" },
              { name: "华语流行", url: "#" },
              { name: "儿童音乐", url: "#" },
              { name: "动画片", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_1: [
          {
            title: "阅读器",
            links: [
              { name: "新锐版", url: "#", mode: "red" },
              { name: "Light（高清版）", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "排行榜",
            links: [
              { name: "畅销总榜", url: "#" },
              { name: "新书榜", url: "#" },
              { name: "文艺小说榜", url: "#" },
              { name: "经管励志榜", url: "#" },
              { name: "社科历史榜", url: "#" },
              { name: "科教榜", url: "#" },
              { name: "生活榜", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "特价",
            links: [
              { name: "免费书", url: "#" },
              { name: "特价书", url: "#" },
              { name: "限时抢", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "小说",
            links: [
              { name: "侦探/悬疑/推理", url: "#" },
              { name: "玄幻/惊悚", url: "#" },
              { name: "中国近当代小说", url: "#" },
              { name: "中国古典小说", url: "#" },
              { name: "武侠小说", url: "#" },
              { name: "外国小说", url: "#" },
              { name: "穿越/言情", url: "#" },
              { name: "爱情/情感", url: "#" },
              { name: "影视/娱乐", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "文艺",
            links: [
              { name: "传记", url: "#" },
              { name: "文学评论与鉴赏", url: "#" },
              { name: "随笔", url: "#" },
              { name: "文学作品集", url: "#" },
              { name: "纪实文学", url: "#" },
              { name: "艺术", url: "#" },
              { name: "摄影", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "经管",
            links: [
              { name: "成功/励志", url: "#" },
              { name: "管理", url: "#" },
              { name: "投资理财", url: "#" },
              { name: "经济", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "社科",
            links: [
              { name: "历史", url: "#" },
              { name: "心理学", url: "#" },
              { name: "哲学", url: "#" },
              { name: "政治/军事", url: "#" },
              { name: "社会科学", url: "#" },
              { name: "古籍", url: "#" },
              { name: "法律", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "生活",
            links: [
              { name: "亲子/家教", url: "#" },
              { name: "育儿/早教", url: "#" },
              { name: "两性关系", url: "#" },
              { name: "孕产/胎教", url: "#" },
              { name: "保健/养生", url: "#" },
              { name: "旅游/地图", url: "#" },
              { name: "烹饪/美食", url: "#" },
              { name: "时尚/美妆", url: "#" },
              { name: "手工/DIY", url: "#" },
              { name: "家庭/家居", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "科教/进口书",
            links: [
              { name: "计算机/网络", url: "#" },
              { name: "医学", url: "#" },
              { name: "考试", url: "#" },
              { name: "外语", url: "#" },
              { name: "中小学教辅", url: "#" },
              { name: "大中专教材", url: "#" },
              { name: "工具书", url: "#" },
              { name: "童书", url: "#" },
              { name: "进口书", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "下载app",
            links: [
              { name: "安卓版", url: "#" },
              { name: "iOS版", url: "#", mode: "no-sep" },
            ],
          },
          {
            title: "管理电子书",
            mode: "no-border",
            links: [
              { name: "管理我的书架", url: "#" },
              { name: "查看我的账户", url: "#", mode: "no-sep" },
            ],
          },
        ],
        Detail_2: [],
        Detail_3: [],
        Detail_4: [],
        Detail_5: [],
        Detail_6: [],
        Detail_7: [],
        Detail_8: [],
        Detail_9: [],
        Detail_10: [],
        Detail_11: [],
        Detail_12: [],
        Detail_13: [],
        Detail_14: [],
      },
    };
  },
  actions,
  getters,
  mutations,
};
