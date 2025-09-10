// 📌 Block Scope vs Function Scope

function fruits() {
  if (true) {
    var fruit1 = "Apple"; // function scope
    let fruit2 = "Kiwi"; // block scope
    const fruit3 = "Banana"; // block scope
    console.log(fruit2); // ✅ accesible aquí
    console.log(fruit3); // ✅ accesible aquí
  }

  console.log(fruit1); // ✅ accesible (var es function scope)
  // console.log(fruit2); // ❌ ReferenceError
  // console.log(fruit3); // ❌ ReferenceError
}

fruits();
