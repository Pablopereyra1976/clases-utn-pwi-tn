/*document.getElementById("formulario")
.addEventListener('submit', (event) => { 
    event.preventDefault()
    const email = document.getElementById("email").value
    console.log(email)

const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

if(!email || !validarEmail.test(email) || email.includes(".com ")){
    alert("es un email incorrecto");
}else{
    alert("email enviado correctamente");
}
})

/*solicitar al usuario la cantidad de personas en la clase(numero), dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
//si al cantidad de personas de clase es 5 van a solicitar 5 nombre
//luego de solicitar los nombres mostrarlos en este formato:
//lista de alumnos:
//juan pepe maria carla julieta 

let cantidadPersonas = prompt("ingrese la cantidad de personas");
cantidadPersonas = Number(cantidadPersonas);
for (let i = 1; i <= cantidadPersonas; i++) {
    let nombre = prompt("ingrese el nombre de la persona " + i);
    nombre = nombre.toUpperCase();
    document.write("<br><li>" + nombre + "</li><br>");
}*/

function calcularDescuento(monto) {
  let descuento = 0;

  if (monto > 100) {
    descuento = 0.2;
    alert("el descuento es del 20%: ");
  } else if (monto >= 50) {
    descuento = 0.1;
    alert("el descuento es del 10%");
  } else {
    descuento = 0.0;
    alert("no hay descuento");
  }
  let montoFinal = monto - monto * descuento;
  alert("el monto final es: " + montoFinal);
}

calcularDescuento(prompt("ingrese el monto"));
