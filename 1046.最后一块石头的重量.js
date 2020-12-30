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
  stones.sort((a, b) => a - b)
  if (stones.length > 1) {
    const dif = stones.pop() - stones.pop()
    if (dif) stones.push(dif)
    return lastStoneWeight(stones)
  }
  return stones.length ? stones[0] : 0
};
// @lc code=end

