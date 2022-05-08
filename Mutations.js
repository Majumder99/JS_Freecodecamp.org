function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  let a = Array.from(arr[0]);
  let b = Array.from(arr[1]);
  a.sort();
  b.sort();
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        count++;
        break;
      }
    }
  }
  if (count === b.length) {
    return true;
  } else {
    return false;
  }
}

mutation(["hEllo", "hell"]);
