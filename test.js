var isIsomorphic = function (s, t) {
  
  if (s.length !== t.length) return false
  let S = Object.create(null),
    T = Object.create(null),
    i = -1
  while (i++ < s.length) {
    const a = s[i], b = t[i]
    if (S[a] !== T[b]) return false
    S[a] = i
    T[b] = i
  }
  return true
};

let test = isIsomorphic('abba', 'abab')
console.log(test);
