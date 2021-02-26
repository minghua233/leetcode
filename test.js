var addToArrayForm = function (A, K) {
  let Karr = [...`${K}`].map(num => parseInt(num))
  console.log(Karr);
  if (Karr.length > A.length) {
    let temp = A
    A = Karr
    Karr = temp
  }
  let i = Karr.length - 1, j = A.length - 1, res = 0
  while (i >= 0) {
    if (Karr[i] + A[j] < 10) {
      A[j] = A[j] + Karr[i]
    } else {
      A[j] = A[j] + Karr[i] - 10
      
    }
    i--
    j--
  }
  return A
};

let test = addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]
  , 516)
console.log(test)

