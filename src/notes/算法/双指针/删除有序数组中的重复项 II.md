---
title: 删除有序数组中的重复项 II
author: 树懒小姐
createTime: 2024/02/18 17:35:25
permalink: /note/leetcode/y8xgrawf/
---

### [题目：删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150)

给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
返回 k 。

示例一：

> 输入：nums = [1,1,2]
>
> 输出：2, nums = [1,2,_]
>
> 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

### 方法一：快慢指针

使用快(i)慢(slow)指针，快指针用于遍历整个数组，慢指针指向遍历过程中排列好的非重复数字中最后一个数字的索引。

- 由于要比较当前索引和下一个索引处的值，所以遍历的边界为 nums.length - 1；
- 数组为非严格递增排列数组，即可以看作是一个升序数组；
- 如果快指针 i 处的值不等于 i+1 的值,说明 i 处的值是最后一个
- 如果快指针处的值大于慢指针处的值，又由于数组为升序，则说明这个数没有出现过，将慢指针的前一位的值与快指针的值进行交换，更新快慢指针。

```ts
function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  if (len < 2) {
    return len;
  }
  // 数组有序排列
  // slow指针的前面的所有数最多都只出现过两次
  // fast指针用来遍历数组, 当fast指针的值与slow-2处的值相等， 则说明这个值已经出现过两次了
  // 则继续向前遍历; 如果不相等，说明还没有出现过或者只出现过一次,
  // 则可以将其与slow指针进行交换
  let slow = 2;
  let fast = 2;
  while (fast < len) {
    if (nums[slow - 2] !== nums[fast]) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
    fast++;
  }
  return slow;
}
```

### 方法二：通用解法：数据有序，相同元素保留 k 位

- 由于是保留 k 个相同数字，对于前 k 个数字，我们可以直接保留
- 对于后面的任意数字，能够保留的前提是：与当前写入的位置前面的第 k 个元素进行比较，不相同则保留

举个例子，我们令 k=2，假设有如下样例

[1,1,1,1,1,1,2,2,2,2,2,2,3]

首先我们先让前 2 位直接保留，得到 1,1
对后面的每一位进行继续遍历，能够保留的前提是与当前位置的前面 k 个元素不同（答案中的第一个 1），因此我们会跳过剩余的 1，将第一个 2 追加，得到 1,1,2
继续这个过程，这时候是和答案中的第 2 个 1 进行对比，因此可以得到 1,1,2,2
这时候和答案中的第 1 个 2 比较，只有与其不同的元素能追加到答案，因此剩余的 2 被跳过，3 被追加到答案：1,1,2,2,3

```ts
function removeDuplicates(nums: number[]): number {
  const k = 2;
  if (nums.length <= k) return nums.length;

  function solve(k: number) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
      if (slow < k || nums[slow - k] !== nums[i]) {
        nums[slow] = nums[i];
        slow++;
      }
    }
    return slow;
  }

  return solve(2);
}
```

