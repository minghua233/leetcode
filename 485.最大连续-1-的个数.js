/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0, res = 0
  while (nums.length) {
    if (nums.shift() == 1) {
      count++
      if (count > res) res = count
    } else count = 0
  }
  return res
};
// @lc code=end

