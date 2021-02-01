/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length
  let curr = [], res = [], visited = {}

  function dfs(nth) { //  [0, 1, 2]
    if (nth === len) {  // 出口
      res.push(curr.slice())
      return
    }
    // 检查手中的数字有哪些
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        curr.push(nums[i])
        visited[nums[i]] = 1  // 打标识
        dfs(nth + 1)
        // nums[i] 让出当前坑位
        curr.pop()
        visited[nums[i]] = 0
      }
    }
  }
  
  dfs(0)
  return res
};
// @lc code=end

