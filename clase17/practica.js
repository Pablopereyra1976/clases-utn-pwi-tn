/*localStorage.clear();
localStorage.removeItem("historial");

const stockProductos = [
  {
    id: 1,
    nombre: "Mouse",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: 200,
  },
  {
    id: 3,
    nombre: "Monitor",
    precio: 300,
  },
];

const stockProductosString = JSON.stringify(stockProductos);
localStorage.setItem("stockProductos", stockProductosString);

function obtenerStock() {
  let stock = localStorage.getItem("stockProductos");
  if (stock !== null) {
    let stockParseado = JSON.parse(stock);
    return stockParseado;
  } else {
    return [];
  }
}
console.log(obtenerStock());

let nuevoproducto = {
  id: 4,
  nombre: "Audifonos",
  precio: 400,
}

function agregarProducto(nuevoProducto) {
  let stock = obtenerStock();
  stock.push(nuevoProducto);
  localStorage.setItem("stockProductos", JSON.stringify(stock));
  document.write('<p>Se agrego el producto'+'<br>' + JSON.stringify(stock),'</p>'+'</br>');
}
agregarProducto(nuevoproducto);
console.log( obtenerStock());

let nuevoProducto1 = {
  id: 5,
  nombre: "Cable HDMI",
  precio: 500,
}
agregarProducto(nuevoProducto1);
console.log( obtenerStock());*/
localStorage.clear();

const materiasCursadas = [
  {
    id: 1,
    nombre: "Matematicas",
    modulo: 4,
    profesor: "Pablo",
  },
  {
    id: 2,
    nombre: "Ingles",
    modulo: 3,
    profesor: "Maria",
  },
  {
    id: 3,
    nombre: "Ciencias",
    modulo: 5,
    profesor: "Pedro",
  },
];

const materiasCursadasString = JSON.stringify(materiasCursadas);
localStorage.setItem("materiasCursadas", materiasCursadasString);

function obtenerMateriasCursadas() {
  let materias = localStorage.getItem("materiasCursadas");
  if (materias !== null) {
    let materiasParseadas = JSON.parse(materias);
    return materiasParseadas;
  } else {
    return [];
  }
}

console.log(obtenerMateriasCursadas());

let nuevaMateria = {
  id: 4,
  nombre: "Fisica",
  modulo: 6,
  profesor: "Luis",
};

function agregarMateria(nuevaMateria) {
  let materias = obtenerMateriasCursadas();
  materias.push(nuevaMateria);
  localStorage.setItem("materiasCursadas", JSON.stringify(materias));
 
}
agregarMateria(nuevaMateria);
console.log(obtenerMateriasCursadas());
console.log(materias)



let container = document.getElementById("materias");
obtenerMateriasCursadas().forEach((materia) => {
  container.innerHTML += `<div><h3>${materia.nombre}</h3><p> id: ${materia.id}</p><p>Modulo: ${materia.modulo}</p><p>Profesor: ${materia.profesor}</p><hr></div>`
})

let nuevaMateria1 = {
  id: 5,
  nombre: "Quimica",
  modulo: 7,
  profesor: "Carlos",
};
agregarMateria(nuevaMateria1);
console.log(obtenerMateriasCursadas());





