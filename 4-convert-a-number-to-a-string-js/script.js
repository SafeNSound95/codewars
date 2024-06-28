"use strict";
function numberToString(num) {
  if (typeof num !== "number") return -1;
  // return num + "";
  return String(num);
}

const x = {
  number: 1,
};

console.log(numberToString(true));
console.log(numberToString({ number: 1 }));
console.log(numberToString(3));

let y = 3;
let z = `{ number: 2 }`;
console.log(y.toString());
console.log(z.toString() + 3);
console.log(String(null));
console.log(String(undefined));
//console.log(null.toString());
//console.log(undefined.toString()); Both give error cause cannot read properties of undefined/null.

console.log("" + undefined);
console.log("" + null);

//how toString works under the hood:

function numberToString(num) {
  //create a new empty string in which the result will be written
  let str = "";

  //Check, whether the number is positive or negative. The multiplier 1 or -1 will be saved for later
  const mult = num < 0 ? -1 : 1;

  //Take the absolut value of num. Could also be done with Math.abs
  num *= mult;

  //Loop, which will run as often as num has digits
  do {
    //Take the least significant digit of num (num % 10), add 48 and get the associated ascii character. The number 0 has the ascii value of 48, 1 = 49... 9 = 57.
    //Then prepend that character to the string.
    str = String.fromCharCode((num % 10) + 48) + str;

    //Remove the least significant digit from num. (Divide by ten, then round down)
    num = ~~(num / 10);
  } while (num > 0);

  //If the input number was negative, prepend a -.
  if (mult < 0) str = "-" + str;
  return str;
}

console.log(typeof numberToString(123));
