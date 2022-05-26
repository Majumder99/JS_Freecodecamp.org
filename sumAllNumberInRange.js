function sumAll(arr) {
  if (arr[0] <= arr[1]) {
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    return sum;
  } else {
    let sum = 0;
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
    return sum;
  }
}

console.log(sumAll([1, 4]));

//  let max = Math.max(arr[0], arr[1]);
//  let min = Math.min(arr[0], arr[1]);
