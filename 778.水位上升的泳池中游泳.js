/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  let len = grid.length
  let low = grid[0][0]
  // 该题 grid[i][j] 是 [0, ..., N*N - 1] 的排列
  let high = len * len
  // 二分法
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (!canISwim(mid, grid)) low = mid + 1
    else high = mid
  }
  return low
};
// 判断是否能游向平台
var canISwim = function (time, grid) {
  let len = grid.length;
  // 定义n行n列的二维数组，默认值为false，访问过后设为true
  let visited = Array.from(Array(len), () => Array(len).fill(false))
  // 深度优先搜索
  let dfs = function (row, col) {
    // 越界 或 已访问过 或 不可游向
    if (row < 0 || col < 0 || row >= len || col >= len || visited[row][col] || grid[row][col] > time) return false
    // 递归结束
    if (row == len - 1 && col == len - 1) return true
    // 设置为已访问
    visited[row][col] = true
    // 该位置的上 下 左 右 四个方向进行遍历
    return dfs(row + 1, col) || dfs(row - 1, col) || dfs(row, col + 1) || dfs(row, col - 1);
  }
  // 默认从第1个节点开始遍历
  return dfs(0, 0)
}
// @lc code=end

