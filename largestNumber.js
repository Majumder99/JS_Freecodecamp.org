function largestOfFour(arr) {
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    let maximum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (maximum < arr[i][j]) {
        maximum = arr[i][j];
      }
    }
    max.push(maximum);
  }
  arr = max;
  console.log(arr);
  //return arr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
