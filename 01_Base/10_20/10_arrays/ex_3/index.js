/*
let coffees = ["Latte", "Cappuccino", "Americano"];

function searchCoffe() {
   let enteringCoffeeName = '   laTte'.trim(); //FIXME prompt()
   let correctedCoffeeName = enteringCoffeeName[0].toUpperCase() + enteringCoffeeName.slice(1).toLowerCase();

   let searchedCoffe = coffees.some(coffeName => {
      return coffeName == correctedCoffeeName  
   });

   if (searchedCoffe === true) {
      let searchedCoffeIndex = coffees.findIndex(coffeNameIndex => {
         return coffeNameIndex == correctedCoffeeName  
      });
         console.log(`Держите ваш любимый кофе ${correctedCoffeeName}. Он ${searchedCoffeIndex + 1}-й по популярности в нашей кофейне.`); //FIXME alert()
   } else {
      console.log(`К сожалению, такого вида кофе нет в наличии`); //FIXME alert()
   }
};
searchCoffe();
*/

//-------------Refactoring-------------

coffees = ["Latte", "Cappuccino", "Americano"];

function searchCoffe() {
   let enteringCoffeeName = prompt('Поиск кофе по названию:', '   laTte').trim();
   let correctedCoffeeName = enteringCoffeeName[0].toUpperCase() + enteringCoffeeName.slice(1).toLowerCase();

   let searchedCoffe = coffees.some(coffeName => {
      return coffeName == correctedCoffeeName  
   });

   let searchedCoffeIndex = coffees.findIndex(coffeNameIndex => {
      return coffeNameIndex == correctedCoffeeName  
   });

   if (searchedCoffe === true) {
      alert(`Держите ваш любимый кофе ${correctedCoffeeName}. Он ${searchedCoffeIndex + 1}-й по популярности в нашей кофейне.`);
   } else {
      alert(`К сожалению, такого вида кофе нет в наличии`);
   }
};
searchCoffe();

//---------------------------------------------------------
// Настоящий код

const coffees = ["Latte", "Cappuccino", "Americano"];

let favoriteCoffeeName = prompt("Поиск кофе по названию:");
favoriteCoffeeName = favoriteCoffeeName?.trim().toLowerCase();

const favoriteCoffeeIndex = coffees.findIndex(
  (coffee) => coffee.toLowerCase() === favoriteCoffeeName
);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
  alert(
    `Держите ваш любимый кофе ${favoriteCoffee}. Он ${
      favoriteCoffeeIndex + 1
    }-й по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}
