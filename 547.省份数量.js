/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let res = 0,  //省份数量
    i = -1, // 城市下标
    visited = new Array(isConnected.length).fill(0), //城市是否被访问
    queue = []  // 城市队列
  // 遍历所有城市
  while (++i < isConnected.length) {
    // 若该城市没有被访问过
    if (visited[i] === 0) {
      // 省份数+1
      res++
      // 放入城市队列中
      queue.push(i)
      // 遍历队列中的城市
      while (queue.length) {
        // 取队列中的第一个城市
        const k = queue.shift()
        // 将该城市设置为已访问
        visited[k] = 1
        // 遍历该城市与其他城市的联通关系
        for (let j = 0; j < isConnected[k].length; j++)
          // 若有与该城市相连且未被访问过的其他城市，将其放入城市队列中
          if (isConnected[k][j] && visited[j] === 0) queue.push(j)
      }
    }
  }
  return res
};
// @lc code=end

