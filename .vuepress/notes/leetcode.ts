import { definePlumeNotesItemConfig } from "vuepress-theme-plume";

export default definePlumeNotesItemConfig({
  link: "/leetcode/",
  dir: "算法",
  sidebar: [
    {
      dir: "双指针",
      items: [
        "原地合并两个有序数组",
        "移除元素",
        "删除有序数组中的重复项",
        "删除有序数组中的重复项 II",
      ],
    },
    {
      dir: "数组/字符串",
      items: [
        "多数元素",
        "轮转数组",
        "买卖股票的最佳时机",
        "最后一个单词的长度",
      ],
    },
    {
      dir: "贪心",
      items: ["买卖股票的最佳时机II", "跳跃游戏"],
    },
    {
      dir: "链表",
      items: [],
    },
    {
      dir: "二分查找",
      items: ["搜索插入位置", "搜索二维矩阵"],
    },
    {
      dir: "树",
      items: [],
    },
    {
      dir: "栈和队列",
      items: [],
    },
    {
      dir: "哈希表",
      items: [],
    },
    {
      dir: "动态规划",
      items: [],
    },
    {
      dir: "滑动窗口",
      items: [],
    },
    {
      dir: "排序",
      items: [],
    },
  ],
});
