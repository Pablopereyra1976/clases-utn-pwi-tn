/*eventos  js reconoce todo como objetos

function alertar() {
    alert("Bienvenido")   
}

const btnClick2 = document.getElementById("btn-especial") //devuelve un objeto
btnClick2.onclick = alertar

btnClick2.onclick = function(){
    alert("Hola desde un evento click")
}
const btnClick = document.querySelector("btn")

const btn_click_3 = document.getElementsByClassName(".btn") // devuelven tipos de arrays/coleccion
btn_click_3.innerText = 'hola'
alert(btn_click_3)
 formas validas serian por ID y QUERYSELECTOR


addEventListener es un metodo para añadir un evento
function alertar() {
    alert("Bienvenido")   
}
const btnClick2 = document.getElementById("btn-especial")
btnClick2.onclick = alertar

btnClick2.addEventListener('click', alertar)
btnClick2.addEventListener('click', function(){
    alert("Hola desde un evento click")})

    const alertar2 = () => alert('hola')
     //van a abreviar la funcion en fecha cuando su funcion no haga muchas
    //acciones, o que directamente la funcion retorne
    //ej function hacerTarea (){
let tipo = prompt('que tipo de tarea quieres hacer')
guardarTarea(tipo) 
return tipo    
}

function calcularIva (iva){
return iva * 0.21
}

const validarNumero = (numero) => {Boolean(numero) && !isNaN(numero)}
console.log(validarNumero('hola'))

const solicitarDato = (solicitud) =>{
let dato = (prompt('ingrese un numero' + solicitud))
while(!dato){
    dato = prompt('error:ingrese un numero' + solicitud)
}
return dato
}
const btnClick2 = document.getElementById("btn-especial")
//btnClick2.addEventListener('click', function(){
//  alert("Hola desde un evento click")
//})
btnClick2.addEventListener('click', () => {
    console.log('hola')
})
// el array con los objetos
const personas = [
    {
        nombre: 'pepe',
        edad: 18
    },
    {
        nombre: 'juan',
        edad: 20
    },
    {
        nombre: 'maria',
        edad: 16
    }
]
const mayoresDeEdad = personas.filter((persona) => persona.edad >= 18)
console.log(mayoresDeEdad)*/

const formularioHTML = document.getElementById('formulario')
const handlesubmit = (evento) => {
    evento.preventDefault()
    console.log(formularioHTML.dato)
    console.dir(formularioHTML.dato.value)
    console.log(evento)
}
formularioHTML.addEventListener('submit', handlesubmit)
