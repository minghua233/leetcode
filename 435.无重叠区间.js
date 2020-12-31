/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 获取区间集合的长度
  const len = intervals.length
  // 区间集合为空返回0
  if (len === 0) return 0
  // 按照左区间从小到大排序
  intervals.sort((a, b) => a[0] - b[0])
  // 默认右区间，设为第一个集合的右区间
  let rightBound = intervals[0][1],
    // 定义删除区间的数目
    count = 0,
    i = 0
  while (++i < len) {
    // 如果当前左区间小于默认的右区间
    if (intervals[i][0] < rightBound) {
      // 区间重叠，删除区间数+1
      count++
      // 如果当前右区间小于默认右区间
      if (intervals[i][1] < rightBound) {
        // 删除较大区间，将默认区间设为当前右区间
        rightBound = intervals[i][1]
      }
    } else {
      // 未发生重叠，将默认右区间设为当前右区间
      rightBound = intervals[i][1]
    }
  }
  // 返回删除区间的个数
  return count
};
// @lc code=end

