// Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

// The input objects will have the following structure:
// The states must be ordered by first appearance.

// An error is expected if an input object doesn't have a state property.
// {
//   state: "AK",
//   count: 25
// }

const myArray = [
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "se",
  },
];

//set the count property to 0
//set new empty array
//check the states. for every similar state value, add 1 to the count

function countStates(array) {
  let count = 0;
  let newArray = array.reduce((element, obj) => {});

  return newArray;
}

console.log(myArray[1].state);
console.log(countStates(myArray));
