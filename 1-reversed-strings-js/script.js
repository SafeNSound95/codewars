"use strict";

//Solution 1:
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(
  reverseString("him") //mih
);

console.log(
  reverseString("him") //mih
);

console.log(reverseString("h")); //h

console.log(reverseString("")); //an empty string length is = 0, in the for loop: i = 0 - 1 which is -1, then we go to the condition(IMPORTANT: EVEN IN THE FIRST ITERATION WE GO TO CND FIRST!!!) the condition fails cause -1 is NOT >= 0 so we NEVER ENTER THE LOOP to begin with and just return the empty string = '' that we defined in the function

console.log(reverseString("world"));
console.log(reverseString("word"));

//Solution 2:
function reverseString2(str) {
  return [...str].reverse().join("");
}

const str3 = "help";

console.log(reverseString2(str3));

const arrTest = [1, 2, 3, 4];
console.log(arrTest.reverse()); //[4,3,2,1]
console.log(arrTest); //[4,3,2,1] it has been mutated
console.log(arrTest.toReversed());
console.log(arrTest);

/*
 What's going on here with the arrTest? first we invoke array method reverse, which is a mutator method as it returns a reference to the same array so when we log arrTest(original), it has been mutated(changed)(reversed).
we then call toReversed() which is the copying counterpart of reverse(), meaning it returns a NEW array with the elements reversed so when we log arrTest, it's still intact. 
*/
