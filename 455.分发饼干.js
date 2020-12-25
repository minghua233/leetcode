/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 贪心
  // 将饼干和孩子胃口顺序排序
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  // 定义满足胃口孩子的数量
  let count = 0
  // 遍历所有饼干
  for (let i = 0; i < s.length; i++) {
    // 若饼干大小大于孩子胃口，满足的孩子数目+1
    if (s[i] >= g[count]) count++
    // 当所有孩子都满足后，退出循环
    if (count === g.length) return count
  }
  // 返回满足的孩子数量
  return count
};
// @lc code=end

