// Pig latin is created by taking all the consonants before the first vowel
// of a word and moving them to the back of the word followed by the letters "ay".

// "hello" => "ellohay"
// "creating" => "eatingcray"
// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

// "algorithm" => "algorithmway"
// This problem is different from other variations in that it expects casing to remain the same so:

// "Hello World" => "Ellohay Orldway"
// as well as punctuation.

// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
// Your job is to take a string and translate it to Pig Latin.
// The string will never be undefined but may contain both numbers and letters.
// A word will never be a combination of numbers and letters.
//     Also, there will never be punctuation at the beginning of a word and the
//     only capital letter in a word will be the first letter meaning there are zero all capitalized words.

//PSEUDO CODE
//split the word.
//check that the word is a word
//take the first letter, change it to lowercase add it to a sliced part of the word and then add 'ay'
//if the first letter is uppercase, after adding 'ay', change the first letter to uppercase
//keep taking the letter and and adding it except the letter equals a,e,i,o, or u
//if the first letter is either a,e,i,o, or u, add 'way' to the back of it

function pigItAdvanced(str) {
  let mappedString = str.split(" ").map((item) => {
    if (typeof item === "string") {
      item.split("").splice(1).concat(item[0], "ay");
    }
  });
}

//FIRST SOLUTION
function translate(sentence) {
  return sentence
    .split(" ")
    .map(function (word) {
      var firstVowel = word.search(/[aeiou]/i);
      var suffix = firstVowel ? "ay" : "way";
      var newWord = (
        word.slice(firstVowel) +
        word.slice(0, firstVowel) +
        suffix
      ).replace(/(\w*)(\W*)(\w*)/, "$1$3$2");
      if (word.charAt(0) == word.charAt(0).toUpperCase()) {
        newWord =
          newWord.charAt(0).toUpperCase() + newWord.slice(1).toLowerCase();
      }
      return newWord;
    })
    .join(" ");
}

//SECOND SOLUTION
function pigTheString(sentence) {
	return sentence.replace(/\b([aeiou]\w*)/gi,"$1way").replace(/\b([^aeiou ]+)([aeiou]\w*)/gi, function(s,f,w) { 
    return (f[0] === f[0].toUpperCase() ? w[0].toUpperCase() : w[0])+w.slice(1)+f.toLowerCase()+'ay';
  });
};
