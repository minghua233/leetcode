/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let sumA = 0, sumB = 0
  let set = new Set()
  for (let num of B) sumB += num
  for (let num of A) {
    sumA += num
    set.add(num)
  }
  for (let num of B) {
    if (set.has((sumA - sumB + 2 * num) / 2)) {
      return [(sumA - sumB + 2 * num) / 2, num]
    }
  }
  return []
};
// @lc code=end

