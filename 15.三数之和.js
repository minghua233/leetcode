/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1, k = len - 1
    if (nums[i] > 0) break
    // 跳过目标值相等
    if (i > 0 && nums[i] == nums[i - 1]) continue
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        // 左指针偏小
        j++
        // 跳过左指针重复项
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 右指针偏大
        k--
        // 跳过右指针重复项
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  return res
};
// @lc code=end

