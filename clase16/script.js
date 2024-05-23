//console.log("hola mundo");
/* function esVocal(letra){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        return true
    }else{
        return false
    }
}

function esVocal(letra){
    return 'aeiou'.includes(letra)
}

console.log(esVocal('a'))

function esVocal(letra){
    return letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'
}

console.log(esVocal('a'))

const nombres = [ 'pepe' , 'juan' , 'maria', 'ezequiel']

/* por cada nombre quiero que aparezca un mensaje por consola
 console.log('hola ' + nombres[0])
console.log('hola ' + nombres[1])
console.log('hola ' + nombres[2])

/* quiero un contador del 0 al 3
for(let i = 0; i < nombres.length ; i++){
let nombre = nombres[i]

    console.log(i)
    console.log('hola ' + nombre)
}

const carrito = [
    {
        nombre: 'camisa',
        precio: 100,
        cantidad: 2
    },
    {
        nombre: 'pantalon',
        precio: 200,
        cantidad:1
    },
]
 por cada elemento de mi carrito mostrar por consola
has comprado el producto {producto.nombre} x {producto.cantidad} y cuesta {producto.precio}

for(let i = 0; i < carrito.length; i++){
    let num = carrito[i].cantidad
    let producto = carrito[i]
    console.log(`has comprado  ${producto.nombre} x ${producto.cantidad} y cuesta ${producto.precio*num}`)

}

const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 35
    },
]
 por cada personaje mostrar el siguiente mensaje por consola
'hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} anios'

opcional: al finalizar elrecorrido mostrar por consola total de edades: {totalEdades}
let sumaEdades = 0
for (let i = 0; i < personajes.length; i++) {
    let personaje = personajes[i]
    console.log('hola mi nombre es ' + personaje.nombre +' '+ personaje.apellido +' '+ 'y tengo ' + personaje.edad + 'años',)
    sumaEdades = sumaEdades + personaje.edad
}
console.log(sumaEdades)
FOR OF
for(const personaje of personajes){
    console.log('hola mi nombre es ' + personaje.nombre +''+ personaje.apellido +''+'y tengo ' + personaje.edad +'años')
}
const nombres = [ 'pepe' , 'juan' , 'maria', 'ezequiel']
for(const nombre of nombres){
    console.log('hola ' + nombre)
}*/
//FOR IN
/*const datos = {
    'nombre': 'pepe',
    'apellido': 'suarez',
    'dni': '12345678'
}
let resultado = ''
for(let propiedad in datos){
    resultado = resultado + '\n<span>' + propiedad + ':<span> ' + '<span>'+ datos[propiedad] + '</span>'
    }
        console.log(resultado)*/

/*METODOS AVANZADOS DE ARRAYS*/
/*const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodriguez',
        edad: 35
    }
]

/* le dicimos metodos avanzados  a metodo que recibe una callback
filter es un metodo avanzado que recibe una callback, la callback recibe un parametro
si elvalor de retorno de callback es falsy entonces se ignorara(pasaremos al siguiente elemento
    SIEMPRE FILTER RETORNARA UN ARRAY
    si el array es vacio significa que nadie paso el filtro
)
personajes.forEach(function(personaje){  
    console.log(personaje)
})
for(personaje of personajes){
    console.log(personaje)
}
personajes.filter(function(personaje)){
    return personaje.edad >= 18
}
console.log(personaje)

const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'tv lg',
        marca: 'lg',
        id: 2,
        precio: 2900
    },
    {
        nombre: 'tv noblex',
        marca: 'noblex',
        id: 3,
        precio: 1100
    }
]
 traer los productos que sean de precio inferior a 2950
traer los productos de la marca noblex
traer los productos que en su nombre incluyan el string tv


const samsung = productos.find(function(producto){
    return producto.marca === 'samsung'
})
console.log(samsung)

/*const productoBajoPrecio = productos.filter(function(producto){
return producto.precio < 2950
})
console.log(productoBajoPrecio)

const productoNoblex = productos.filter(function(producto){
    return producto.marca === 'noblex'
    })
    console.log(productoNoblex)

const productoStringTv = productos.filter(function(producto){
    return producto.nombre.toLowerCase().includes('tv'.toLowerCase())
    })
    console.log(productoStringTv)
 /* el toLowerCase convierte el string a minusculas para que no se distinga entre mayusculas y minusculas*/

/*MAP
nos sirve para crear un array en base a otro array
va  a recorrer el array y por cada elemento la callback va a ejecutarse
RETORNA SIEMPRE UN ARRAY*/

const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'plato'
    },
    {
        nombre: 'taza'
    }
]
const listaDeObjetosHtml = objetos.map(function (objeto) {
    return '<div>' + objeto.nombre + '</div>'
})
console.log(listaDeObjetosHtml)
/*
[
'<div>vaso</div>',
'<div>plato</div>',
'<div>taza</div>'
]

TAREA 
metodo .some() sirve para saber si algun elemento cumple con la condicion
       .findindex() sirve para saber el indice del primer elemento que cumpla con la condicion
       .every() sirve para saber si todos los elementos cumple con la condicion

DOM  document objet model
FORMULARIOS
EVENTOS

*/

