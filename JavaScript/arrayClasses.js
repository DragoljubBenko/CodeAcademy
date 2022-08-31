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
// clasi new

class Car {
  constructor(brand, year, horsepower) {
    this.brand = brand;
    this.year = year;
    this.horsepower = horsepower;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  // kako da napravam da tie sto imaat nad 67 godini nemozat voopsto da vozat kola?
  canDrive() {
    for (let i = 0; i < this.year.length; i++) {
      if (this.year[i] > 67 && this.year[i] < 25) {
        console.log(`${this.brand[i]} can drive.`);
      }
      if (this.year[i] < 25 && this.year[i] > 18) {
        console.log(
          `${this.brand[i]} can drive only cars with up to 105 horsepower.`
        );
      }
      if (this.year[i] < 18) {
        console.log(`${this.brand[i]} is not allowed to drive.`);
        {
          if (this.year[i] < 67) {
            console.log(`${this.brand[i]} is old  to drive.`);
          }
        }
      }
    }
  }
}
// Age of the car 
// kako da napravam niza od koli kako ovaa new Car("Ferrari", 2010, "150hp");
//  i na nizata da gi dodadam iminjata na drivers so kolite sto mozat da gi vozat spored hp?

let how_old_is_the_car = new Car("Ferrari", 2010, "150hp");
console.log(how_old_is_the_car.age());

let drivers = [
  { vozac: "Martin Ivanovski", godini: 21 },
  { vozac: "Marko Ilic", godini: 31 },
  { vozac: "Kiraca Petreska", godini: 69 },
  { vozac: "Petar Markovski", godini: 17 },
];

let imeNaVozac = drivers.map(function (name) {
  return name.vozac;
});
let godiniNaVozac = drivers.map(function (age) {
  return age.godini;
});
let dozvolaZaVozenje = new Car(imeNaVozac, godiniNaVozac);
dozvolaZaVozenje.canDrive();
