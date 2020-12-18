var findTheDifference = function (s, t) {
  let dif = t.charCodeAt(s.length)
  for (let i = 0; i < s.length; i++) {
    dif ^= s.charCodeAt(i) 
    dif ^= t.charCodeAt(i)
  }
  return String.fromCharCode(dif)
};

let res = findTheDifference('aaaa', 'aaaaa')
console.log(res);