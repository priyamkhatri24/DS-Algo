// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
function reverse(str) {
  let reversed = "";
  const arr = str.split("");
  0;
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed = reversed + arr[i];
  }
  return reversed;
}

module.exports = reverse;
