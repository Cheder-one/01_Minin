let sum = 0;
for (let i = 0; i <= 100; i += 1) {
   console.log(i);
   sum += i;
}

alert(sum);

let sum2 = 0;
let x = 0;
   while (x < 100) {
      x += 1;
      console.log('x = ', x);
      sum2 += x;
   }

alert(sum2); // 5151 Whyyyy?
