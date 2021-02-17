/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let a = nums.length;
  let b = nums[0].length;
  let res = []
  let arr = []
  for (let item of nums) {
    arr.push(...item)
  }
  // arr = Array.prototype.concat.apply([], nums)
  if ((a * b) == (r * c)) {
    for (let i = 0; i < r; i++) {
      res.push(arr.splice(0, c))
    }
  } else {
    return nums;
  }
  return res;
};
// @lc code=end

