var largeGroupPositions = function (s) {
  let start = 0, i = 0, res = []
  while (++i <= s.length) {
    if (s.charCodeAt(start) ^ s.charCodeAt([i])) {
      if (i - start > 2) res.push([start, i - 1])
      start = i
    }
  }
  return res
};

let test = largeGroupPositions("abbxxxxzzy")
console.log(test);

