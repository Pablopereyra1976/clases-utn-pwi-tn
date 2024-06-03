localStorage.clear();
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
console.log( obtenerStock());

