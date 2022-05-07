function frankenSplice(arr1, arr2, n) {
  let sourav = [];
  let majumder = arr2.slice();
  sourav = majumder.slice(n, majumder.length);
  majumder.splice(n, arr1.length, ...arr1);
  for (let i = 0; i < sourav.length; i++) {
    majumder.push(sourav[i]);
  }
  console.log(majumder);
  console.log(arr2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
