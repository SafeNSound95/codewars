"use strict";

function disemvowel(str) {
  return str.replaceAll(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel("What are you, a communist?"));

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// this solution short circuits to empty string when string is null/undefined, because calling replaceAll on null/undefined will result in an error.

function disemvowel2(str) {
  return (str || "").replaceAll(/[aeiou]/gi, "");
}

// console.log(disemvowel(undefined));
console.log(disemvowel2(undefined));

// console.log(disemvowel(null));
console.log(disemvowel2(null));

//non regEx solutions:

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }

// function disemvowel(str) {
//   var vowels = ["a", "e", "i", "o", "u"];

//   return str
//     .split("")
//     .filter(function (el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     })
//     .join("");
// }
