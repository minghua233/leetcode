/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let stack = [], i = -1  // 定义空栈
  while (++i < s.length) {  // 遍历字符串的每一项
    const n = s[i]  // 将字符串的每一项存入n
    if (stack.includes(n) === false) {  // 若栈中不已存在n
      let j = stack.length  // 获得当前栈的大小
      // 当n的字典顺序大于栈尾元素,且字符串中还会出现与栈尾元素相同的元素时,将栈尾元素弹出
      while (j-- && stack[j] > n && s.includes(stack[j], i)) stack.pop() 
      stack.push(n) // 将n入栈
    }
  }
  return stack.join('') // 将数组转换成字符串输出
};
// @lc code=end

