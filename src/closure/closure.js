// 📌 Closure básico
// Una función interna recuerda el contexto (variables) donde fue creada

function greeting() {
  let username = "Oscar"; // variable interna

  function displayUserName() {
    // función interna accede a username
    return `Hello ${username}`;
  }
  return displayUserName;
}

const g = greeting(); // g guarda la función interna
console.log(g); // muestra la definición de la función
console.log(g()); // ejecuta la función -> "Hello Oscar"
