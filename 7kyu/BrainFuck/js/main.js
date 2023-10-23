// Time to make a Pig Latin algorithm! But this time write it in brainfuck!

// The rules have been dumbed down a bit, so you'll receive no punction marks.
// In this version of Pig Latin you just have to move the first symbol to the end, and add 'ay'.

// The input guaranteed to be non-empty.

// Pig --> igPay
// 123456789 --> 234567891ay

function brainFuck(str) {
  let newStr = str.slice(1, str.length);
  return newStr + str[0] + "ay";
}

console.log(brainFuck("123456"));
