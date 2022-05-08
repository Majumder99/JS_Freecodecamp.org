function chunkArrayInGroups(arr, size) {
  let sourav = arr.slice();
  let majumder = [];
  let arr1 = [];
  for (let i = 0; i < arr.length - size; i++) {
    if (sourav.length > size) {
      arr1 = sourav.splice(0, size);
      majumder.push(arr1);
    }
  }
  majumder.push(sourav);
  console.log(majumder);
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
