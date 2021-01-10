/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // 第一个和之后的比
  let res = [], i = -1, start = 0
  while (++i < nums.length)
  // 判断是否连续
    if (nums[i + 1] - nums[i] !== 1) {
      res.push(nums[start] + (i === start ? '' : '->' + nums[i]))
      start = i + 1
    }
  return res
};
// @lc code=end

