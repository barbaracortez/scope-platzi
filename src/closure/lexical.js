// 📌 Lexical Scope
// Las funciones anidadas pueden acceder a variables de su contexto externo

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log("myFunction ->", myGlobal);

  function parent() {
    const inner = 2;
    console.log("parent ->", myNumber, myGlobal);

    function child() {
      console.log("child ->", inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();
