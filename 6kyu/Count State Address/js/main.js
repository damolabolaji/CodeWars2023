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
    street: "Twin St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK",
  },
  {
    house: 1234,
    street: "Tess St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "se",
  },
];

//set the count property to 0
//set new empty array
//check the states. for every similar state value, add 1 to the count

function countStates(array) {
  let newArray = [];
  array.forEach((element) => {
    for (let key in element) {
      if (key === "state") {
        //add the key=>value pair to an array
        newArray.push(element[key]);
      }
    }
  });
  // let objArray = []
  // objArray.push({
  //     state:newArray[]
  // })
  return newArray;
}

const count = (addres) => {
  const states = addres.reduce((obj, { state }) => {
    if (!state) throw new Error();
    obj[state] = (obj[state] || 0) + 1;
    return obj;
  }, {});
  return Object.keys(states).map((state) => ({ state, count: states[state] }));
};

function countStt(addresses) {
  var states = addresses.reduce(function (states, { state }) {
    if (!state) throw new Error();
    if (!states[state]) states[state] = 0;
    return states[state]++, states;
  }, {});
  return states;
  return Object.keys(states).map((state) => ({ state, count: states[state] }));
}
// console.log(countStt(myArray));

function countStreets(array) {
  let arrayOfStatesTypes = array.reduce((theArray, { street }) => {
    //{ street } is an object destructuring pattern that extracts the
    //street property from an object passed as an argument to the function.
    if (!street) throw new Error();
    if (!theArray[street]) {
      theArray[street] = 0;
      theArray[street]++;
    }
    return theArray;
  }, {});
  return Object.keys(arrayOfStatesTypes).map((street) => ({
    street,
    count: arrayOfStatesTypes[street],
  }));
}

console.log(countStreets(myArray));
