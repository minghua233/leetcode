var canPlaceFlowers = function (flowerbed, n) {
  let len = flowerbed.length,
    count = 0,
    i = flowerbed.indexOf(0)
  if (i === -1) return false
  while (i != -1) {
    if (i === 0 && flowerbed[i + 1] === 0 || i === len - 1 && flowerbed[i - 1] === 0 || flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      count++
    }
    i = flowerbed.indexOf(0, i + 1)
  }
  return count >= n
};

let test = canPlaceFlowers([1, 0, 0, 0, 1], 1)
console.log(test);

