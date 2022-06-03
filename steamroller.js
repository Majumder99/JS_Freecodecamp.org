function steamrollArray(arr) {
  arr = arr
    .toString()
    .replace(",,", ",")
    .split(",")
    .map((v) => {
      if (v == "[object Object]") {
        return {};
      } else if (isNaN(v)) {
        return v;
      } else {
        return parseInt(v);
      }
    });
  console.log(arr);
}

// steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
