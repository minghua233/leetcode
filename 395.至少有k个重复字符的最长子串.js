/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k, h = {}, n = []) {
  for (var a of s) h[a] = (h[a] || 0) + 1
  for (var a in h) h[a] < k && n.push(a)
  return n.length ? s.split(new RegExp(n.join('|'))).reduce((p, v) => v ? Math.max(p, longestSubstring(v, k)) : p, 0) : s.length
};
// @lc code=end

