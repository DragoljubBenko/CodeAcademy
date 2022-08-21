// function threeParametars where ducati i ktm have same value 300 becouse if all are different in  console.log we have false

function threeParametars(Ducati, Benelli, Ktm) {
  return Ducati == Benelli || Benelli == Ktm || Ktm == Ducati;
}
// added let threeParametarsCheck to set the value of function threeParametars and in console.log we added threeParametarsCheck
let threeParametarsCheck = threeParametars(300, 200, 300);
console.log(threeParametarsCheck);

// // added function threeParametarsModify with values 9, 4, "4" to return true instead od false
function threeParametarsModify(AstonMartin, Bentley, NIssan) {
  return AstonMartin == Bentley || Bentley == NIssan || NIssan == AstonMartin;
}

let threeParametarsCheckModify = threeParametarsModify(9, 4, "4");
console.log(threeParametarsCheckModify);

// Function that returns 30 or 31 days in alert
function checkEvenOrOddMonth(month) {
  let oddMounthDays = [1, 3, 5, 7, 8, 10, 12];
  let evenMounthDays = [4, 6, 9, 11];
  if (oddMounthDays.includes(month)) {
    return "31";
  } else if (evenMounthDays.includes(month)) {
    return "30";
  }
}
alert(checkEvenOrOddMonth(10));
