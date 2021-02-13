/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = [];
  for(let i=1;i<nums.length+1;i++){
      if(nums.indexOf(i)==-1){
          res.push(i);
      }
  }
  return res
};
// @lc code=end

