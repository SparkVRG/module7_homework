let obj = createObjWithoutPrototype();

console.log(Object.getPrototypeOf(obj));

function createObjWithoutPrototype() {
  return Object.create(null);
}