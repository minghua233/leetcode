var maximumProduct = function (nums) {
  let len = nums.length
  let sortedNums = nums.sort((a, b) => a - b)
  let res1 = sortedNums[len - 1] * sortedNums[len - 2] * sortedNums[len - 3],
    res2 = sortedNums[0] * sortedNums[1] * sortedNums[len - 1]
  return res1 > res2 ? res1 : res2
};


let test = maximumProduct([-4, -3, -2, -1, 60])
console.log(test);

