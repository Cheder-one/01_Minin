//Cyclec
console.log('//Cycles//');

// for () {}
console.log('//for//');

/*for (начальное значение; условие (до тех пор пока); шаг) {
   ... тело цикла ...
}*/

for (let x = 0; x <= 10; x += 1) {
   console.log('x = ', x);
}

for (let value = 10; value >= 0; value -= 1) {
   console.log('value = ', value);
}

// while - сначала думает (смотрит условие), потом делает
console.log('//while//');

// while (условие) {}
let i = 0;
while (i < 10) {
   i += 1;
   console.log('i = ', i);
}

// do while - сначала делает, потом думает (смотрит условие)
console.log('//do while//');

let y = 0;

do {
   y += 1
   console.log('y = ', y);
} while (y <= 5) // Выдаст 6, начав с 1 (тк сначала делает, а потом проверяет. Важна последовательность)

let y2 = 0;

do {
   console.log('y2 = ', y2);
   y2 += 1
} while (y2 <= 5) // Выдаст 5, начав с 0 

// break 
console.log('//break//');

let z = 0;
while (z < 10) {
  console.log(z);
	
  if (z === 3) break;

  z++;
}

/* Остановится на 3х
  Выведет:
  0
  1
  2
  3
*/

// continue 
console.log('//continue//');

for (let f = 0; f <= 5; f++) {
   if (f === 2) continue;
   console.log(f);
}
/* Пропустит 2
  Выведет:
  0
  1
  3
  4
*/