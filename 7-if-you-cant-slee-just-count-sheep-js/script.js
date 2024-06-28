"use strict";
const countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

console.log(countSheep(3));

console.log(Array(5, 2, 3)); //Array constructor will initialize an array with the given elements so this is the same as const arr = [5,2,3]
//the special case is when we give only 1 param:
console.log(Array(5)); //initializes empty array with 5 empty spots [empty x 5]

const x = Array(5);
console.log(x);
console.log(x[0]); //undefined

// console.log([...Array(3).keys()].map((key) => `${key + 1} sheep...`).join(""));
console.log([...Array(3)].map((_, i) => `${i + 1} sheep...`).join(""));

// console.log()); //initializes an array with 4 empty slots [empty x 4]
// const y = Array(4).map((x, i) => i);
// console.log(y); //this doesn't work and that's why we have to do [...Array(4)]
console.log([...Array(4)]); //Turns them from empty slots to actual slots with undefined values
console.log([...Array(4)].map((_, i) => i));

const countSheep3 = (length) =>
  Array.from({ length }, (_, i) => ++i + " sheep...").join("");

//this solution is as perfect as it gets: Array.from doesn't allow for sparse(empty) arrays so we no longer have to spread the empty array like the previous way, also, Array.from second param is a map function so we don't even have to call map ourselves, finally, Array.from expects an iterable(not object) BUT if we give it an object with the length property it'll make an array based on that length property. also here we are using object literal syntax, so instead of length: length, property: value, we're just saying length, and JS will automatically get the property length from the nearest scope which is the function scope in here, and it'll give the property a corresponding value.
console.log(countSheep3(4));

console.log(Array.from({ length: 4 }, (_, i) => ++i + " sheep...").join(""));

let i = 3;
const z = { i };
console.log(z);

const length = 5;
console.log(Array.from({ length }));

const zz = { length: 7 };
console.log(Array.from(zz));
