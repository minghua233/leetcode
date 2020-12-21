/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length); // 创建dp，用于计算每一步最优体力
  dp[0] = cost[0];  // 将1，2阶耗费体力存入dp
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) { // 从第三阶楼梯开始判断是走一层还是走两层
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]; // 将耗费体力最少的走法存入dp
  }
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]) // 返回去掉最后两步的最优解
};
// @lc code=end

