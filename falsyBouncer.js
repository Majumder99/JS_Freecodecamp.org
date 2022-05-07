function bouncer(arr) {
  let sourav = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      sourav.push(arr[i]);
    }
  }
  console.log(sourav);
}

bouncer([7, "ate", "", false, 9]);
