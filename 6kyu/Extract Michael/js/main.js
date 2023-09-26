//given a text, get an array of last names of people named Michael
//e.g Michael, how is Michael Richards. did you see Michael Reeds today
//Output will be [Richards,Reeds]

const string =
  "Michael, how is Michael Richards. did you see Michael Reeds today";
function extractMichael(str) {
  //crete an empty array to store the values
  surnames = [];
  //get the text to split into an array using spaces
  splitStri = str.split(" ");
  //if you see a michael without a a comma after it, take the next element after it and put it in an array.
  for (i = 0; i < splitStri.length; i++) {
    if (splitStri[i] === "Michael") {
      surnames.push(splitStri[i + 1]);
    }
  }
  return surnames;
}
console.log(extractMichael(string));
