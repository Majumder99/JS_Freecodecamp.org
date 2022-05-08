function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      console.log(i);
      break;
    }
  }
  console.log(i);
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([2, 5, 10], 15);
