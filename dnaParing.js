function pairElement(str) {
  let s = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") {
      s.push([str[i], "C"]);
    } else if (str[i] === "C") {
      s.push([str[i], "G"]);
    } else if (str[i] === "A") {
      s.push([str[i], "T"]);
    } else if (str[i] === "T") {
      s.push([str[i], "A"]);
    }
  }
  return s;
}

pairElement("GCG");
