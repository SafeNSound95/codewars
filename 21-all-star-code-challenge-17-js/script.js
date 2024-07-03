"use strict";

// 0 => sun / 1 => mon / 2 => tue / 3 => wed / 4 => thu / 5 => fri / 6 => sat /

function findYear(month, dayOfWeek) {
  for (let i = 2014; i <= 2050; i++) {
    const date = new Date(i, month);
    if (date.getDay() === dayOfWeek) return i;
  }

  return 0;
}

console.log(findYear(0, 3));
console.log(findYear(11, 2));
console.log(findYear(4, 55));

const x = new Date(2003, 3);
console.log(x);

const findYear2 = (m, d, y = 2014) =>
  m < 0 || d < 0 || m > 11 || d > 31 || y > 2050
    ? 0
    : new Date(y, m, 1).getDay() == d
    ? y
    : findYear(m, d, y + 1);
