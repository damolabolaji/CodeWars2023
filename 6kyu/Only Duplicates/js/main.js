// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

//SOLUTION ONE
function onlyDuplicates(str) {
  myArray = str.split("");
  //   myArray.indexOf(str[a]) == myArray.lastIndexOf(str[a]);
  for (let i = 0; i < myArray.length; i++) {
    if (myArray.indexOf(myArray[i]) == myArray.lastIndexOf(myArray[i])) {
      myArray.splice(myArray.indexOf(myArray[i]), 1);
      i--;
    }
  }

  return myArray;
}
console.log(onlyDuplicates("abccdefee"));

//SOLUTION TWO
function onlyDuplicatesGPT(str) {
  const myArray = str.split("");
  const resultArray = [];

  for (let i = 0; i < myArray.length; i++) {
    // const currentChar = myArray[i];

    // Check if the character appears more than once in the array
    if (myArray.filter((char) => char === myArray[i]).length > 1) {
      resultArray.push(myArray[i]);
    }
  }

  return resultArray.join(""); // Join the characters into a string
}
console.log(onlyDuplicatesGPT("abccdefee"));

//SOLUTION THREE
function onlyShortDuplicates(str) {
  return str
    .split("")
    .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
    .join("");
}
