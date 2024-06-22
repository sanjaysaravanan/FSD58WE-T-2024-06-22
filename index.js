// Spread

// array
const arr = [99, 89, 79];
// console.log(arr);

// console.log(...arr);
// new array with 99, 89, 79, 69, 59, 49

const newArr = [69, ...arr, 59, 49];

// [69, 99, 89, 79, 59, 49]

// objects
const obj = { name: "sanjay", role: "developer" };

const bio = {
  ...obj,
  company: "Guvi",
  age: 49,
  experience: 14,
};

// Destructuring
// array - values are assigned based on index positions
const arr2 = [77, 66, 55, 44];

// get the first element of the array
// console.log(arr2[0]);

// create a new var x with the value as the first element in the array
// normal way of accessing the values of the array
// let x = arr2[0];

// with destructuring
let [x, num] = arr2; // [77, 66, 55, 44]

// console.log(x, num);

let [y, , , num2] = arr2; // [77, 66, 55, 44]

// console.log(y, num2);

// nested destructuring
let [p, q, r] = [1, [66, 67, 68], 9];

// console.log(p, q, r);

// q should be the 2nd element of the inner array
// let [p, [, q], r] = [1, [66, 67, 68], 9];
// console.log(p, q, r);

// Object Destructuring
const obj2 = { name: "Sanjay", role: "Developer", place: "Chennai" };

const { name, role, place } = {
  name: "Sanjay",
  role: "Developer",
  place: "Chennai",
};

// console.log(name, role, place);

// store the name value inside a new variable personName
const { fName: personName, role: personRole } = {
  fName: "Sanjay",
  role: "Developer",
};

// nested obj destructuring
const productDetails = {
  fName: "Table Mate",
  category: "Tables",
  dimensions: {
    height: 10,
    width: 20,
  },
};
// create a variable height and width which will have the values of the dimensions
const {
  dimensions: { height, width },
} = productDetails;

// console.log(height, width);

/* const displayInfo = (pd) => {
  const { fName, category } = pd;

  console.log(fName, category);
}; */

const displayInfo = ({ fName = "Sanjay", category }) => {
  // console.log(fName, category);
};

displayInfo({
  category: "Tables",
  dimensions: {
    height: 10,
    width: 20,
  },
});
//       default value
const { fName = "Table", category } = {
  fName: "Table Mate",
  category: "Tables",
  dimensions: {
    height: 10,
    width: 20,
  },
};

// async / await
const loadCountries = async () => {
  // async function is used to wait for asynchronous operation to complete using await
  const response = await fetch("https://restcountries.com/v3.1/all");

  // Just for syntax purpose
  // POST
  /* 

  // Post

  const response = await fetch("https://restcountries.com/v3.1/all", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }); 

  // DELETE
  const response = await fetch("<actual-url>", {
    method: "DELETE"
  }); 

  */

  const countries = await response.json();
  // console.log(countries);
};

loadCountries();

const customPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("line 127");
      reject("Rejected connection");
    }, 4000);
  });

const finishPromise = async () => {
  try {
    const result = await customPromise();
    console.log("line 134");
  } catch (err) {
    console.log("Error: " + err);
  }
};

finishPromise();
