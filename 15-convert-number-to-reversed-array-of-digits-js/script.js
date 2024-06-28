"use strict";
function digitize(n) {
  return [...String(n)].reverse().map((str) => Number(str));
}

function digitize2(n) {
  const numOfDigits = String(n).length;
  let arr = [];
  let j = 0;
  let numAsString = String(n);

  for (let i = numOfDigits - 1; i >= 0; i--) {
    arr[i] = Number(numAsString[j]);
    j++;
  }

  return arr;
}

function digitize3(n) {
  let arr = [0];
  let i = 0;

  while (n / 10 !== 0) {
    arr[i] = n % 10;
    n = Math.floor(n / 10);
    i++;
  }

  return arr;
}

digitize2(35231);
digitize2(3);
digitize3(123);
digitize3(35231);

console.log(digitize3(123));
console.log(digitize3(35231));
console.log(digitize3(3));
