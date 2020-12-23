/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 定义一个纯净的对象用来将字符串哈希化
  let map = Object.create(null)
  // 遍历字符串,记录每个字母出现的次数
  for (let c of s) map[c] ? map[c]++ : map[c] = 1
  // 遍历字符串,若字母只出现过一次,返回对应的下标
  for (let i = 0; i < s.length; i++)  if (map[s[i]] === 1) return i
  // 没有符合条件的项.返回-1
  return -1
};
// @lc code=end

