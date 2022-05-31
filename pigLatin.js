function translatePigLatin(str) {
  let str1 = " ";
  if (
    str[0] === "a" ||
    str[0] === "e" ||
    str[0] === "i" ||
    str[0] === "o" ||
    str[0] === "u"
  ) {
    str += "way";
    return str;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] !== "a" &&
        str[i] !== "e" &&
        str[i] !== "i" &&
        str[i] !== "o" &&
        str[i] !== "u"
      ) {
        str1 += str[i];
      } else {
        break;
      }
    }
    str1 = str1.trim();
    str += str1 + "ay";
    let x = str1.length;
    str1 = str.slice(x);
    str = str1;
    return str;
  }
  //   return str;
}

translatePigLatin("glove");
