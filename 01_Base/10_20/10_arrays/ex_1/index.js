const arrayPeopleWaiting = [
   "Кристина",
   "Олег",
   "Кирилл",
   "Мария",
   "Светлана",
   "Артем",
   "Глеб",
];

function calculatePeopleWaiting (peopleWaiting) {

   let numberGotParcel = peopleWaiting.slice(0, 3).length;
   let numberNotGotParcel = peopleWaiting.length - numberGotParcel;

   function giveParcelAndDelete () {
      for (let i = 0; i < numberGotParcel; i++) {
         const visitorLeaveName = peopleWaiting.shift();
         console.log(`${visitorLeaveName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`);
      };
   };
   giveParcelAndDelete();

   function leaveQueueWithoutParcel () {
      for (let i = 0; i < numberNotGotParcel; i++) {
         const visitorLeaveName = peopleWaiting.pop();
         console.log(`${visitorLeaveName} не получил(а) посылку и ушел(ла) из очереди.`);
      };
   };   
   leaveQueueWithoutParcel();

};
calculatePeopleWaiting(arrayPeopleWaiting);
