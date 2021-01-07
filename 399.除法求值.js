/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  graph = []
  let i = -1, id = 0, h = new Map
  while (++i < values.length) {
    const x = equations[i][0], y = equations[i][1], value = values[i]
    if (!h.has(x)) h.set(x, id++)
    if (!h.has(y)) h.set(y, id++)
    const idX = h.get(x), idY = h.get(y)
    if (!graph[idX]) graph[idX] = []
    graph[idX][idY] = value
    if (!graph[idY]) graph[idY] = []
    graph[idY][idX] = 1 / value
  }
  visited = new Uint8Array(id)
  return queries.map(([x, y]) => d(h.get(x), h.get(y)))
};
let graph, visited, d = (x, y) => {
  if (!graph[x]) return -1
  if (graph[x][y]) return graph[x][y]
  for (let i = 0; i < graph[x].length; i++)
    if (graph[x][i] !== void 0 && visited[i] === 0) {
      visited[i] = 1
      const t = d(i, y)
      visited[i] = 0
      if (t !== -1) return graph[x][i] * t
    }
  return -1;
};
// @lc code=end

