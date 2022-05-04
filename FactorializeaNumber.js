function factorialize(num) {
  let newNum = 1;
  for (let i = 1; i <= num; i++) {
    newNum = newNum * i;
  }
  num = newNum;
  return num;
}

console.log(factorialize(5));
