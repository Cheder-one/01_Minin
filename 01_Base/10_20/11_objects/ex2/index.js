let orders = [4, 1, 2, 3]

let patients = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" }
];

function giveTalonsInOrder (patients, orders) {
   let patientsInOrder = [];

   for (let i = 0; i < orders.length; i++) {
      let queue = orders[i];
   
      for (let j = 0; j < patients.length; j++) {
         let patientId = patients[j]['id'];
   
         if (queue === patientId) {
            patientsInOrder.push(patients[j])
         }
      }
   }
   return patientsInOrder
}
let queueOfPatientsResult = giveTalonsInOrder(patients, orders);
console.log('giveTalonsInOrder', queueOfPatientsResult);

// ---------------------------------------------------------

orders = [4, 1, 2, 3]

patients = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" }
];

function giveTalonsInOrder (patients, orders) {
   let rightQueue = [];

   for (let i = 0; i < patients.length; i++) {
      let searchElement = orders[i];

      let patientsIndex = patients.map(el => el.id).indexOf(searchElement); // INFO*

      rightQueue.push(patients[patientsIndex]);
   };
   return rightQueue
}
let queueResult = giveTalonsInOrder(patients, orders)
console.log('Patients in order:', queueResult);

// INFO* Ищем индексы элементов массива orders в другом массиве.
// Тк мы знаем что по очереди должен идти пациент № 4, затем № 1, № 2, № 3
// И знаем что индексы этих позиций очередности разбросаны в другом массиве на индексах [3, 0, 1, 2]
// Следовательно в такой последовательности и необходимо вызывать массив пациентов, для соблюдения правильной очереди  

//---------------------------------------------------------

orders = [4, 1, 2, 3]

patients = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" }
];

function giveTalonsInOrder (patients, orders) {
   let rightQueue = [];

   for (let i = 0; i < patients.length; i++) {
      let searchElement = orders[i];
      let patientsIndex = patients.findIndex(el => el.id === searchElement)
      rightQueue.push(patients[patientsIndex]);
      }
      return rightQueue
}
queueResult = giveTalonsInOrder(patients, orders)
console.log('Patients in order:', queueResult);


