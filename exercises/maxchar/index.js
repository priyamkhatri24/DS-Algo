// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hist = {};

  for (let char of str) {
    if (hist[char]) {
      hist[char] += 1;
    } else {
      hist[char] = 1;
    }
  }

  let max = 0;
  let maxChar;
  for (let [key, val] of Object.entries(hist)) {
    if (hist[key] > max) {
      max = hist[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;
