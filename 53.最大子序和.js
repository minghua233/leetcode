/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态转移方程：sum[i] = max{sum[i-1]+a[i],a[i]}   
// 其中(sum[i]记录以a[i]为子序列末端的最大序子列连续和)
var maxSubArray = function (nums) {
  let max_end = nums[0]
  let res = nums[0]
  if (!nums.length) return
  for (let i = 1; i < nums.length; i++) {
    max_end = Math.max(max_end + nums[i], nums[i])
    res = Math.max(max_end, res)
  }
  return res
};
// @lc code=end

