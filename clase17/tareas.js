let emailUsuario = prompt("ingrese su email");
function loginEmail(emailUsuario) {
  while (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailUsuario)) {
    alert("error: DATO NO VALIDO");
    emailUsuario = prompt("ingrese su email");
  }
  alert("El Email " + emailUsuario + " se ha  registrado con exito");
}

loginEmail(emailUsuario);

let passwordUsuario = prompt("Ingrese su password");

function loginPassword(passwordUsuario) {
  while (
    passwordUsuario === null ||
    passwordUsuario.length <= 6 ||
    (passwordUsuario.trim() === "" ||
     !/[A-Z]/.test(passwordUsuario) || 
     !/[0-9]/.test(passwordUsuario))
  ) {
    alert('Error: La contraseña debe tener al menos 6 caracteres, incluir una letra mayúscula y un número.');
    passwordUsuario = prompt("Ingrese su password");
  }
  alert("La contraseña " + passwordUsuario + " se ha registrado con exito");
}

loginPassword(passwordUsuario);

function login() {
  let email = emailUsuario();
  let password = passwordUsuario();
  return {
    email: email,
    password: password,
  };
}
console.log(login);

let operacion = prompt("ingrese la operacion + o -");
while (operacion !== "+" && operacion !== "-") {
  alert("error: DATO NO VALIDO");
  operacion = prompt("ingrese la operacion + o -");
}

let num1 = parseFloat(prompt("ingresa tu primer numero"));
while (isNaN(num1) && num1 === "") {
  alert("error: NO ES VALIDO");
  num1 = parseFloat(prompt("ingresa tu primer numero"));
}
let num2 = parseFloat(prompt("ingresa tu segundo numero"));
while (isNaN(num2) && num2 === "") {
  alert("error: NO ES VALIDO");
  num2 = parseFloat(prompt("ingresa tu segundo numero"));
}

function calculadora() {
  if (operacion === "+") {
    return "El resultado de esta operacion es: " + (num1 + num2);
  }

  if (operacion === "-") {
    return "El resultado de esta operacion es: " + (num1 - num2);
  }
}

alert(calculadora());



function renderizarHistorial() {
  let historial = document.getElementById("historial");
  historial.innerHTML = historial.innerHTML + "<li>" + calculadora() + "</li>";
}

renderizarHistorial(historial);
