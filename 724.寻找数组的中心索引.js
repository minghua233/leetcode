/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0, len = nums.length
  nums.forEach(num => sum += num)
  let leftSum = 0
  for (i = 0; i < len; i++) {
    if ((sum - nums[i]) - leftSum == leftSum) return i
    else leftSum += nums[i]
  }
  return -1
};
// @lc code=end

