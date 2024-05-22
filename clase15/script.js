//Objetos//
let edadUsuario = 18
let nombreUsuario = 'pepe'
let dineroUsuario = 100

/* modelo key-value */
let usuario = {
    nombre: 'pepe',
    edad: 18,
    dinero : 100
}

console.log(usuario.dinero)   
/* crear un objeto llamado producto que tenga precio nombre descripcion y marca*/

let producto = {
precio: 200,
nombre: 'libro',
descripcion: 'un libro',
marca: 'pepe'
}
producto.vencimiento = '12/12/2022'
producto.precio = 100
console.log(producto)
/*en objetos siempre usar const*/
/* crear un objeto llamado persona que tenga nombre, edad y mejorAmigo que tenga nombre y edad (es otro objeto)*/
let persona = {
    nombre: 'pepe',
    edad: 18,
    mejorAmigo: {
        nombre: 'julieta',
        edad: 20
    }
}
console.log(persona.mejorAmigo.edad)
console.log(producto.descripcion) 

/* cambiar el nombre del mejorAmigo a 'pepe'
y crear la propiedad nrocelular a persona*/

persona.mejorAmigo.nombre = 'pepe'
persona.nroCelular = 123456
console.log(persona)

/*nuevo objeto con const*/
const persona2 ={
    nombre: 'juliana',
}
/*crea la propiedad dni*/
persona2.dni = 55555555
console.log(persona2)
