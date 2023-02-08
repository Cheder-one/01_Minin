let userText = prompt('Enter any text', 'Enter any text');
userText = userText.trim();
console.log('User text:', userText);

let wordFromText = prompt('Enter a word from the text', ' any ');
wordFromText = wordFromText.trim();
console.log('Word from text:', wordFromText);

let indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord);
userText = userText.slice(0, [indexOfWord])

alert(`${'Result:'} ${userText}`)