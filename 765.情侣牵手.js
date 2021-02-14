/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  let n = row.length;
  let p = new Array(n + 1);
  // 降低时间复杂度：使用position数组，建立各值到其索引位置到映射
  row.forEach((val, idx) => {
    p[val] = idx;
  });
  let res = 0;
  // 遍历偶数下标，找奇数下标的情侣进行配对
  for (let i = 0; i < n; i += 2) {
    // 妙用异或，找到与当前位置匹配的情侣编号
    let lover = row[i] ^ 1;
    // 若是恰好匹配的情侣则无需操作
    if (row[i + 1] === lover) continue;
    let next = row[i + 1];
    // 否则需要交换
    res++;
    // 妙用ES6的解构赋值，进行交换，交换row中情侣位置，同时更新维护p位置数组
    [row[i + 1], row[p[lover]]] = [row[p[lover]], row[i + 1]];
    [p[lover], p[next]] = [p[next], p[lover]];
  }
  return res;
};
// @lc code=end

