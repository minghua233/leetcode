/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // 贪心
  const len = ratings.length
  // 若没有孩子，返回糖果数为0
  if (!ratings || !len) return 0
  // 每个孩子最少有一颗糖果
  let candies = Array(len).fill(1)
  // 判断每个孩子左边孩子的评分
  for (let i = 1; i < len; i++) {
    // 若自己比左边孩子评分更高，将自己的糖果数在左边孩子糖果数上+1
    //初始糖果均为1,无需判断自己和左边孩子的糖果数
    if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1
  }
  // 判断每个孩子右边孩子的评分
  for (let i = len - 2; i >= 0; i--) {
    // 若自己比右边孩子评分更高，且自己糖果数更少，将自己的糖果数在右边孩子糖果数上+1
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) candies[i] = candies[i + 1] + 1
  }
  return candies.reduce((a, b) => a + b, 0)
};
// @lc code=end

