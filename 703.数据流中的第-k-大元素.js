/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minHeap = nums.sort((a, b) => b - a)
  this.k = k
};


KthLargest.prototype.add = function (val) {
  let pos = this.minHeap.length
  for (let i = 0; i < pos; i++) {
    if (val >= this.minHeap[i]) {
      pos = i
      break
    }
  }
  this.minHeap.splice(pos, 0, val)
  return this.minHeap[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

