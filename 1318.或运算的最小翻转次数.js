/*
 * @lc app=leetcode.cn id=1318 lang=javascript
 *
 * [1318] 或运算的最小翻转次数
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = (a, b, c) => {
  // 翻转次数
  let count = 0
  // 判断每一位的或操作
  while (a > 0 || b > 0 || c > 0) {
    //  如果a或b最低位或运算后!=c
    if (((a & 1) | (b & 1)) != (c & 1))
      // a，b最低位相同则需翻转两次，否则翻转一次
      count += (a & 1) == 1 && (b & 1) == 1 ? 2 : 1
    // 右移至下一位比较(本题无需考虑符号位)
    a >>= 1
    b >>= 1
    c >>= 1
  }
  return count
};

// @lc code=end

