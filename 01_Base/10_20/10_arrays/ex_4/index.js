const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

let updatedPrices =  prices.map(prices => {
   return prices + 0.5
}); 

coffees.forEach((name, i) => {
   alert(`Кофе ${name} сейчас стоит ${updatedPrices[i]} евро`);
});
