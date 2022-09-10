// kolku pati se povtoruva brojot 123 so pomos na .filter i vo console.log da se ispise
// const niza = [1, 2, 23, 123, 3, 2, 123, 321, 123];
let arr = [1, 2, 23, 123, 3, 2, 123, 321, 123];
console.log(arr.filter((nizaprimer) => nizaprimer === 123).length);
// so .JOIN se spojuvaaat site zborovi vo nizata kako vo primerot
let spojuvanje_na_stringovi_ili_broevi = [
  "L",
  "u",
  "k",
  "a",
  " ",
  "D",
  "o",
  "n",
  "c",
  "i",
  "c",
];
console.log(spojuvanje_na_stringovi_ili_broevi.join(""));

let ime = "Dragoljub";
let prezime = "Benko";
if (ime === "Dragoljub" && prezime === "Benko") {
  console.log("toa e toa");
} else {
  console.log("nisto od toa");
}

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.unshift("Lemon");
console.log(fruits1);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.unshift("Lemon", "Orange");
console.log(fruit);
