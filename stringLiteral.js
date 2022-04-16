const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.forEach((ele) => {
    failureItems.push(`<li class="text-warning">${ele}</li>`);
  });
  // Only change code above this line

  //   return failureItems;
  console.log(failureItems);
}

makeList(result.failure);
