/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 第一步交换对角线两侧的对称元素
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      // 解构进行值的交换
      [matrix[i][j], matrix[n - 1 - j][n - 1 - i]] = [matrix[n - 1 - j][n - 1 - i], matrix[i][j]]
    }
  }
  // 第二步交换第i行和第n-1-i行
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      // 解构进行值的交换
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]]
    }
  }
  return matrix
};
// @lc code=end

