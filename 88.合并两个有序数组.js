/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // m为num1的尾指针，n为nums2的尾指针，取其中较大的元素放入num1的末尾
  let i = nums1.length - 1
  m--
  n--
  while (i >= 0) {
    m >= 0 && nums1[m] < nums2[n] || m < 0 ? nums1[i--] = nums2[n--] : nums1[i--] = nums1[m--]
  }
};
// @lc code=end

