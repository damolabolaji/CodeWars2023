//given a text, get an array of last names of people named Michael
//e.g Michael, how is Michael Richards. did you see Michael Reeds today
//Output will be [Richards,Reeds]

const string =
  "Michael, how is Michael Richards. did you see Michael Reeds today? i saw Michael Cummings. esrlier. if Michael Soarez is there, kill him Michael Jordan?";
function extractMichael(str) {
  //crete an empty array to store the values
  surnames = [];
  //get the text to split into an array using spaces
  splitStri = str.split(" ").map((item) => {
    item = item.replace(/\./gi, "").replace(/\?/gi, "").replace(/\,/gi, "");
    return item;
  });
  //if you see a michael without a a comma after it, take the next element after it and put it in an array.
  for (i = 0; i < splitStri.length; i++) {
    if (
      splitStri[i] === "Michael" &&
      splitStri[i + 1][0] == splitStri[i + 1][0].toUpperCase()
    ) {
      surnames.push(splitStri[i + 1]);
    }
  }
  return surnames;
}
console.log(extractMichael(string));

//codewars solution
function getMichaelLastName(inputText) {
  var arr = inputText
    .replace(/\./gi, "")
    .replace(/\?/gi, "")
    .replace(/\,/gi, "")
    .split(" ");
  var a = [];
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] == "Michael" && arr[i + 1][0] == arr[i + 1][0].toUpperCase())
      a.push(arr[i + 1]);
  return a;
}
//solution two
function getMichaelLastName(txt) {
  return txt.match(/Michael\s([A-Z]\w+)/g).map((x) => x.split(" ")[1]);
}
