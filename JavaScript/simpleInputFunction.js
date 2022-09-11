// function myFunction() {
//   const message = document.getElementById("demo");
//   message.innerText = "da ima";

//   try {
//     if (currentInput.length < 0) throw "nekoja vrednost";
//     if (currentInput.length > 4) throw "ok";

//     if (currentInput.length < 4) throw "poveke od 4 vrednosti";
//   } catch (err) {
//     message.innerHTML = "Input is " + err;
//   }
// }
// console.log(currentInput);
function errorMessage() {
  let error = document.getElementById("errorNumber");
  if (isNaN(document.getElementById("number").value)) {
    // Changing HTML to draw attention
    error.innerHTML =
      "<p style='color: red;'>" + "Please enter a valid number</p>";
  } else {
    alert("OK");
    error.innerHTML = "";
  }
}
// ovaa funkcija ne se pojavuva kako error
function errorMessages() {
  let errors = document.getElementById("errorText");
  if (!isNaN(document.getElementById("text1").value)) {
    // Changing HTML to draw attention
    errors.innerHTML =
      "<p style='color: red;'>" + "Please enter a valid text</p>";
  } else {
    alert("OK");
    errors.innerHTML = "";
  }
}
