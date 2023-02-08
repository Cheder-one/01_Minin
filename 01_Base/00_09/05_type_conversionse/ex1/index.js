let catName = 'Marysa';
console.log(Number(catName), Boolean(catName), String(catName));

let catAge = 8;
console.log(Number(catAge), Boolean(catAge), String(catAge));

let itsaCat = true;
console.log(Number(itsaCat), Boolean(itsaCat), String(itsaCat));

let dog;
console.log(Number(dog), Boolean(dog), String(dog));  

let catMarysa = {
   have5legs: false,
   whatDoesSheSay: 'Miay',
   wantsToEataDay: 999n,
   eatsaDay: 5,
   kittens: null,
};
console.log(Number(catMarysa), Boolean(catMarysa), String(catMarysa));

let sumbolCat = Symbol('tabby cat');
console.log(Object(sumbolCat), Boolean(sumbolCat), String(sumbolCat));

let myProductivity = null;
console.log(Number(myProductivity), Boolean(myProductivity), String(myProductivity))

let bigint = 1n;
console.log(Number(bigint), Boolean(bigint), String(bigint));