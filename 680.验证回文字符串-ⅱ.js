/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isPali(str, left, right) {
  while (left < right) {
    if (str[left] != str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

var validPalindrome = function (str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] != str[j]) {
      return isPali(str, i + 1, j) || isPali(str, i, j - 1)
    }
    i++
    j--
  }
  return true
}
// @lc code=end

