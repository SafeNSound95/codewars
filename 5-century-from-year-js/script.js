"use strict";
function century(year) {
  if (typeof year !== "number") return -1;

  if (year <= 0) return -1;

  if (year >= 1 && year <= 100) return 1;

  const yearStr = String(year).split("");

  let centuryStr = "";
  for (let i = 0; i < yearStr.length - 2; i++) {
    centuryStr += yearStr[i];
  }

  const yearRightmostDigit = +yearStr.slice(-1);

  return yearRightmostDigit === 0 ? Number(centuryStr) : Number(centuryStr) + 1;
}

// console.log(century(2001));

// console.log(century(1705)); // 18
// console.log(century(1900)); // 19
// console.log(century(1601)); // 17
// console.log(century(2000)); // 20
console.log(century(849940)); // 1
console.log(century(17897)); // 1

console.log(century(17895));
