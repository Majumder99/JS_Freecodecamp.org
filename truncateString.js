function truncateString(str, num) {
  let string = "";
  let len = str.length;
  if (len <= num) {
    return str;
  } else {
    for (let i = 0; i < num; i++) {
      string += str[i];
    }
    string += "...";
    str = string;
    return str;
  }
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
