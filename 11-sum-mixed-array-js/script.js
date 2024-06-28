"use strict";
function sumMix(x) {
  const filteredArray = x.filter(
    (el) =>
      !Number.isNaN(parseInt(el)) &&
      (typeof el === "number" || typeof el === "string")
  );

  return filteredArray.reduce(
    (acc, el) => (typeof el === "string" ? acc + Number(el) : acc + el),
    0
  );
}

console.log(sumMix(["him", 9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix(["3", 6, 6, 0, "5", true, false, 8, 5, "6", 2, "0"]));
console.log(
  sumMix([
    "3",
    6,
    6,
    0,
    "5",
    true,
    false,
    8,
    5,
    "6",
    NaN,
    undefined,
    null,
    2,
    "0",
  ])
);

console.log(sumMix([false, true, NaN, undefined, null]));

console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);

function sumMix2(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

console.log(sumMix2([9, 3, "7", "3"]));
console.log(sumMix2(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix2(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix2(["3", 6, 6, 0, "5", true, false, 8, 5, "6", 2, "0"]));
console.log(
  sumMix2([
    "3",
    6,
    6,
    0,
    "5",
    true,
    false,
    8,
    5,
    "6",
    NaN,
    undefined,
    null,
    2,
    "0",
  ])
);

console.log(Number.isNaN(parseInt("him")));
console.log(Number.isNaN(parseInt("3")));
console.log(Number.isNaN(parseInt(NaN)));

console.log(eval([1, 2, 3, 4, "5", 6, "7"].join("+")));

function sumMixEval(x) {
  return eval(x.join("+"));
}

const x = ["1", 2, "3", 4];

console.log(x.join("").split(""));
