/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // maxQ为单调递减队列，头部为最大值；minQ为单调递增队列，头部为最小值。
  const n = nums.length;
  const maxQueue = [];
  const minQueue = [];
  let left = 0;
  let res = 0;
  for (let right = 0; right < n; right++) {
    // 新元素入队时，保持maxQ单调递减
    while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
      maxQueue.pop();
    }
    maxQueue.push(nums[right]);
    // 新元素入队时，保持minQ单调递增
    while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
      minQueue.pop();
    }
    minQueue.push(nums[right]);
    // 比较队列的头部元素，大于limit时窗口需要右移
    if (Math.abs(maxQueue[0] - minQueue[0]) > limit) {
      // 如果当前队列的头部元素被移出窗口，则出队
      if (nums[left] === maxQueue[0]) {
        maxQueue.shift();
      }
      if (nums[left] === minQueue[0]) {
        minQueue.shift();
      }
      left++;
    }
    else {
      //res = Math.max(res, right - left + 1);
      res = res = right - left + 1;
    }
  }
  return res;
};
// @lc code=end

