function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      for (let j = i; j < arr.length; j++) {
        newArr.push(arr[j]);
      }
      break;
    }
  }

  console.log(newArr);
  return arr;
}

dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
