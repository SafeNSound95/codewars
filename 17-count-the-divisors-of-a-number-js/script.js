"use strict";
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0 && n / i === i) count++;
    else if (n % i === 0 && n / i !== i) count += 2;
  }
  return count;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
console.log(getDivisorsCnt(123));
console.log(getDivisorsCnt(24));
console.log(getDivisorsCnt(100));

//The above solution doesn't work out for a for loop that goes all up to the number itself, which upon first glance seems like the way to go, it'll work for smaller numbers, but'll time out for bigger numbers which makes sense. this is why we use the trick of only going up as far as the square root of the number as that is the maximum(biggest) lower bound number a divisor can be, also the maximum upper bound divisor(well, second maximum upper bound other than the number itself obviously) is n/2, this is another reason to never ever loop till n

// function getDivisorsCnt(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) count++;
//   }
//   return count + 1;
// }
//still times out...

//e.g : divisors of 24, which sqrt is (4.89.....) : 1 2 3 4 6 8 12 24: 1 x 24 , 2 x 12, 3 x 8, 4 x 6
// as we can see the maximum lower bound a divisor can be is 4 here (math.floor(math.sqrt(n)))

//this solution doesn't work out for big numbers, it'll time out:

// function getDivisorsCnt2(n) {
//   return new Array(n)
//     .fill(0)
//     .map((_, i) => i + 1)
//     .filter((el) => n % el === 0).length;
// }

// console.log(getDivisorsCnt(1));
// console.log(getDivisorsCnt(10));
// console.log(getDivisorsCnt(11));
// console.log(getDivisorsCnt(54));
