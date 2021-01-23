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
    console.log(A[j]);
    console.log(Karr[i]);
    console.log(typeof A[j]);
    console.log(typeof Karr[i]);
    console.log(Karr[i] + A[j]);
    console.log(1 + 1);
    if (Karr[i] + A[j] < 10) {
      console.log(123);
      res = A[j] + K[i]
      console.log(res);
      A[j] = res
    } else {
      A[j] = A[j] + K[i] - 10
    }
    i--
    j--
  }
  return A
};

let test = addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]
  , 516)
console.log(test);

