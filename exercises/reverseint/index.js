// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numStr;
  if (n < 0) {
    numStr = String(n).slice(1);
    const rev = numStr.split("").reverse().join("");
    return Number("-" + rev);
  } else if (n >= 0) {
    numStr = String(n);
    const rev = numStr.split("").reverse().join("");
    return Number(rev);
  }
}

module.exports = reverseInt;
