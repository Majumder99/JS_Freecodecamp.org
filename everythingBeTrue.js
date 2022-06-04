function truthCheck(collection, pre) {
  let count = 0;
  collection.forEach((element) => {
    if (element[pre]) {
      count++;
    }
  });
  if (count === collection.length) {
    return true;
  } else {
    return false;
  }
}

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "isBot"
//   )
// );

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "name"
//   )
// );

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
