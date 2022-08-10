// type conversation imenuvani kako i nivnite values
let numberOne = 1;
let numberZero = 0;
let stringOne = "1";
let stringZero = "0";
let stringTen = "10";
let boleanTrue = true;
let boleanFalse = false;
let numNull = null;
let thisIsUndefined = undefined;
let emptyDouble = "";
let emptySingle = "";

// dodadeni 4 variabli od koj na kraj e presmetan total od site elementi

let dayOfBorn = 5;
let sumName = 13;
let subtractYear = 19 - 90;
let allNumbers = 1 + 9 + 9 + 0;
console.log(dayOfBorn + sumName + subtractYear + allNumbers);

//  5 ta variabla kade sto se gleda dayOfBorn deka e pogolem od sumName i rezultatot e false

let boleanVariable = true ? dayOfBorn > sumName : (boleanVariable = false);
console.log(boleanVariable);

//  6ta variabla e ostatokot od subtractYear i allNumbers

let boleanVariableDivide = subtractYear % allNumbers;
console.log(boleanVariableDivide);

//  7ma variabla
let allTogether = "I am the ";

if ((boleanVariable = true && boleanVariableDivide < 3)) {
  console.log(allTogether + "light");
} else {
  console.log(allTogether + "darkness");
}
