//Write a function that, given a string of text (possibly with punctuation and line-breaks),
//returns an array of the top - 3 most occurring words, in descending order of the number of occurrences.

function frequencyWords(str) {
  wordsArray = str.split(" ");
  wordsObject = wordsArray.reduce((obj, key) => {
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
    return obj;
  }, {});
  return;
}
let string =
  "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most";
console.log(frequencyWords(string));
