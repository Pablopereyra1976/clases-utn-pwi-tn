// FUNCIONES

/*function sumar2mas2(){
    let x = 2
    let y = 2
    let suma = x + y
    console.log(suma)
}
sumar2mas2()
sumar2mas2()

SINTAXIS
function sumar(a,b){
    console.log(a+b)
}
sumar(5,8)

function saludar(nombre){
    console.log('hola ' + nombre)
}
saludar('juan')

function resta(a,b){   RETURN
    return a - b
}
let num1 = 10
let num2 = 5
let resultado = resta(num1,num2)
console.log(resultado)


CALCULAR IVA
 
function calcularIva(precio){
    return precio*0.21
}
let precio = 2130
let resultado = calcularIva(precio)
console.log('el iva es ' + resultado)
alert('el iva es ' + resultado)

CALCULAR MINUTOS

function calcularMinutos(horas){
    return horas*60
}
let horas = 1
let resultado = calcularMinutos(horas)
console.log('los minutos son ' + resultado)

function obtenerNumero(){
    let num = prompt('ingrese un numero')
    while(!num || isNaN(num)){
        num = prompt('ingrese un numero')
    }
    num = Number(num)
    return num
}
alert(obtenerNumero())

//PARA REEMPLAZAR

let sumatoria = 0 
let cantidad_de_repeticion = prompt('Ingresa cuantos numeros vas a sumar')
while(!cantidad_de_repeticion || isNaN(cantidad_de_repeticion)){
    cantidad_de_repeticion = prompt('ERROR: vuelve a ingresar el numero')
}
for(let iterador = 1; iterador <= cantidad_de_repeticion; iterador = iterador + 1){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('ERROR: vuelve a ingresar el numero')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert('Resultado: ' + sumatoria)

string.length: longitud del string(propiedad de string)
ej: pepe.length = 4
property: length

method: string.toLowerCase() = pasa a minuscula
method: string.toUpperCase() = pasa a mayuscula
method: string.trim() = elimina los espacios
method: string.includes() = devuelve true o false verifica si el string buscado esta dentro del string
method: string.replaceAll() = reemplaza un string por otro
method: string.repeat() = repite el string

console.log('pepe'.length)
console.log('pepe'.toLowerCase())
console.log('pepe'.toUpperCase())
console.log(' pepe es genio  '.trim())
console.log('pepe'.includes('pe'))
console.log('pepe'.replaceAll('p','j'))
console.log('pepe'.repeat(3))

let contra = 'pepe123'
console.log('*'.repeat(contra.length))
*/

