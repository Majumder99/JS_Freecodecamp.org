const myPromise = new Promise((resolve, reject) => {
  let serverRequest = true;
  if (serverRequest) {
    resolve("Data is added");
  } else {
    reject("Data is not added");
  }
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
