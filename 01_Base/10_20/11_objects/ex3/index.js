const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript"
};

function handleObject (obj, key, action) {
   if (action === 'get') {
      return obj[key]
   } else if (action === 'add') {
      obj[key] = '';
      return obj
   } else if (action === 'delete') {
      delete obj[key];
      return obj
   } else {
      return obj
   }
}

let add = handleObject(student, "Library", 'add');
console.log('add:', add);

let get = handleObject(student, "name", 'get');
console.log('get:', get);

let del = handleObject(student, "programmingLanguage", 'delete');
console.log('delete:', del);

let other = handleObject(student, "programmingLanguage", 'other');
console.log('other:', other);


function handleObject (obj, key, action) {
   switch (action) {
      case 'get':
         return obj[key]
      case 'add':
         obj[key] = '';
         return obj
      case 'delete':
         delete obj[key];
         return obj
      default:
         return obj
   }
}