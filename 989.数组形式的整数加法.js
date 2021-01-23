/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let ans = [];
  for (let i = A.length - 1; i >= 0 || K > 0; i--, K = Math.floor(K / 10)) {
    // 每一次都把K的最后一位数去掉
    if (i >= 0) {
      K += A[i];
    }
    ans.push(K % 10); // 把K的最后一位append到answer数组里
  }
  ans.reverse()
  return ans;

};
// @lc code=end

