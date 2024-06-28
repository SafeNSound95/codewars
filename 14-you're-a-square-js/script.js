"use strict";
const isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(-1)); //f
console.log(isSquare(0)); //t
console.log(isSquare(3)); //f
console.log(isSquare(4)); //t
console.log(isSquare(25)); //t
console.log(isSquare(26)); //f

// function isSquare2(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

// var isSquare3 = function(n){
//   for (var x = 0; x <= n; x++) {
//     if (n === 0) {
//       return true;
//     } else if (n / x === x) {
//       return true;
//     }
//   }

//   return false;
// }

// ^ You can exit the loop much sooner for false return values if you change the first comparison from x <= n to x * x <= n, and you can skip the second comparison n === 0 by changing the last comparison from n / x === x to x * x === n.
