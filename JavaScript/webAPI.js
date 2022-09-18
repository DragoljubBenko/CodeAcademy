function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "input ok";
  }
}
function myFunction2() {
  let text = "input ok";
  if (document.getElementById("id2").validity.patternMismatch) {
    text = "pattern is not matched. enter only 7 letters";
  }
  document.getElementById("demo2").innerHTML = text;
}
function myFunction3() {
  let text = "input mail";
  if (document.getElementById("id3").validity.patternMismatch) {
    text = "pattern is not matched. enter correct email adress";
  }
  document.getElementById("demo3").innerHTML = text;
}

// name and surname local storage(available anytime, anywhere)  and sesion storage(it have expiration date)
let userName = "Dragoljub Benko ";
localStorage.setItem("name", userName);
sessionStorage.setItem("name", userName);
localStorage.removeItem("name");
//  localStorage.setItem("age", myFunctionAge())

let userNameLS = localStorage.getItem("name");
let userNameSS = sessionStorage.getItem("name");
console.log(userNameLS);

function SetAge() {
  let age = prompt("Enter your age");
  let fName = prompt("Your full name");
  localStorage.setItem("age", age);
  sessionStorage.setItem("name", fName);
}

// copy paste function to fetch data text
async function getText() {
  let response = await fetch("wikiFirstText.txt");
  console.log(response);
  let data = await response.text();

  console.log(data);
}
getText();

async function getSecondText() {
  let response = await fetch("wikiSecondText.txt");
  let data = await response.text();
  console.log(data);
  // da se prikaze fetch textot vo html dokumentot
  // document.getElementById("demo3").innerHTML = data;
}
getSecondText();
