let person = {
  city: 'Moscow'
};

let student = Object.create(person);
student.ownCity = 'Piter';
student.age = 20;

console.log(hasPropertyInObj('city', student));

function hasPropertyInObj(prop, obj) {
  return prop in obj;
}