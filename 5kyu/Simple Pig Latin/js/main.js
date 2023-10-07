// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let splitString = str.split(" ");
  let check = /^[a-zA-Z]+$/;
  mappedString = splitString.map((item) =>
    check.test(item)
      ? item.split("").slice(1).concat(item[0], "ay").join("")
      : item
  );
  return mappedString.join(" ");
}

console.log(pigIt("Hello World ?!"));
