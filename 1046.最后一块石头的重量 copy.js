/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0]
  function crush(x, y) {
    if (x == y) {
      stones.splice(stones.length - 2, 2)
    } else {
      stones.splice(stones.length - 2, 2)
      stones.push(y - x)
    }
  }
  while (stones.length > 1) {
    let i = stones.length - 1
    stones.sort((a, b) => a - b)
    crush(stones[i - 1], stones[i])
    i--
    if (stones.length === 1) return stones[0]
  }
  return 0
};
// @lc code=end

