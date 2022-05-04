function findLongestWordLength(str) {
  let newArr = Array.from(str);
  let another = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (newArr[i] !== " ") {
      count++;
      if (i === str.length - 1) {
        another.push(count);
      }
    } else {
      another.push(count);
      count = 0;
    }
  }
  another.sort((a, b) => a - b);
  console.log(another[another.length - 1]);
  //   return str.length;
}

findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);
