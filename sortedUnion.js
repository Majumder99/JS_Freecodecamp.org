function uniteUnique(...arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newVal = arr[i];
    for (let j = 0; j < newVal.length; j++) {
      if (finalArr.indexOf(newVal[j]) === -1) {
        finalArr.push(newVal[j]);
      }
    }
  }
  console.log(finalArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
