"use strict";
function past(h, m, s) {
  if (typeof h !== "number" || typeof m !== "number" || typeof s !== "number")
    return;

  if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    return h * 3600000 + m * 60000 + s * 1000;
  }

  return `Please check that you've entered the time correctly, with both minutes and seconds between 0 and 59, and hours between 0 and 23.`;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));
console.log(past(24, 5, 5));
console.log(past(23, 59, 59));

console.log((3 * 3600 + 22 * 60 + 50) * 1000);
console.log(3 * 3600000 + 22 * 60000 + 50 * 1000);

const setTime = new Date().setHours(4, 22, 13);
const mid = new Date().setHours(0, 0, 0);
console.log(setTime);
console.log(mid);
console.log(Math.round(setTime - mid));
console.log(setTime - mid);

const now = new Date().setHours(1, 0, 0);
const then = new Date().setHours(0, 0, 0);

console.log(now - then);

console.log(Math.round(17.5875));

// function past(h, m, s){
//   const setTime = new Date().setHours(h, m, s);
//   const midnight = new Date().setHours(0, 0, 0);
//   return Math.round(setTime - midnight);
// }

// SetHours sets the hours,minutes,seconds on the date object to the values we specify, so setHours with 0,0,0 sets the date Object as if it were midnight - the start of the day -, setHours'll also return the the milliseconds timestamp that passed since 1970, so when we do two setHour calls, one for our specified time, and the other for midnight, then subtract we'll get the milliseconds that passed since midnight.

console.log(new Date().setHours(0, 0, 0));
