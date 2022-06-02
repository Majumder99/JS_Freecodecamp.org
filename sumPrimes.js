function sumPrimes(num) {
  let newArr = Array.from({ length: num }, (_, i) => i + 1);

  newArr = newArr
    .filter((number) => {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return number > 1;
    })
    .reduce((a, b) => {
      return a + b;
    });

  console.log(newArr);
}

sumPrimes(10);
