// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b) {
  let newA = Number(a);
  let newB = Number(b);
  let multiplicatn = newA * newB;
  return multiplicatn.toString();
}

// In order to perform operations on larger numbers, we convert them into strings and then perform operations on them.

//MEDIUM SOLUTION WALKTHROUGH FOR ADDITION
//find the digit that is greater in length and let that be the first

function multiplyThisStrings(a, b) {
  if (a.length >= b.length) {
    console.log(findSum(a, b));
  } else findSum(b, a);
}

var first = "893427328497983427893248932498034289324";
var second = "234859234879342897893427893274";

if (first.length >= second.length) {
  console.log(findSum(first, second));
} else {
  findSum(second, first);
}

function findSum(first, second) {
  var sum = "";
  var carry = 0;
  var diff = second.length - first.length;
  for (i = first.length - 1; i >= 0; i--) {
    var temp =
      (Number(first.charAt(i)) % 10) +
      (Number(second.charAt(i + diff)) % 10) +
      carry;
    if (temp >= 10) {
      sum = (temp % 10) + sum;
      carry = Math.floor(temp / 10);
    } else {
      sum = temp + sum;
      carry = 0;
    }
  }
  if (carry) {
    sum = carry + sum;
  }
  return sum;
}
