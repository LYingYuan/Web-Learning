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
          introduction:
            "名师亲力指导及视频讲解，同步考点高分训练答案详解，让孩子读写快人一步！",
          publish: "湖南教育出版社",
          publish_time: "2021年12月 ",
          discount: "3.77折",
        },
        {
          id: "6",
          name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
          author: "任泽平 曹志楠",
          introduction:
            "著名经济学家任泽平重磅新作！ 全景展现世界百年金融商业模式的变迁， 深入解析金融巨头兴衰成败的底层逻辑。 江南春、樊登、吴晓波、梁建章、秦朔、刘润、管清友、郝景芳联袂推荐！",
          picture: require("../../assets/pic/books/1/2.jpg"),
          publish: "中译出版社（原中国对外翻译出版公司）",
          publish_time: "2022年04月 ",
          price: "79.00",
          discount: "7.5折",
          discount_price: "59.20",
        },
        {
          id: "7",
          name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
          author: "汤波、史晓宁、顾璐琰",
          introduction:
            "中国航天基金会和中科院空天飞行科技中心联合推荐！全长2.3米，可拉伸成一个完整的空间站模型。创新立式全景空间站，近百知识点，多种玩法带来沉浸式阅读体验，附赠：载人飞船手工包、太空护照。",
          picture: require("../../assets/pic/books/1/3.jpg"),
          publish: "化学工业出版社",
          publish_time: "2022年02月 ",
          price: "438.00",
          discount: "6.72折",
          discount_price: "294.30",
        },
        {
          id: "8",
          name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
          author: "加西亚·马尔克斯",
          introduction:
            "加西亚·马尔克斯王炸套装：四本经典代表作一次拥有，从这里进入“加西亚·马尔克斯宇宙”。知名设计师特别设计，精美套盒典藏，附赠3款珍藏纪念版加西亚·马尔克斯金句胶带",
          picture: require("../../assets/pic/books/1/4.jpg"),
          publish: "南海出版公司",
          publish_time: "2021年10月",
          price: "198.50",
          discount: "99.20",
          discount_price: "5折",
        },
        {
          id: "9",
          name: "六层楼先生 怀孕呵护指南 第十一诊室",
          author: "六层楼先生",
          introduction:
            "女性健康科普大V、第十一诊室创始人六层楼先生，继《女生呵护指南》后的全新作品；孕前准备、孕期健康、分娩指导、产后恢复；关注孕产健康，缓解孕期焦虑，做足怀孕的功课，一起迎接新生命的到来",
          picture: require("../../assets/pic/books/1/5.jpg"),
          publish: "浙江科学技术出版社",
          publish_time: "2021年07月 ",
          price: "98.00",
          discount: "5折",
          discount_price: "49.00",
        },
        {
          id: "10",
          name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
          author: "陈磊·半小时漫画团队",
          introduction:
            "限量版春节礼盒，赠送好运红包、趣味剪纸、历史人物闪卡。全网粉丝2000万漫画式科普开创者陈磊（混子哥）福利新作！在哈哈大笑中通晓五千年中国史，搞懂中国传统节日的真正来历！读客熊猫君出品",
          picture: require("../../assets/pic/books/1/6.jpg"),
          publish: "海南出版社",
          publish_time: "2021年11月 ",
          price: "259.40",
          discount: "5折",
          discount_price: "129.70",
        },
        {
          id: "11",
          name: "效率人生（告诉你如何迅速抵达人生的目标）",
          author: "饭爷",
          introduction:
            "了解事物的本质，走上人生的快捷通道。洞悉高效人生的底层逻辑，直达人生目标。",
          picture: require("../../assets/pic/books/1/7.jpg"),
          publish: "北京联合出版有限公司",
          publish_time: "2021年08月 ",
          price: "48.00",
          discount: "5折",
          discount_price: "24.00",
        },
        {
          id: "?",
          name: "",
          author: "",
          introduction: "",
          picture: require("../../assets/pic/books/1/7.jpg"),
          publish: "",
          publish_time: "",
          price: "",
          discount: "",
          discount_price: "",
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
      // 图书 · 电子书
      books: [
        {
          index: 1,
          left_pic: {
            src: require("../../assets/pic/books/1/left.jpg"),
            url: "#",
          },
          left_links: [
            { name: "童书", url: "#" },
            { name: "中小学教辅", url: "#" },
            { name: "外语", url: "#" },
            { name: "考试", url: "#" },
            { name: "小说", url: "#" },
            { name: "文学", url: "#" },
            { name: "青春文学", url: "#" },
            { name: "成功/励志", url: "#" },
            { name: "管理", url: "#" },
            { name: "历史", url: "#" },
            { name: "亲子/家教", url: "#" },
            { name: "全部分类>", url: "#" },
          ],
          right_first: {
            url: "#",
            src: require("../../assets/pic/books/1/1/1.jpg"),
          },
          right_links: [
            {
              id: "6",
              src: require("../../assets/pic/books/1/2.jpg"),
              name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
              price: "79.00",
              discount_price: "59.20",
            },
            {
              id: "7",
              src: require("../../assets/pic/books/1/3.jpg"),
              name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
              price: "438.00",
              discount_price: "294.30",
            },
            {
              id: "8",
              name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
              src: require("../../assets/pic/books/1/4.jpg"),
              price: "198.50",
              discount_price: "5折",
            },
            {
              id: "9",
              name: "六层楼先生 怀孕呵护指南 第十一诊室",
              src: require("../../assets/pic/books/1/5.jpg"),
              price: "98.00",
              discount_price: "49.00",
            },
            {
              id: "10",
              name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
              src: require("../../assets/pic/books/1/6.jpg"),
              price: "259.40",
              discount_price: "129.70",
            },
            {
              id: "11",
              name: "效率人生（告诉你如何迅速抵达人生的目标）",
              src: require("../../assets/pic/books/1/7.jpg"),
              price: "48.00",
              discount_price: "24.00",
            },
          ],
          has_carousel: false,
        },
        {
          index: 2,
          left_pic: {
            src: require("../../assets/pic/books/1/left.jpg"),
            url: "#",
          },
          left_links: [
            { name: "童书", url: "#" },
            { name: "中小学教辅", url: "#" },
            { name: "外语", url: "#" },
            { name: "考试", url: "#" },
            { name: "小说", url: "#" },
            { name: "文学", url: "#" },
            { name: "青春文学", url: "#" },
            { name: "成功/励志", url: "#" },
            { name: "管理", url: "#" },
            { name: "历史", url: "#" },
            { name: "亲子/家教", url: "#" },
            { name: "全部分类>", url: "#" },
          ],
          right_first: {
            src: require("../../assets/pic/books/2/1/1.jpg"),
            url: "#",
          },
          right_links: [
            {
              id: "6",
              src: require("../../assets/pic/books/1/2.jpg"),
              name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
              price: "79.00",
              discount_price: "59.20",
            },
            {
              id: "7",
              src: require("../../assets/pic/books/1/3.jpg"),
              name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
              price: "438.00",
              discount_price: "294.30",
            },
            {
              id: "8",
              name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
              src: require("../../assets/pic/books/1/4.jpg"),
              price: "198.50",
              discount_price: "5折",
            },
            {
              id: "9",
              name: "六层楼先生 怀孕呵护指南 第十一诊室",
              src: require("../../assets/pic/books/1/5.jpg"),
              price: "98.00",
              discount_price: "49.00",
            },
            {
              id: "10",
              name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
              src: require("../../assets/pic/books/1/6.jpg"),
              price: "259.40",
              discount_price: "129.70",
            },
            {
              id: "11",
              name: "效率人生（告诉你如何迅速抵达人生的目标）",
              src: require("../../assets/pic/books/1/7.jpg"),
              price: "48.00",
              discount_price: "24.00",
            },
          ],
          has_carousel: false,
        },
        {
          index: 3,
          left_pic: {
            src: require("../../assets/pic/books/3/left.jpg"),
            url: "#",
          },
          left_links: [
            { name: "童书", url: "#" },
            { name: "中小学教辅", url: "#" },
            { name: "外语", url: "#" },
            { name: "考试", url: "#" },
            { name: "小说", url: "#" },
            { name: "文学", url: "#" },
            { name: "青春文学", url: "#" },
            { name: "成功/励志", url: "#" },
            { name: "管理", url: "#" },
            { name: "历史", url: "#" },
            { name: "亲子/家教", url: "#" },
            { name: "全部分类>", url: "#" },
          ],
          right_first: {
            url: "#",
            src: require("../../assets/pic/books/3/1/1.jpg"),
          },
          right_links: [
            {
              id: "6",
              src: require("../../assets/pic/books/1/2.jpg"),
              name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
              price: "79.00",
              discount_price: "59.20",
            },
            {
              id: "7",
              src: require("../../assets/pic/books/1/3.jpg"),
              name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
              price: "438.00",
              discount_price: "294.30",
            },
            {
              id: "8",
              name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
              src: require("../../assets/pic/books/1/4.jpg"),
              price: "198.50",
              discount_price: "5折",
            },
            {
              id: "9",
              name: "六层楼先生 怀孕呵护指南 第十一诊室",
              src: require("../../assets/pic/books/1/5.jpg"),
              price: "98.00",
              discount_price: "49.00",
            },
            {
              id: "10",
              name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
              src: require("../../assets/pic/books/1/6.jpg"),
              price: "259.40",
              discount_price: "129.70",
            },
            {
              id: "11",
              name: "效率人生（告诉你如何迅速抵达人生的目标）",
              src: require("../../assets/pic/books/1/7.jpg"),
              price: "48.00",
              discount_price: "24.00",
            },
          ],
          has_carousel: false,
        },
        {
          index: 4,
          left_pic: {
            src: require("../../assets/pic/books/4/left.jpg"),
            url: "#",
          },
          left_links: [
            { name: "网文", url: "#" },
            { name: "小说", url: "#" },
            { name: "经管励志", url: "#" },
            { name: "文艺", url: "#" },
            { name: "社科", url: "#" },
            { name: "生活", url: "#" },
            { name: "新书榜", url: "#" },
            { name: "畅销榜", url: "#" },
            { name: "查看所有", url: "#" },
          ],
          right_first: [
            {
              id: 1,
              url: "#",
              src: require("../../assets/pic/books/4/1/1.jpg"),
            },
            {
              id: 2,
              url: "#",
              src: require("../../assets/pic/books/4/1/2.jpg"),
            },
            {
              id: 3,
              url: "#",
              src: require("../../assets/pic/books/4/1/3.jpg"),
            },
          ],
          right_links: [
            {
              id: "6",
              src: require("../../assets/pic/books/1/2.jpg"),
              name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
              price: "79.00",
              discount_price: "59.20",
            },
            {
              id: "7",
              src: require("../../assets/pic/books/1/3.jpg"),
              name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
              price: "438.00",
              discount_price: "294.30",
            },
            {
              id: "8",
              name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
              src: require("../../assets/pic/books/1/4.jpg"),
              price: "198.50",
              discount_price: "5折",
            },
            {
              id: "9",
              name: "六层楼先生 怀孕呵护指南 第十一诊室",
              src: require("../../assets/pic/books/1/5.jpg"),
              price: "98.00",
              discount_price: "49.00",
            },
            {
              id: "10",
              name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
              src: require("../../assets/pic/books/1/6.jpg"),
              price: "259.40",
              discount_price: "129.70",
            },
            {
              id: "11",
              name: "效率人生（告诉你如何迅速抵达人生的目标）",
              src: require("../../assets/pic/books/1/7.jpg"),
              price: "48.00",
              discount_price: "24.00",
            },
          ],
          has_carousel: true,
        },
      ],
      // 图书排行榜
      ranking_lists: [
        {
          index: 1,
          hover_ranking: "1",
          books: [
            {
              ranking: "1",
              ranking_mode: "red-bold",
              id: "1",
              name: "长短经（又名《反经》，全注全译全",
              picture: require("../../assets/pic/items/recommendations/1.jpg"),
              introduction:
                "职场、官场、商场智慧修炼之经典，*、乾隆、南怀瑾等一致推崇，比《孙子兵法》更实用，比《资治通鉴》更精彩",
            },
            {
              ranking: "2",
              ranking_mode: "red",
              name: "活着（余华代表作，精装，易烊千玺推荐阅读。当当专享印签藏书票+限量赠珍藏复刻手稿）",
              id: "2",
              picture: require("../../assets/pic/items/recommendations/2.jpg"),
              introduction:
                "余华代表作，DU家授权正版。限量赠·珍藏复刻手稿。人是为了活着本身而活着的，而不是为了活着之外的任何事物而活着。",
            },
            {
              ranking: "3",
              ranking_mode: "red",
              name: "儿童观察力贴纸书全6册 贴纸3-4-6岁儿童智力潜能开发手工亲子互动游戏玩具思维益智书观察力+记忆力+数字联想+视觉记忆",
              id: "3",
              picture: require("../../assets/pic/items/panicBuying/20/1.jpg"),
              introduction:
                "专为3-6岁儿童设计智力开发潜能手工书，开启聪明大脑，挑战超强思维有助于提升孩子专注力、观察力、想象力以及记忆力。",
            },
            {
              ranking: "4",
              ranking_mode: "gray",
              name: "中华国学传世经典一山海经（套装全6册）",
              id: "4",
              picture: require("../../assets/pic/items/panicBuying/20/2.jpg"),
              introduction: "",
            },
            {
              ranking: "5",
              ranking_mode: "gray",
              name: "小学生4年级下册开心同步作文+阅读理解与答题模板 共2册 四年级下册 2022春人教RJ版教材 同步作文写作指导 课内课外阅读理解强化训练 开",
              id: "5",
              picture: require("../../assets/pic/items/panicBuying/20/3.jpg"),
              introduction:
                "名师亲力指导及视频讲解，同步考点高分训练答案详解，让孩子读写快人一步！",
            },
            {
              ranking: "6",
              ranking_mode: "gray",
              id: "6",
              name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
              introduction:
                "著名经济学家任泽平重磅新作！ 全景展现世界百年金融商业模式的变迁， 深入解析金融巨头兴衰成败的底层逻辑。 江南春、樊登、吴晓波、梁建章、秦朔、刘润、管清友、郝景芳联袂推荐！",
              picture: require("../../assets/pic/books/1/2.jpg"),
            },
            {
              ranking: "7",
              ranking_mode: "gray",
              id: "7",
              name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
              introduction:
                "中国航天基金会和中科院空天飞行科技中心联合推荐！全长2.3米，可拉伸成一个完整的空间站模型。创新立式全景空间站，近百知识点，多种玩法带来沉浸式阅读体验，附赠：载人飞船手工包、太空护照。",
              picture: require("../../assets/pic/books/1/3.jpg"),
            },
            {
              ranking: "8",
              ranking_mode: "gray",
              id: "8",
              name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
              introduction:
                "加西亚·马尔克斯王炸套装：四本经典代表作一次拥有，从这里进入“加西亚·马尔克斯宇宙”。知名设计师特别设计，精美套盒典藏，附赠3款珍藏纪念版加西亚·马尔克斯金句胶带",
              picture: require("../../assets/pic/books/1/4.jpg"),
            },
            {
              ranking: "9",
              ranking_mode: "gray",
              id: "9",
              name: "六层楼先生 怀孕呵护指南 第十一诊室",
              introduction:
                "女性健康科普大V、第十一诊室创始人六层楼先生，继《女生呵护指南》后的全新作品；孕前准备、孕期健康、分娩指导、产后恢复；关注孕产健康，缓解孕期焦虑，做足怀孕的功课，一起迎接新生命的到来",
              picture: require("../../assets/pic/books/1/5.jpg"),
            },
            {
              ranking: "10",
              ranking_mode: "gray",
              id: "10",
              name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
              introduction:
                "限量版春节礼盒，赠送好运红包、趣味剪纸、历史人物闪卡。全网粉丝2000万漫画式科普开创者陈磊（混子哥）福利新作！在哈哈大笑中通晓五千年中国史，搞懂中国传统节日的真正来历！读客熊猫君出品",
              picture: require("../../assets/pic/books/1/6.jpg"),
            },
          ],
        },
        {
          index: 2,
          hover_ranking: "1",
          books: [
            {
              ranking: "1",
              ranking_mode: "red-bold",
              id: "6",
              name: "金融模式：深入解析金融巨头兴衰成败的底层逻辑",
              introduction:
                "著名经济学家任泽平重磅新作！ 全景展现世界百年金融商业模式的变迁， 深入解析金融巨头兴衰成败的底层逻辑。 江南春、樊登、吴晓波、梁建章、秦朔、刘润、管清友、郝景芳联袂推荐！",
              picture: require("../../assets/pic/books/1/2.jpg"),
            },
            {
              ranking: "2",
              ranking_mode: "red",
              id: "7",
              name: "空间站全景立体书：繁星作伴好还乡【天宫课堂】送给孩子的礼物！中国航天科学家原创！能变身2.3米长的空间站模型，多学科融合，航天百科",
              introduction:
                "中国航天基金会和中科院空天飞行科技中心联合推荐！全长2.3米，可拉伸成一个完整的空间站模型。创新立式全景空间站，近百知识点，多种玩法带来沉浸式阅读体验，附赠：载人飞船手工包、太空护照。",
              picture: require("../../assets/pic/books/1/3.jpg"),
            },
            {
              ranking: "3",
              ranking_mode: "red",
              id: "8",
              name: "百年孤独1000万册纪念套装（精美套盒典藏版，赠送3款马尔克斯金句胶带）",
              introduction:
                "加西亚·马尔克斯王炸套装：四本经典代表作一次拥有，从这里进入“加西亚·马尔克斯宇宙”。知名设计师特别设计，精美套盒典藏，附赠3款珍藏纪念版加西亚·马尔克斯金句胶带",
              picture: require("../../assets/pic/books/1/4.jpg"),
            },
            {
              ranking: "4",
              ranking_mode: "gray",
              id: "9",
              name: "六层楼先生 怀孕呵护指南 第十一诊室",
              introduction:
                "女性健康科普大V、第十一诊室创始人六层楼先生，继《女生呵护指南》后的全新作品；孕前准备、孕期健康、分娩指导、产后恢复；关注孕产健康，缓解孕期焦虑，做足怀孕的功课，一起迎接新生命的到来",
              picture: require("../../assets/pic/books/1/5.jpg"),
            },
            {
              ranking: "5",
              ranking_mode: "gray",
              id: "10",
              name: "半小时漫画中国史（春节礼盒限量版）（过年送孩子半小时漫画，看得笑哈哈，来年当学霸！）（中国史1-5完结＋传统节日，共6册）",
              introduction:
                "限量版春节礼盒，赠送好运红包、趣味剪纸、历史人物闪卡。全网粉丝2000万漫画式科普开创者陈磊（混子哥）福利新作！在哈哈大笑中通晓五千年中国史，搞懂中国传统节日的真正来历！读客熊猫君出品",
              picture: require("../../assets/pic/books/1/6.jpg"),
            },
            {
              ranking: "6",
              ranking_mode: "gray",
              id: "1",
              name: "长短经（又名《反经》，全注全译全",
              picture: require("../../assets/pic/items/recommendations/1.jpg"),
              introduction:
                "职场、官场、商场智慧修炼之经典，*、乾隆、南怀瑾等一致推崇，比《孙子兵法》更实用，比《资治通鉴》更精彩",
            },
            {
              ranking: "7",
              ranking_mode: "gray",
              name: "活着（余华代表作，精装，易烊千玺推荐阅读。当当专享印签藏书票+限量赠珍藏复刻手稿）",
              id: "2",
              picture: require("../../assets/pic/items/recommendations/2.jpg"),
              introduction:
                "余华代表作，DU家授权正版。限量赠·珍藏复刻手稿。人是为了活着本身而活着的，而不是为了活着之外的任何事物而活着。",
            },
            {
              ranking: "8",
              ranking_mode: "gray",
              name: "儿童观察力贴纸书全6册 贴纸3-4-6岁儿童智力潜能开发手工亲子互动游戏玩具思维益智书观察力+记忆力+数字联想+视觉记忆",
              id: "3",
              picture: require("../../assets/pic/items/panicBuying/20/1.jpg"),
              introduction:
                "专为3-6岁儿童设计智力开发潜能手工书，开启聪明大脑，挑战超强思维有助于提升孩子专注力、观察力、想象力以及记忆力。",
            },
            {
              ranking: "9",
              ranking_mode: "gray",
              name: "中华国学传世经典一山海经（套装全6册）",
              id: "4",
              picture: require("../../assets/pic/items/panicBuying/20/2.jpg"),
              introduction: "",
            },
            {
              ranking: "10",
              ranking_mode: "gray",
              name: "小学生4年级下册开心同步作文+阅读理解与答题模板 共2册 四年级下册 2022春人教RJ版教材 同步作文写作指导 课内课外阅读理解强化训练 开",
              id: "5",
              picture: require("../../assets/pic/items/panicBuying/20/3.jpg"),
              introduction:
                "名师亲力指导及视频讲解，同步考点高分训练答案详解，让孩子读写快人一步！",
            },
          ],
        },
      ],
      // 服装
      clothes_nav: [
        { name: "童装", url: "#" },
        { name: "童鞋", url: "#" },
        { name: "婴儿服饰", url: "#" },
        { name: "童装T恤", url: "#" },
        { name: "童装裤子", url: "#" },
        { name: "女装", url: "#" },
        { name: "连衣裙", url: "#" },
        { name: "衬衫女", url: "#" },
        { name: "女士裤装", url: "#" },
        { name: "跑步鞋", url: "#" },
        { name: "运动服装", url: "#" },
        { name: "户外服饰", url: "#" },
        { name: "男士T恤", url: "#" },
        { name: "男士牛仔裤", url: "#" },
        { name: "男士外套", url: "#" },
        { name: "凉鞋", url: "#" },
        { name: "太阳镜", url: "#" },
        { name: "手表", url: "#" },
        { name: "内衣袜品", url: "#" },
      ],
      // 服装logos
      clothes_logo_pages: [
        {
          index: 1,
          logos: [
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/1.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/2.png"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/3.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/4.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/5.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/6.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/7.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/8.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/9.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/10.jpg"),
            },
          ],
        },
        {
          index: 2,
          logos: [
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/3.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/8.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/1.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/2.png"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/9.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/10.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/4.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/5.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/6.jpg"),
            },
            {
              url: "#",
              src: require("../../assets/pic/clothes/logos/1/7.jpg"),
            },
          ],
        },
      ],
      // 服装pages
      clothes_pages: [
        {
          index: 1,
          carousel: [
            {
              id: 1,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/1/1.jpg"),
            },
            {
              id: 2,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/1/2.jpg"),
            },
          ],
          others: [
            {
              id: 1,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/2.jpg"),
            },
            {
              id: 2,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/3.jpg"),
            },
            {
              id: 3,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/4.jpg"),
            },
            {
              id: 4,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/5.jpg"),
            },
            {
              id: 5,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/6.jpg"),
            },
            {
              id: 6,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/7.jpg"),
            },
            {
              id: 7,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/8.jpg"),
            },
            {
              id: 8,
              url: "#",
              src: require("../../assets/pic/clothes/pages/1/9.jpg"),
            },
          ],
        },
        {
          index: 2,
          carousel: [
            {
              id: 1,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/1/1.jpg"),
            },
            {
              id: 2,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/1/2.jpg"),
            },
          ],
          others: [
            {
              id: 1,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/2.jpg"),
            },
            {
              id: 2,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/3.jpg"),
            },
            {
              id: 3,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/4.jpg"),
            },
            {
              id: 4,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/5.jpg"),
            },
            {
              id: 5,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/6.jpg"),
            },
            {
              id: 6,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/7.jpg"),
            },
            {
              id: 7,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/8.jpg"),
            },
            {
              id: 8,
              url: "#",
              src: require("../../assets/pic/clothes/pages/2/9.jpg"),
            },
          ],
        },
      ],
      home_goods: {
        // 标题
        title: "日用百货",
        // nav
        nav: [
          {
            name: "滴露",
            subtitle: "旗舰店",
            url: "#",
          },
          {
            name: "水星家纺",
            subtitle: "旗舰店",
            url: "#",
          },
          {
            name: "戴森",
            subtitle: "旗舰店",
            url: "#",
          },
          {
            name: "碧然德",
            subtitle: "旗舰店",
            url: "#",
          },
          {
            name: "蕉下",
            subtitle: "旗舰店",
            url: "#",
          },
        ],
        // 内容
        first_content: {
          src: require("../../assets/pic/goods/1.jpg"),
          url: "#",
        },
        contents: [
          {
            src: require("../../assets/pic/goods/2.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/3.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/4.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/5.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/6.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/7.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/8.jpg"),
            url: "#",
          },
          {
            src: require("../../assets/pic/goods/9.jpg"),
            url: "#",
          },

        ],
        // 日用百货logos
        logos: [
          {
            index: 1,
            src: require("../../assets/pic/goods/logos/1.jpg"),
            url: "#",
          },
          {
            index: 2,
            src: require("../../assets/pic/goods/logos/2.png"),
            url: "#",
          },
          {
            index: 3,
            src: require("../../assets/pic/goods/logos/3.png"),
            url: "#",
          },
          {
            index: 4,
            src: require("../../assets/pic/goods/logos/4.png"),
            url: "#",
          },
          {
            index: 5,
            src: require("../../assets/pic/goods/logos/5.png"),
            url: "#",
          },
          {
            index: 6,
            src: require("../../assets/pic/goods/logos/6.jpg"),
            url: "#",
          },
          {
            index: 7,
            src: require("../../assets/pic/goods/logos/7.png"),
            url: "#",
          },
          {
            index: 8,
            src: require("../../assets/pic/goods/logos/8.png"),
            url: "#",
          },
          {
            index: 9,
            src: require("../../assets/pic/goods/logos/9.png"),
            url: "#",
          },
          {
            index: 10,
            src: require("../../assets/pic/goods/logos/10.jpg"),
            url: "#",
          },
        ],
      },
    };
  },
  actions,
  getters,
  mutations,
};
