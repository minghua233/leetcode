/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 哈希表法
  // 定义两个哈希表，用来存储索引
  let S = Object.create(null),
    T = Object.create(null),
    i = -1
  // 遍历字符串
  while (i++ < s.length) {
    const a = s[i], b = t[i]
    // 若两个表的索引不同，返回false
    if (S[a] !== T[b]) return false
    // 将两个字符串对应索引存入表中
    S[a] = i
    T[b] = i
  }
  // 索引相同返回true
  return true
};
// @lc code=end

