let person = {
  city: 'Moscow'
};

let student = Object.create(person);
student.ownCity = 'Piter';
student.age = 20;

showObjOwnProperties(student);

function showObjOwnProperties(obj) {
  for (let prop in obj) {
    if (student.hasOwnProperty(prop)) {
      console.log(`Ключ: ${prop}, значение: ${obj[prop]}`);
    }
  }
}