function repeatStringNumTimes(str, num) {
  let string = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      string += str;
    }
    return string;
  } else {
    return string;
  }
}

console.log(repeatStringNumTimes("abc", 3));
