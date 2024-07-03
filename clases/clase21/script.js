const formLoginHTML = document.getElementById("form-login");
const formRegisterHTML = document.getElementById("form-register");

formLoginHTML.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("se envio el formulario");
    console.log(formLoginHTML.username.value)
    //const username = document.getElementById("username").value;
    //console.log(username);
})

formRegisterHTML.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("se envio el formulario");
    const formulario = event.target
    const username = formulario.username.value
    console.log(formulario.username.value)
    console.log(formRegisterHTML.username.value)
    if (username.length < 4) {
        const errorTextHTML = document.getElementById("error-text-username")
        errorTextHTML.innerText = "el nombre de usuario debe tener al menos 4 caracteres"
    }
    
})

//quiero llamar al input username

/*  
camara.addEventListener("entrar", (event) => {
    el evento recibido es un objeto de informacion:
    quien entro
    a que hora
    sexo
    color pelo
})


******************************************************    
codigo mati
******************************************************

  formLoginHTML.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("se envio el formulario");
    console.log(formLoginHTML.username.value)  

  })

  <form id="form-login">
        <div>
            <label>Ingrese nombre de usuario:</label>
            <input name="username" id="username" type="text" value="pepe" >
            <span id="error-text-username" class="errorText"></span>
        </div>
        <button type="submit">Login</button>
    </form>
    <form id="form-register">
        <div>
            <label>Ingrese nombre de usuario:</label>
            <input name="username" id="username-register" type="text" value="pepe" >
        </div>
        <button type="submit">Registrar</button>
    </form>
*/
/*username tiene que tener una mayuscula, y un '-' y almenos 4 caracteres
password tiene que tener una mayuscula y un '#'
email Debe ser email (usar la expresion regular)
Si el error el multiple EJEMPLO, el username y el password esta mal, tirara 2 textos, es decir cada input tendra su posibilidad de fallar
Si esta todo bien por consola diran 'exito'

*******************************************************************************************************
codigo santy
*******************************************************************************************************

const formLoginHTML = document.getElementById('login');
const errorTextHTML = document.getElementById('error-username');
const errorTextHTML2 = document.getElementById('error-password');
const errorTextHTML3 = document.getElementById('error-email');

const validarUsername = (username) => {
    return /[A-Z]/.test(username) && /-/.test(username) && username.length >= 4;
};

const validarPassword = (password) => {
    return /[A-Z]/.test(password) && /#/.test(password) && password.length >= 4;
};

const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleLogin = (evento) => {
    evento.preventDefault();
    const formulario = evento.target;
    const username = formulario.username.value;
    const password = formulario.password.value;
    const email = formulario.email.value;

    errorTextHTML.innerText = '';
    errorTextHTML2.innerText = '';
    errorTextHTML3.innerText = '';

    let valido = true;

    if (!validarUsername(username)) {
        errorTextHTML.innerText = 'Error: El nombre de usuario debe tener al menos 4 caracteres, una mayúscula y un guion (-).';
        valido = false;
    }

    if (!validarPassword(password)) {
        errorTextHTML2.innerText = 'Error: La contraseña debe tener al menos 4 caracteres, una mayúscula y un símbolo "#".';
        valido = false;
    }

    if (!validarEmail(email)) {
        errorTextHTML3.innerText = 'Error: El email no es válido.';
        valido = false;
    }
        if (valido) {
        console.log('Éxito');
    }
};

formLoginHTML.addEventListener('submit', handleLogin);

*******************************************
codigo mati avanzado
*******************************************

const validarMayuscula =(texto) =>{
    let textoMinuscula = texto.toLowerCase()
    return textoMinuscula !== texto
}

const VALIDACIONES = {

    password: {
        validacion:(texto) => texto && texto.includes('#') && validarMayuscula(texto),
        errorText: 'La password es incorrecta'
    },
    email: {
        validacion: (email) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)),
        errorText: 'El email es incorrecto'
    },
    username: {
        validacion: (texto) => texto && texto.includes('-') && validarMayuscula(texto),
        errorText: 'El username es incorrecto'
    }

}


const obtenerValoresFormulario = (formulario) => {
        
    const inputs = ['username', 'password', 'email']
    const inputsInfo = {}
    for(let input of inputs){
        const spanErrorHTML = formulario.querySelector('.error-text-' + input)
        const valor = formulario[input].value
        inputsInfo[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            errorText: VALIDACIONES[input].errorText,
            valor: valor
        }
    }
    return inputsInfo
}


const formLoginHTML = document.getElementById('form-login')


const handleSubmit = (evento) =>{
    evento.preventDefault()
    const formulario = evento.target
    const valoresFormulario = obtenerValoresFormulario(formulario)
    console.log(valoresFormulario)
    for(const propiedad in valoresFormulario){
        const objetoInputFormulario = valoresFormulario[propiedad]
        if(!objetoInputFormulario.validacion(objetoInputFormulario.valor)){
            objetoInputFormulario.errorHTML.innerText = objetoInputFormulario.errorText
        }
        else{
            objetoInputFormulario.errorHTML.innerText = ''
        }
        
    }
}

formLoginHTML.addEventListener('submit', handleSubmit)

Reaccionar

Responder
*/