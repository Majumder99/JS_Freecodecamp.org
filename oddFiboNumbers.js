function sumFibs(num) {
  let count1 = 0;
  let count2 = 1;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (count2 % 2 !== 0 && count2 <= num) {
      sum += count2;
    }
    let temp = count2;
    count2 = count1 + count2;
    count1 = temp;
  }
  console.log(sum);
}

sumFibs(1000);
