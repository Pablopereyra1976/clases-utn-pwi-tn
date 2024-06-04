/*alert("hola")

//document es una variable global de JS que representa como objeto a nuestro HTML
//dom - document object model
console.dir(document)

// metodo que nos permite tener un elemento por su id, si lo encuentra lo retorna sino retorna null
const titulo = document.getElementById("title")
const subtitulo = document.getElementById("subtitle")
console.dir(titulo)
console.dir(subtitulo)

titulo,innerText = "hola"    //modificamos el valor del elemento - inner es una propiedad (innertext/innerHTML)

const caja = document.getElementById("producto")
//caja.innertext = '<h1>TV Samsung</h1>'
caja.innerHTML = '<h1>TV Samsung</h1>'

const productos = {
    nombre: "TV Samsung",
    precio: 1000,
    color: "negro",
    }

caja.innerHTML = `
<h1>${productos.nombre}</h1>
<span>precio: $${productos.precio}</span>
<p> color: ${productos.color}</p>
<button>Comprar</button>
`
// asi se crea un elemento
const buttonproduct = document.createElement("button")
const cajaUser = document.getElementById("user")
const user = {
    username: 'pepito',
    password: '1234',
    addres: 'calle falsa 123',
    email: 'pepito@pepito',
}


/* 
Generar a partir del usuario el sig html

h2 username
span password
adress input (y el valor debe ser la direccion),
span input (y el valor debe ser el email)



cajaUser.innerHTML = `
<div>username: ${user.username}</div>
<div>password: ${user.password}</div>
<div>addres: ${user.addres}</div>
<input type="email" value="${user.email}"><div>email: ${user.email}</div>
<button>Comprar</button>
`
const products = [
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    }
   
]
const productsContainerHTML = document.getElementById('products-container')


let productsList = ''

for(const producto of products){
    
    productsList = productsList +  `
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
        <div>
            <input value='${producto.precio}'>
            <button>comprar</button>
        </div>
    `

}

productsContainerHTML.innerHTML = productsList*/


const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]

/* Renderizar el historial, cada elemento de historial debe seguir la sig estructura:

<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div>


const historialProductosHTML = document.getElementById('products-Container')

let historialList = ''

for (const historial of historial) {

    historialList = historialList + `
        <div>
            <span><b>ID: #${producto.id}</b></span>
            <h3>${producto.nombre}</h3>
            <span>Fecha: ${producto.fecha}</span>
            <br>
            <hr>
        </div>
    `;
}
historialProductosHTML.innerHTML = historialList;

***************************************************************


const historialHTML= document.getElementById("historial")
let elementosHistorial = " "
for (elemento of historial){
    elementosHistorial = elementosHistorial +
    `
    <hr>
    <div>
        <span> <b> ID: ${elemento.id} </b></span>
        <h3>${elemento.nombre} </h3>
        <span> Fecha: ${elemento.fecha} </span>
        <br>
    </div>
        <hr>
    `
}
historialHTML.innerHTML= elementosHistorial*/

const input = document.getElementById("input")
console.log(input.value) // accedo al valor del input

/*añado la class rojo al elemento
input.classList.add("rojo")*/

/*eliminamos una clase de un elemento
input.classList.remove("rojo")*/

/*hacer un interruptor de clase de un elemento
input.classList.toggle("mostrar")*/

/*accedo al objeto de lista de clases del input
input.classList*/

/*input.classList.replace("mostrar", "ocultar")*/
if(input.classList.contains("mostrar")){    
    input.classList.remove("mostrar")
    input.classList.add("ocultar")
}else{
    input.classList.add("mostrar")
    input.classList.remove("ocultar")
}
