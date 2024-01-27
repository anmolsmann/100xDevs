/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelnum = 0;
  for (let i=0; i < str.length; i++) {
    if (str[i] === "A" || str[i].toLowerCase() === "a" || str[i] === "O" || str[i].toLowerCase() === "o" || str[i] === "I" || str[i].toLowerCase() === "i" || str[i] === "E" || str[i].toLowerCase() === "e" || str[i] === "U" || str[i].toLowerCase() === "u"){
      vowelnum++;
    }
  }
  return vowelnum;
}

module.exports = countVowels;