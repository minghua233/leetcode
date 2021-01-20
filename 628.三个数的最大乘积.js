/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let length = nums.length
  let sortedNums = nums.sort((a, b) => a - b)
  let res1 = sortedNums[length - 1] * sortedNums[length - 2] * sortedNums[length - 3],
    res2 = sortedNums[0] * sortedNums[1] * sortedNums[length - 1]
  return res1 > res2 ? res1 : res2
};
// @lc code=end

