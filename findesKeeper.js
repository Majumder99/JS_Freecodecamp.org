function findElement(arr, func) {
  let num = 0;
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      t = num;
      return t;
    }
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
