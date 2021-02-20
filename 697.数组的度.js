/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = {};
  let times = 0;
  let minlen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = [1, i, i];
    } else {
      map[nums[i]][0]++;
      map[nums[i]][2] = i;
      if (map[nums[i]][0] > times) {
        times = map[nums[i]][0];
        minlen = map[nums[i]][2] - map[nums[i]][1];
      } else if (map[nums[i]][0] == times) {
        minlen = Math.min(minlen, map[nums[i]][2] - map[nums[i]][1])
      }
    }
  }
  return minlen + 1
};
// @lc code=end

