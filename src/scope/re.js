// 📌 Var, Let y Const

// var permite redeclaración y reasignación
var firstName; // undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // declarar y asignar
lastName = "Ana"; // reasignar
console.log(lastName);

var secondName = "David";
var secondName = "Ana"; // redeclaración ✅ permitida con var
console.log(secondName);

// let permite reasignar pero NO redeclarar
let fruit = "Apple";
fruit = "Kiwi"; // ✅ reasignar
// let fruit = 'Banana'; // ❌ redeclarar no permitido
console.log(fruit);

// const no permite reasignar ni redeclarar
const animal = "dog";
// animal = 'cat'; // ❌ error
console.log(animal);

const vehicles = [];
vehicles.push("auto"); // ✅ mutar estructuras internas
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
