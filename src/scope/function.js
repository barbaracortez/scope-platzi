// 📌 Function Scope
// Las variables definidas dentro de una función solo existen allí

function greeting() {
  let userName = "Ana"; // variable local
  console.log(userName);

  if (userName === "Ana") {
    console.log(`hello ${userName}`);
  }
}

greeting();
