/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (head === null) return null
  // 定义虚拟头节点
  let dummy = new ListNode(0)
  dummy.next = head
  // 调用排序函数
  return sort(head.next, dummy, head)
};
var sort = (current, dummy, max) => {
  // 从第一个节点开始
  while (current) {
    // 暂存当前节点右侧节点
    let next = current.next
    // 当前左侧最大值 <= 当前节点值，更新左侧最大值节点
    if (max.val <= current.val) max = current
    else {
      // 当前左侧最大值 > 当前节点值，讲当前节点插到左侧
      let right = dummy.next, left = dummy
      // 找插入位置右侧第一个值比当前节点大的节点right，暂存right的左侧节点至left
      while (right.val <= current.val) left = right, right = right.next
      // 左侧最大值节点与当前节点右侧节点相连
      max.next = current.next
      // 当前节点与插入位置右侧节点相连
      current.next = right
      //  当前节点与插入位置左侧节点相连
      left.next = current
    }
    // 迭代右侧节点
    current = next
  }
  return dummy.next
}
// @lc code=end

