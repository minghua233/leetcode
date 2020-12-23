var firstUniqChar = function (s) {
  const map = Object.create(null)

  for (let c of s) map[c] ? map[c]++ : map[c] = 1
  console.log(map);
  for (let i = 0, l = s.length; i < l; i++) {
    if (map[s[i]] === 1) return i
  }

  return -1
};

let test = firstUniqChar('leetcode')
console.log(test);
