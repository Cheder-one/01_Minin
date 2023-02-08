function sum(...other) {
   console.log(other.reduce((acc, value) => acc + value)); 
}

sum(1, 2, 3);  // 6
sum(2, 2); // 4
sum(10, 15, 249, 653, 846); // 1773