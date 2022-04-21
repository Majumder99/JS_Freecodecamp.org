let str1 =
  "I am hut hut going to hum hunting hut code freecodecamp Camp like me very much camp code";
let str2 = /code/;
let str3 = /code/i; //Doesn't care is it uppercase or lowercase (returns only first match)
let str4 = /camp/gi; //Returns all matching (returns only first match)
let str5 = /hu./; // Returns all string with hu in them
let str6 = /sourav/;
let str7 = /hu./gi;
// let str8 = ;

//test (return true or false)
// let result = str2.test(str1);
// let result = str3.test(str1);
// let result = str4.test(str1);
// let result = str5.test(str1);
// let result = str6.test(str1);
// console.log(result);

//match(returns the string)

// let result = str1.match(str2);
// let result = str1.match(str3);
// let result = str1.match(str4);
// let result = str1.match(str5);
// let result = str1.match(str6);
// let result = str1.match(str7);
// console.log(result);

//Greedy matching
// let titanic = "titanic";
// let reg = /t[a-z]*i/;//Greedy
// console.log(titanic.match(reg));

//Lazy matching
let titanic = "titanic";
let reg = /t[a-z]*?i/; //Lazy
// console.log(titanic.match(reg));

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h*?[0-9]>/; // Change this line
// console.log(text.match(myRegex));

//Whitespace checker using \s
let white = "There is many white space space";
let myWhite = /\s/g;
// console.log(white.match(myWhite));

//Lower number and upper number {lower,upper} or using specifying digit {4}
let hz = "hazzzzzah";
let myHz = /haz{5}ah/;
// console.log(myHz.test(hz));

// Lookahead => positive (?=...) + negative (?!...)
let pass = "lsk333";
let myPass = /(?=\w{6})(?=\D*\d{2})/;
console.log(myPass.test(pass));
