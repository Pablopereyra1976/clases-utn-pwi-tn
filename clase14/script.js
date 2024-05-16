/*
 quiero un programa que dado un nombre me muestre una alerta 3 veces 

let nombre = 'pepe'
alert(nombre)
alert(nombre)
alert(nombre)

//FOR se usa cuando queremos repetir algo x cantidad de veces (BUCLE)
/* SINTAXIS
for(let iterador(i) = valor inicial; condicion(limite); incremento(actualizacion){
    
}
LIMITE mientras mi iterador(contador) sea menor o igual a 3
*/
/*let nombre = 'pepe'
for(let i = 1; i <= 3; i++){
    console.log('me ejecuto'+i)}*/

//mostrar por alerta el conteo del 1 al 10
/*for(let i = 1; i <= 10; i++){   
    console.log(i)
    alert(i)
}
//solicitar al usuario un numero 3 veces, mostrar al final de la solicitudes un alerta que muestre la sumatoria de los 3 numeros
let suma = 0
for(let i = 1  ; i <= 3; i++){
let numero = prompt('ingrese un numero')
numero = Number(numero)
suma = suma + numero
}
console.log('resultado: ' + suma)

let frase = 0
for(i=0; i < 3; i++){
    let palabra = prompt('ingrese una palabra') 
    palabra = string(palabra)
    frase = frase + palabra
}
console.log(frase)*/

//solicitar al usuario la cantidad de personas en la clase(numero), dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
//si al cantidad de personas de clase es 5 van a solicitar 5 nombre
//luego de solicitar los nombres mostrarlos en este formato:
//lista de alumnos:
//juan pepe maria carla julieta

//aler