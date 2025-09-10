# 📘 Curso Práctico de JavaScript – Scope & Closures  

Este repositorio contiene ejemplos prácticos sobre **alcance de variables (scope)** y **closures** en JavaScript.  
Cada archivo muestra un concepto específico con código comentado.  

---

## 📂 Contenido del repositorio

### 🔹 1. Closure
- **`closure.js`** → Ejemplo de **closure**: una función que recuerda el contexto en el que fue creada.  
- **`lexical.js`** → Ejemplo de **lexical scope**, funciones anidadas que acceden a variables externas.  
- **`mymoneybox.js`** → Ejemplo de closure aplicado a un caso real: un contador de monedas.  

### 🔹 2. Scope
- **`block.js`** → Diferencias entre **function scope** (var) y **block scope** (let/const).  
- **`function.js`** → Variables locales dentro de una función.  
- **`global.js`** → Variables globales y problemas con variables implícitamente globales.  
- **`re.js`** → Diferencias entre `var`, `let` y `const`.  
- **`strict.js`** → Uso de **Strict Mode** para prevenir malas prácticas.  

---

## 📖 Ejemplos principales

### 🔹 Closure
```js
function greeting() {
  let username = "Oscar";

  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g()); // "Hello Oscar"
