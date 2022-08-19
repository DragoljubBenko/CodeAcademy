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
