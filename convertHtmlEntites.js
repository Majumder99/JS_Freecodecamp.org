function convertHTML(str) {
  let temp = str.split("");
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "<") {
      temp[i] = "&lt;";
    } else if (temp[i] === ">") {
      temp[i] = "&gt;";
    } else if (temp[i] === "&") {
      temp[i] = "&amp;";
    } else if (temp[i] === '"') {
      temp[i] = "&quot;";
    } else if (temp[i] === "'") {
      temp[i] = "&apos;";
    }
  }
  str = temp.join("");
  console.log(str);
}

// convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
