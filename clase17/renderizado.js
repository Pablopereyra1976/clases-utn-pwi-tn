/*const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 20,
        b: 2,
        resultado: 22
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
]

function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 



function agregarAlHistorial(elementoHistorial) {
    historial.push(elementoHistorial)
}

function obtenerHistorial() {
    return historial
}


agregarAlHistorial({
    accion: 'PEPE',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1
})
console.log(renderizarHistorial(historial))

let datoImportante = 'el mate se toma amargo'
localStorage.setItem('datoImportante', 'el mate se toma amargo')
localStorage.setItem('array',[object])
localStorage.getItem('dato')


let string = '{"username":"pereyra"}'
let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto)
/*sessionStorage / localStorage:
.setItem: (clave(key):string, valor(value):string)   guarda/reemplaza un nuevo valor con la llave (key) que reciba

.getItem: (clave:(key):string)   obtenemos el valor guardado de una key sino existe retorna null

.removeItem: (clave:(key):string)   elimina el valor guardado de una key

.clear: ()   limpia el storage

json: tipo de archivo de texto (JAVASCRIP OBJECT NOTATION)
json.parse() transforma su formato a un objeto javascript
json.stringify() transforma su formato text/string

let objeto = {
    nombre: 'pepe',
    edad: 49
}
let objetoEnString = JSON.stringity(objeto)
console.log(objetoEnString)

transforma el array historial a string con notacion JSON y mostrar por alert
autocorreccion:  la alerta no debe mostrar [object object]*/
const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 20,
        b: 2,
        resultado: 22
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
]
//let historialConString = JSON.stringify(historial) //se puede colocar const
//alert(historialConString)

/* en la funcion de agregarAlHistorial vamos a hacer el oush que veniamos haciendo pero ademas vamos a guardar el historial en el localStorage con la key historial


function agregarAlHistorial(elementoHistorial) {
    historial.push(elementoHistorial)
    let historialConString = JSON.stringify(historial)
}
localStorage.setItem('historial', historialConString)

/* la funcion obtenerHistorial debe tomar el historial del localStorage y retornarlo como array*/
//clear(localStorage)
function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial() //historial previo o []
    const elementoConPropiedades ={
        ...elementoHistorial,
        id: historial.length + 1
    };
    historial.push(elementoConPropiedades)
    const historialConString = JSON.stringify(historial)
    localStorage.setItem('historial', historialConString);
}

function obtenerHistorial() {
    let historialConString = localStorage.getItem('historial')
    let historial = JSON.parse(historialConString)
    return historial
}
if (obtenerHistorial() === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
agregarAlHistorial({
error: 'error de pereyra',
saludo: 'hola'
})

console.log(obtenerHistorial())