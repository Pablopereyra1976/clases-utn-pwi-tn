//alert("hola mundo");

//alert("bienvenido");   esto es un bloque sincronico

/* callstack : (pila de llamadas), se ejecuta de arriba hacia abajo 
prompt(alert("bienvenido")) primero entra prompt y tambien sale ultimo
primero resuelve el alert y luego resuelve el prompt
*****************************************************************************
fetch (buscar)
CONSULTA HTTPS: https://jsonplaceholder.typicode.com/users  (PROTOCOLO DE TRANSFERENCIA DE DATOS)
las consultas http tienen metodos GET, POST, PUT, DELETE, PATCH
request (consulta)
get (obtener)
response(respuesta)

entro a mercadolibre
emito una consulta HTTP de tipo get a la ip de ML
response(status:200) 
2xx = salio todo bien : INDEX.HTML
4xx = hubo un error en la peticion (frontend)
5xx = hubo un error en el servidor (backend)

{json} placeholder es una API
GET http://miServidor.com/productos
responde: {
productos: [
    {id:1, nombre: 'tv', precio: 1000},
    {id:2, nombre: 'celular', precio: 2000}
]
}
json es asincrono
fulfilled (cumplido)
await (esperar), async(asincrono) van juntas en el codigo
callstack:
response(fetch)
console.log()



const URL_API = 'https://jsonplaceholder.typicode.com'; 
const obtenerUsuarios = async () => {
const response =await fetch(URL_API + '/users',{
    method: 'GET'
})
console.log('esta es la respuesta',response);
const data = await response.json();
console.log(data);
}
obtenerUsuarios();




const obtenerPosts = async () => {
    const response =await fetch(URL_API + '/posts',{
        method: 'GET'
    })
    console.log(response);
    }
    obtenerPosts();
    


const URL_API = 'https://jsonplaceholder.typicode.com'; 
const obtenerUsuarios = async () => {
const response =await fetch(URL_API + '/users/1',{
    method: 'GET'
})
console.log('esta es la respuesta',response);
const data = await response.json();
console.log(data);
}
obtenerUsuarios();
*****************************************************
Mostrar en HTML dentro de un div

h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}
*/


const divHtml = document.getElementById('contenedor');
const obtenerUser1 = async () => {
    divHtml.innerHTML = 'cargando...';
    const URL_API = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(URL_API + '/users/1', {
        method: 'GET'
    })
    const datosUser1 = await response.json();
    divHtml.innerHTML =
        `<h2>Nombre:  ${datosUser1.name}</h2><br>
    <span>Email: ${datosUser1.email}</span><br>
    <span>Telefono: ${datosUser1.phone}</span>
    `
    console.log(divHtml);
}
obtenerUser1();

const divHTML = document.getElementById('email');
const obtenerEmailUser = async () => {
    const URL_API = 'https://jsonplaceholder.typicode.com';
    const response = await fetch(URL_API + '/users', {
        method: 'GET'
    })
    const datoEmail = await response.json();
    divHTML.innerHTML =
        `<span>Email: ${datoEmail.email}</span>`
    console.log(divHTML);
    console.log(datoEmail);
}
obtenerEmailUser();