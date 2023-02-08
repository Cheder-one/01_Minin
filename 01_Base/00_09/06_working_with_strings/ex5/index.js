let userString = prompt('Введи текст для обрезки', 'Текст для обрезки');
userString = userString.trim()

let startSliceIndex = prompt('Введи индекс, с которого нужно начать обрезку строки', 10)
startSliceIndex = Number(startSliceIndex)

let endSliceIndex = prompt('Введи индекс, которым нужно закончить обрезку строки', '99')
endSliceIndex = Number(endSliceIndex)

let userStringCut = userString.slice(startSliceIndex, endSliceIndex)

alert(`${'Результат:' } ${userStringCut} `)