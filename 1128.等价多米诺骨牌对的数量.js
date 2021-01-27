/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // 创建hashmap统计每类骨牌的出现次数
  let map = new Map()
  let key = 0, value = 0, res = 0, count = 0
  for (let dominoe of dominoes) {
    // 较小的数作为十位数，较大的数作为个位数
    key = Math.min(dominoe[0], dominoe[1]) * 10 + Math.max(dominoe[0], dominoe[1])
    // 出现的次数
    value = map.get(key) || 0
    // 存入hashmap
    map.set(key, value + 1)
  }
  for (let myKey of map.keys()) {
    // 获取骨牌出现次数
    count = map.get(myKey)
    // 等差数列求和公式计算对数
    if (count >= 2) res += (count - 1) + (count - 1) * (count - 2) / 2
  }
  return res
};
// @lc code=end

