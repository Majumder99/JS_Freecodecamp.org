function spinalCase(str) {
  //   str = str.toLowerCase();
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("This Is Spinal Tap"));
