/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  // 若传入的矩阵为0，返回0
  if (matrix.length === 0) return 0
  // 定义i为传入矩阵的行数
  let i = matrix.length,
    // 定义一个与传入矩阵相等的新矩阵
    newMartix = Array.from({ length: i }, () => new Array(matrix[0].length)),
    // 定义最大矩形
    maxMatrix = 0,
    // 矩阵的列的变量
    j,
    // 定义连续1的个数
    count
  // console.log(newMartix);
  // 遍历矩阵，统计每行从左起连续1数量
  while (i--)
    for (j = 0, count = 0; j < matrix[0].length; j++)
      // 将每行连续1的个数装入新矩阵中
      newMartix[i][j] = matrix[i][j] === '1' ? ++count : count = 0
  // console.log(newMartix);
  while (j--)
    for (i = matrix.length; i--;)
      // 列的最大值为200,从最后一行从右往左遍历矩阵
      for (let k = i + 1, cols = 200, height = 0, temp; k-- && newMartix[k][j];) {
        // 获得实际的列数
        if (newMartix[k][j] < cols) cols = newMartix[k][j]
        // 获得当前点为右下角的矩形最大面积的最大值即为解
        if ((temp = cols * ++height) > maxMatrix) maxMatrix = temp
      }
  // 返回最大矩形
  return maxMatrix
};
// @lc code=end

