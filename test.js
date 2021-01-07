function isPali(str, left, right) {
  while (left < right) {
    if (str[left] != str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

var validPalindrome = function (str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] != str[j]) {
      return isPali(str, i + 1, j) || isPali(str, i, j - 1)
    }
    i++
    j--
  }
  return true
}
let test = validPalindrome("abca")
console.log(test);

