let person = {
  city: 'Moscow'
};

let student = Object.create(person);
student.ownCity = 'Piter';
student.age = 20;

/* Два варианта: поиск всех свойств и поиск только собственных */

console.log(hasPropertyInObj('city', student));
console.log(hasOwnPropertyInObj('city', student));

function hasPropertyInObj(prop, obj) {
  if (prop in obj) {
    return true;
  }
  
  return false;
}

function hasOwnPropertyInObj(prop, obj) {
  if (obj.hasOwnProperty(prop)) {
    return true;
  }
  
  return false;
}