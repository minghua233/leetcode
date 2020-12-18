/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
};

// @lc code=end

