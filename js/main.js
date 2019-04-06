var obj = [{
  user: "John",
  age: 22,
  country: "United States"
}, {
  user: "Will",
  age: 27,
  country: "United Kingdom"
}, {
  user: "Abiel",
  age: 19,
  country: "Mexico"
}];


for (let i = 0; i < 3; i++) {

  document.write(`<p>${obj[i].user} is ${obj[i].age} years old and lives in ${obj[i].country}.</p>`);
  
}

var meats = ["beef", "pork", "lamb"];
var fruit = ["apple", "plum", "grape", "orange"];

var obj5 = { arr1: meats, arr2: fruit};


document.write(obj5.arr1[1] + " with " +obj5.arr2[1] + " for dinner.");

