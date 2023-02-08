function getTotalPrice(price, count) {
   const tax = 0.2;
   return price * count * (1 + tax); // Возвращаем результат
 }
 
 const totalPrice1 = getTotalPrice(100, 5); // Запишет: 600
 const totalPrice2 = getTotalPrice(350, 2); // Запишет: 840

console.log(totalPrice1);

////////////////// 

function getTotalPrice(price, count) {
   const tax = 0.2;
   return price * count * (1 + tax);
 }

 function showTotalPrice(price, count, showMethod) {
   showMethod(getTotalPrice(price, count));
 }

showTotalPrice(100, 5, alert); // Выведет диалоговое окно с ценой
showTotalPrice(100, 5, console.log); // Выведет цену в консоль

//////////////////

function getTotalPrice(price, count) {
   const tax = 0.2;
   return price * count * (1 + tax);
 }

showTotalPrice(100, 5, function(price) {
   alert(`Итоговая цена: ${price}`);
 });

// Or

function showPriceWithText(price) {
   alert(`Итоговая цена: ${price}`);
 }
 
 showPrice(100, 5, showPriceWithText);