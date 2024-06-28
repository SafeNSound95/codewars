"use strict";
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};

console.log(areaOrPerimeter(3, 3)); //9 area of square
console.log(areaOrPerimeter(6, 10)); // 32 perimiter of rectangle
