const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay", libraryID: 3245 },
];
// with .map selected in new array author names
let authorsNames = library.map(function (imetoNaAvtorot) {
  return imetoNaAvtorot.author;
});
console.log(authorsNames);
// same function  but .sort added to sort the title of the books
let titleNewArray = library.map(function (naslovNaKnigaSortiran) {
  return naslovNaKnigaSortiran.title;
});
titleNewArray.sort();
console.log(titleNewArray);
// id function that returns true for the .map transform
// let id = library.map(function (findID)

// with find it gives only book with the id that we needed
let id = library.find(function (findID) {
  return findID.libraryID === 1254;
});
console.log(id);
