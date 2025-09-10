// 📌 Global Scope

var fruit = "Apple"; // variable global

function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = "Colombia"; // ❌ crea una variable global de forma implícita
  console.log(country);
}
countries();
