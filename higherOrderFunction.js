const squareList = (arr) => {
  // Only change code below this line
  const newArr = [];
  const myArr = arr
    .filter((user) => {
      return user >= 0 && user % 1 === 0;
    })
    .map((value) => {
      newArr.push(value * value);
    });
  arr = newArr.slice(0);
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
