// The goal of this exercise is to convert a string to a new string where each character
//in the new string is "(" if that character appears only once in the original string, or ")"
//if that character appears more than once in the original string.Ignore capitalization when
//determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages.
//If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("hello world you"));

//CREATE AN OBJECT WITH DUPLICATE CHARACTERS OF A STRING
function countDuplicate(str) {
  obj = {};
  str.split("").forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  return obj;
}
console.log(countDuplicate("hello world you"));

function collectDuplicate(str) {
  obj = {};
  theArray = [];
  str.split("").forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  let objKeys = Object.keys(obj); //gives an array of all then property values which are the letters

  for (letter in objKeys) {
    //looping through each letter
    if (obj[objKeys[letter]] > 1) {
      // Inside the loop, it accesses the objKeys[letter] to get the current key (referred to as 'letter' in this context).
      //It then uses this key to access the corresponding value in the obj object with obj[objKeys[letter]].
      theArray.push(objKeys[letter]);
    }
  }
  return theArray;
}

console.log(collectDuplicate("hello world you"));
