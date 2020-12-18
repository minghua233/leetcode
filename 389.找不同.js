/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let dif = t.charCodeAt(s.length)
  for (let i = 0; i < s.length; i++) {
    dif ^= s.charCodeAt(i)
    dif ^= t.charCodeAt(i)
  }
  return String.fromCharCode(dif)
};
// @lc code=end

