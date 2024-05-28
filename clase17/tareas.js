
/*let emailUsuario = prompt('ingrese su email')
function loginEmail(emailUsuario) {
    while (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailUsuario))) {
        alert('error: DATO NO VALIDO')
        emailUsuario = prompt('ingrese su email')
    }
    alert('DATO CORRECTO')

}
loginEmail(emailUsuario)


let passwordUsuario = prompt('ingrese su password')
function loginPassword(passwordUsuario) {

    while (passwordUsuario === null ||passwordUsuario.length > 6 && passwordUsuario === '') {
        alert('error: DATO NO VALIDO')
        passwordUsuario = prompt('ingrese su password')
        alert('CONTRASEÑA CORRECTA')
    }
    
}

loginPassword(passwordUsuario)



function login(){
    let email = emailUsuario()
    let password = passwordUsuario()
    return {email: email, password: password}
}
console.log(login)

function loginPassword(passwordUsuario){    

while(passwordUsuario === null || passwordUsuario.length > 6 && passwordUsuario === '')
    alert('error: DATO NO VALIDO')
    passwordUsuario = prompt('ingrese su password')
    alert('CONTRASEÑA CORRECTA')}*/


let operacion = prompt('ingrese la operacion + o -')
while(operacion !== '+' && operacion !== '-'){
    alert('error: DATO NO VALIDO')
    operacion = prompt('ingrese la operacion + o -')
}

let num1 = parseFloat(prompt('ingrese tu primer numero'))
while(isNaN(num1) && num1 === ''){
    alert('error: NO ES VALIDO')
    num1 = parseFloat(prompt('ingrese tu primer numero'))
}
let num2 = parseFloat(prompt('ingrese tu segundo numero'))
while(isNaN(num2) && num2 === ''){
    alert('error: NO ES VALIDO')
    num2 = parseFloat(prompt('ingrese tu segundo numero'))
}   

function calculadora() {         
    if (operacion === '+') {
    return num1 + num2
}
    if (operacion === '-') {
    return num1 - num2
}
}

alert(calculadora())


