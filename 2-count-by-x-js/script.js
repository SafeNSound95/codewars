"use strict";

//Solution 1:
function countBy(x, n) {
  let z = [];
  for (let i = 0; i < n; i++) z.push(x * (i + 1));
  return z;
}

// [3 x 1, 3 x 2, 3 x 3, 3 x 4, 3 x 5];
console.log(countBy(3, 5));
console.log(countBy(1, 1));
console.log(countBy(1, 10));
console.log(countBy(2, 5));

//Solution 2:
const x = Array.from("foo");
console.log(x);

console.log(Array.from([1, 2, 3], (x) => x + x));

// const countBy2 = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x

const countBy2 = (x, n) =>
  Array.from({ length: n }, (_, i) => x * (n - i)).reverse();
console.log(countBy2(3, 5));

//Solution 3:
const countBy3 = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

console.log(countBy3(3, 5));

console.log(Array(5));
console.log([...Array(5)]);
