/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0 || flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true
  let i = flowerbed.indexOf(0), count = 0
  if (i === -1) return false
  while (i !== -1) {
    if (i === 0 && flowerbed[i + 1] === 0 || i === flowerbed.length - 1 && flowerbed[i - 1] === 0 || flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      count++
    }
    i = flowerbed.indexOf(0, i + 1)
  }
  return count >= n
};
// @lc code=end

