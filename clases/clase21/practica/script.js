/*const formulario = document.getElementById("form");
const errorTextHTML = document.getElementById("error-text-username");
const errorTextHTML2 = document.getElementById("error-text-password");
const errorTextHTML3 = document.getElementById("error-text-email");

const validarUsername = (event) => {    
    const username = event.target.value;
    if (!/[A-Z]/.test(username) || !/-/.test(username) || username.length < 4) {
        errorTextHTML.innerText = "el nombre de usuario debe tener al menos 4 caracteres, una mayúscula y un guion (-).";
    } else {
        errorTextHTML.innerText = "";
    }
};


const validarPassword = (event) => {
    const password = event.target.value;
    if (!/[A-Z]/.test(password) || !/#/.test(password) || password.length < 4) {
        errorTextHTML2.innerText = "la contraseña debe tener al menos 4 caracteres, una mayúscula y un (#).";
    } else {
        errorTextHTML2.innerText = "";
    }
};

const validarEmail = (event) => {
    const email = event.target.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorTextHTML3.innerText = "el email no es valido";
    } else {
        errorTextHTML3.innerText = "";
    }
};
const handleLogin = (event) => {
    event.preventDefault();
    const formulario = event.target;
    const username = formulario.username.value;
    const password = formulario.password.value;
    const email = formulario.email.value;
}


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("se envio el formulario");
});
   */
document.getElementById("btn").addEventListener("click", function (event) {
    

    const password = document.getElementById("password").value;
    const errorText = document.getElementById("error-text-password");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;
    errorText.innerText = "";
    if (!regex.test(password)) {
        event.preventDefault;
        errorText.innerText = "la contraseña debe tener al menos 4 caracteres, una mayúscula y un (-).";

    } else {
        errorText.innerText = "la contraseña es correcta";
    }

});

/*ejercicio de clase21:
Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123'
*/