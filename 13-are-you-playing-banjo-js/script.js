"use strict";
function areYouPlayingBanjo(name) {
  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} doesn't play banjo`;
}

console.log(areYouPlayingBanjo(`Adam`)); //doesn't
console.log(areYouPlayingBanjo(`Paul`)); //doesn't
console.log(areYouPlayingBanjo(`Ringo`)); //plays
console.log(areYouPlayingBanjo(`bravo`)); //doesn't
console.log(areYouPlayingBanjo(`rolf`)); //plays

// return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";

// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }
