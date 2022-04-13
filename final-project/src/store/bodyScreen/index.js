import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      // 首屏左侧链接
      left_sidebar_links: [
        [
          // 标题链接 start
          [
            {
              name: "图书",
              url: "#",
            },
            {
              name: "童书",
              url: "#",
            },
          ],
          // 标题链接 end
          // 详情链接 start
          [
            [
              [
                // 标题
                "排行榜",
                // 链接
                [
                  {
                    name: "图书畅销榜  >>",
                    url: "#",
                  },
                  {
                    name: "新书热卖榜单  >>",
                    url: "#",
                  },
                ],
              ],
              [
                "童书",
                [
                  {
                    name: "图书畅销榜  >>",
                    url: "#",
                  },
                  {
                    name: "新书热卖榜单  >>",
                    url: "#",
                  },
                ],
              ],
            ],
            // 主要分区（special) start
            [
              {
                name: "图书馆",
                url: "#",
              },
              {
                name: "童书馆",
                url: "#",
              },
            ],
            // 主要分区（special) end
          ],
          // 详情链接 end
          // logo start
          [
            {
              img: "",
              url: "#",
            },
          ],
          // logo end
        ],
      ],
    };
  },
  actions,
  getters,
  mutations,
};
