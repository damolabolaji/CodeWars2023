// In this example you have to validate if a user input string is alphanumeric.
// The given string is not nil / null / NULL / None, so you don't have to check that.

//The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

let string = "";
const check = /^[A-Za-z0-9]*$/;

function checkAlphanumeric(str) {
  if (str === "") {
    return false;
  } else if (str.match(check)) {
    //produces an array of the matches or null if nothing matches
    return true;
  }
  return false;
}

console.log(checkAlphanumeric(string));
//console.log(string.match(check)); //produces null. if just one value doesnt match, the whole thing produces null
