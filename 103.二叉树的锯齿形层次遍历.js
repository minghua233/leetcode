/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // 当树为空时，返回空数组
  if (root === null) return []
  let res = []
  // 定义函数，递归遍历树
  function traversal(root, depth) {
    // 当没有根节点传入时，退出
    if (root === null) return
    // 当遍历到的一层没有数据时，该层设为空
    if (res[depth] === undefined) res[depth] = []
    // 判断是否偶数层
    if (depth & 1) { // 0&1=0 1&1=1 2&1=0 ...
      // 若为偶数层则倒序插入数据
      res[depth].unshift(root.val)
    } else {
      // 若为偶数层则正序插入数据
      res[depth].push(root.val)
    }
    // 遍历左子树
    traversal(root.left, depth + 1)
    // 遍历右子树
    traversal(root.right, depth + 1)
  }
  // 将需要遍历的树传入
  traversal(root, 0)
  // 返回遍历之后的结果
  return res
};
// @lc code=end

