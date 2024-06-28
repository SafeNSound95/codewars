"use strict";
String.prototype.toJadenCase = function () {
  return this.trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const x = "How can mirrors be real if our eyes aren't real";
const y = "";
const z = "HiMma SemMa sSg";
console.log(x.toJadenCase());
console.log(y.toJadenCase());
console.log(z.toJadenCase());

console.log(y.charAt(0));
console.log(y.charAt(0).toUpperCase());
console.log(y[0]);
// console.log(y[0].toUpperCase());
const ult = "   He WHo RuNs - ThIs AREa        ";
console.log(ult.toJadenCase());

const obj = {
  fullName: "him tthem",
};

console.log(obj.fullNamez);

const arr = [1, 23];
console.log(arr[2]);

/*

 when we try to access an array element or object property using the dot accessor or the bracket notation it gives us undefined
and whenever you try to use the undefined, e.g: undefined.toUpperCase(), you'll get an error, therefore you'd better be always thinking about the optional chaining operator when it comes to dot/bracket, so you'll avoid error.

using charAt as done above, we don't need optional chaining since it returns empty, not undefined : 
"If index is out of the range of 0 – str.length - 1, charAt() returns an empty string." - MDN

*/

//Using RegEx
String.prototype.toJadenCase2 = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};
