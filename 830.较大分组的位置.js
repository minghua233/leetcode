/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let start = 0, i = 0, res = []
  while (++i <= s.length) {
    // 相同异或为0
    if (s.charCodeAt(start) ^ s.charCodeAt(i)) {
      // 找到较大分组
      if (i - start > 2) res.push([start, i - 1])
      // 更新起始位置
      start = i
    }
  }
  return res
};
// @lc code=end

