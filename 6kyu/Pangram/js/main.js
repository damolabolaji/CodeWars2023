//A pangram is a sentence that contains every single letter of the alphabet at least once.
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//because it uses the letters A - Z at least once(case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//check if each letter is in the string

//fromCharCode(i) loops through character codes numbers
//a string of all alphabets should be equal to all aphabets of the given string

const string = "The quick Brown fox jumps over the lazy dog";
let check = /[A-Za-z]/g;

//ONE SOLUTION
function checkLetters(str) {
  check = /[A-Za-z]/g;
  if (new Set(str.toLowerCase().match(check)).size === 26) {
    return true;
  }
  return false;
}

console.log(checkLetters(string));

//SECOND SOLUTION
function checkForAlphabet(str) {
  return new Set(str.toLowerCase().match(check)).size === 26;
}

// const alphabet = "abcdefgijklmnopqrstuvwxyz";
// console.log(checkForAlphabet(alphabet));

//THIRD SOLUTION
function checkAlphabeth(str) {
  check = "abcdefghijklmnopqrstuvwxyz";
  LowerStr = str.toLowerCase();
  for (letter of check) {
    if (!LowerStr.includes(letter)) {
      //   console.log(letter);
      return false;
    }
  }
  return true;
}

// console.log(checkAlphabeth(string));
