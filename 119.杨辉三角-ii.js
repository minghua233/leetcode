/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = Array(rowIndex + 1)
  let cur = 1
  for (let i = 0; i <= rowIndex; i++) {
    res[i] = cur
    cur = cur * (rowIndex - i) / (i + 1)
  }
  return res
};
// @lc code=end

