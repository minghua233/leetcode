var lastStoneWeight = function (stones) {
  function crush(x, y) {
    if (x == y) {
      stones.splice(stones.length - 2, 2)
      console.log('a');
      console.log(stones);
    } else {
      stones.splice(stones.length - 2, 2)
      console.log(y - x);
      stones.push(y - x)
      console.log('b');
      console.log(stones);
      console.log(stones.length);
    }
  }
  while (stones.length > 1) {
    let i = stones.length - 1
    console.log('开始' + i);
    stones.sort((a, b) => a - b)
    crush(stones[i - 1], stones[i])
    console.log('结束' + i);
    i--
    if (stones.length === 1) return stones[0]
  }
  console.log(stones);
  return 0
};

let test = lastStoneWeight([10,4,2,10])
console.log(test);

// let arr=[3,2,1]
// arr.splice(-0,2)
// console.log(arr);
