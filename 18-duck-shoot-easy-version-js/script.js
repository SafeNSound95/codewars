"use strict";
function duckShoot(ammo, aim, ducks) {
  const shotsHit = Math.floor(ammo * aim);
  const ducksArr = ducks.split("");

  for (let i = 0; i < shotsHit; i++) {
    ducksArr[ducksArr.indexOf("2")] = "X";
  }

  return ducksArr.join("");
}

console.log(duckShoot(4, 0.64, "|~~2~~~22~2~~22~2~~~~2~~~|"));
console.log(duckShoot(9, 0.22, "|~~~~~~~2~2~~~|"));

// function duckShoot2(ammo, aim, ducks) {
//   for (let i = 0; i < Math.floor(ammo * aim); i++) {
//     ducks = ducks.replace("2", "X");
//   }
//   return ducks;
// }

// console.log(duckShoot2(4, 0.64, "|~~2~~~22~2~~22~2~~~~2~~~|"));
// console.log(duckShoot2(9, 0.22, "|~~~~~~~2~2~~~|"));

// function duckShoot3(ammo, aim, ducks){

//   if (ducks.includes('2') === false) {return ducks;}

//   let niceShot = Math.floor(ammo * aim);
//   let ducksArr = ducks.split('');

//   for (let i = 0; niceShot != 0 && ducksArr.includes('2') === true; i++ ) {
//     if (ducks[i] === '2') {
//       ducksArr[i] = 'X'
//       niceShot--;

//     }
//   }

//   return ducksArr.join('');
// }
