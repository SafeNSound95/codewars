"use strict";

function positiveSum(arr) {
  return arr.filter((num) => num >= 0).reduce((acc, posNum) => acc + posNum, 0);
}
//my solution

// console.log(positiveSum([1, 2, 3, -1, -2, -3])); //[1,2,3] = 6

const x = [-1];
// console.log(x.reduce((acc, curr) => acc + curr, 0)); //
// console.log(x[0] + 0);
console.log(positiveSum(x));

// console.log(x.reduce((acc, el) => acc + el, 0));
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -4, -7, -12]));

/*...................................................................*/

//clever solution

//Amazing solution using one reduce only, since the CND is simple we can check it inside the reduce callback :) remember reduce's callback is a function that has a body that you can write all kinds of logic in, so keep that in mind when thinking about ways to solve the problem, check if you can do the logic INSIDE of reduce's CB and save on having to use other methods like filter,map,etc...

function positiveSum2(arr) {
  return arr.reduce((acc, curr) => acc + (curr > 0 ? curr : 0), 0);
}

/* 
// function positiveSum2(arr) {
//   return arr.reduce((acc, curr) => acc + (curr > 0 && curr), 0);
// }

this is an even shorter solution implementing short circuting, although I do find it less readble.
*/

console.log(positiveSum2([1, 2, 3, 4, 5]));
console.log(positiveSum2([-1, -2, -3, 4, 5])); // I just did a mistake in the code above, where I forgot to initialize the initial value of the accumulator in reduce, which when you forgo, the initial value becomes the first value and starts from there :), so keep that in mind, in my example I had -1 as first item, so my sum always came with 1 less because I started acc at -1 not 0, WATCH OUT!
console.log("J" && 3);
