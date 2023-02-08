document.addEventListener("DOMContentLoaded", function()
{
   function createParagraph() {
      let para = document.createElement('p');
      para.textContent = 'По носу себе потыкай';
      document.body.appendChild(para)
   }

   const buttons = document.querySelectorAll('button');

   for (let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
   }
})

function createParagraph() {
   let para = document.createElement('p');
   para.textContent = 'You clicked the butt!';
   document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
   buttons[i].addEventListener('click', createParagraph);
}
