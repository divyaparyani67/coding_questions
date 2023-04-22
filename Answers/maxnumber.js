function largestNumber(arr) {
  let i;
  let max = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

let arr = [1, 2, 3, 4, 5];

console.log(largestNumber(arr));
