// class Dictionary {
//     constructor (name) {
//         this.name = name;
//         this.words = {};
//     }

//     add (word, description) {
//         !Object.keys(this.words).includes(word) 
//         ? this.words = {
//             ...this.words,
//             [word]: {word, description}
//         }
//         : console.log(`Слово ${word} уже существует`);
//     }

//     remove (key) {
//         delete this.words[key]
//     }

//     get (key) {
//         return this.words[key]
//     }

//     showAllWords () {
//         Object.values(this.words).forEach(el => {
//             console.log(el.word, '-', el.description);
//         });
//     }
// }

//-------------Refactoring-------------
class Dictionary {
    constructor (name) {
        this.name = name;
        this.words = {};
    }
    
    add (word, description) {
        if (!(word in this.words)) {
            this.words[word] = {
                word, 
                description,
            }
        }
    }

    // add (word, description) {
    //     if (!this.words.hasOwnProperty(word)) {
    //         this.words[word] = {
    //             word, 
    //             description,
    //         }
    //     }
    // }

    remove (key) {
        delete this.words[key]
    }

    get (key) {
        return this.words[key]
    }

    showAllWords () {
        for (const el in this.words) {
            console.log(el, '-', this.words[el].description);
        }
    }
}

const dictionary = new Dictionary('Словарь')

dictionary.add('js', 'язык программирования')
dictionary.add('css', 'язык стилей')
dictionary.add('js', 'перезапись!')
dictionary.add('cpss', 'язык коммунизма')

let get = dictionary.get('cpss')
console.log('get:', get);

dictionary.remove('cpss')
dictionary.showAllWords();

//-------------Нормальное решение-------------
// class Dictionary2 {
//     constructor(name) {
//       this.name = name;
//       this.words = {};
//     }
  
//     add(word, description) {
//         console.log('this.words[word]:', !(this.words[word]));
//       if (!this.words[word]) {
//         this.words[word] = {
//           word,
//           description
//         };
//       }
//     }
  
//     remove(word) {
//       delete this.words[word];
//     }
  
//     get(word) {
//       return this.words[word];
//     }
  
//     showAllWords() {
//       Object.values(this.words).forEach((wordItem) => {
//         console.log(`${wordItem.word} - ${wordItem.description}`);
//       });
//     }
//   }
  
//   const dictionary2 = new Dictionary2("Толковый словарь");
//   dictionary2.add("JavaScript", "популярный язык программирования");
//   dictionary2.add(
//     "Веб-разработчик",
//     "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
//   );
  
//   dictionary2.remove("JavaScript");
//   dictionary2.showAllWords();
//   // Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие