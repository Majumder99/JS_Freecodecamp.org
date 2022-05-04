function reverseString(str) {
  let newArr = Array.from(str);
  newArr.reverse();
  let str1 = "";
  newArr.map((item) => (str1 += item));
  str = str1;
  console.log(str);
}

reverseString("Greetings from Earth");
