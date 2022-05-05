function confirmEnding(str, target) {
  let len1 = str.length;
  let len2 = target.length;
  let j = len2 - 1;
  for (let i = len1 - 1; i > 0; i--, j--) {
    if (str[i] === target[j]) {
      if (j === 0) {
        return true;
      }
    } else {
      return false;
    }
  }
}

console.log(confirmEnding("Bastian", "tan"));
