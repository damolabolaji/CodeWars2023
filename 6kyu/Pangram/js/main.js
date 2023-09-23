//A pangram is a sentence that contains every single letter of the alphabet at least once.
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//because it uses the letters A - Z at least once(case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//check if each letter is in the string

//fromCharCode(i) loops through character codes numbers
//a string of all alphabets should be equal to all aphabets of the given string

function checkLetters(str) {
  check = /^[A-Za-z]+$/;
  if (str.match(check).length === 26) {
    return true;
  } else return false;
}
let check = /[A-Za-z]/g;
const string = "The quick brown fox jumps over the lazy dog";

console.log(string.toLowerCase().match(check));



