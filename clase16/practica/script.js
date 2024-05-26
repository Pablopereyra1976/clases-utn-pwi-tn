//document.write('practiquemosss')
const inventario = [
    { nombre: "Televisor", categoria: "Electrónica", precio: 600, cantidad: 5 },
    { nombre: "Celular", categoria: "Electrónica", precio: 300, cantidad: 20 },
    { nombre: "Nevera", categoria: "Electrodomésticos", precio: 1000, cantidad: 2 },
    { nombre: "Microondas", categoria: "Electrodomésticos", precio: 150, cantidad: 15 },
    { nombre: "Laptop", categoria: "Electrónica", precio: 800, cantidad: 10 },
    { nombre: "Tablet", categoria: "Electrónica", precio: 200, cantidad: 30 },
    { nombre: "Aspiradora", categoria: "Electrodomésticos", precio: 250, cantidad: 8 }
  ];
  
    const productosElectronica = inventario.filter(producto=>producto.categoria === "Electrónica")
        console.log(productosElectronica);  
    
    const valorTotalInventario = inventario.reduce((total,producto)=>total+producto.precio*producto.cantidad,0)
    console.log(valorTotalInventario)    
    
    const productosMayorDiezUnidades = inventario.filter(producto=>producto.cantidad > 10)
  .map(producto => producto.nombre) 
   console.log(productosMayorDiezUnidades)

  const preciosMayorMenor = inventario.slice().sort((a,b)=>b.precio-a.precio);
  console.log(preciosMayorMenor)

  const productoMayorQuinientos = inventario.find((producto)=>producto.precio > 500)
  console.log(productoMayorQuinientos)

  /* ***************************************************************************************************** */

  /* ejercicios de funciones */

  function sumar (a ,b){
    return a + b
  }
  console.log(sumar(5,8))

  function esPar (a){
    return a % 2 === 0
  }
  console.log(esPar(8))

  function esImpar (a){
  return a % 2 !== 0
  }
  console.log(esImpar(7))

  function celsiusAFarenheit(gradosCelsius){
    return (gradosCelsius * 9/5) + 32
  }
  console.log(celsiusAFarenheit(28))

  function MayorDeTresNumeros(a,b,c){
    return Math.max(a,b,c)
  }
  console.log(MayorDeTresNumeros(13,167,4))

  function invertirCadena(palabra){
    return palabra.split("").reverse().join("")
  }
  console.log(invertirCadena("hola mundo"))

  function contarVocales(cadena){
    let vocales = 'aeiouAEIOU';
    let contador = 0;
    for(let char of cadena){
        if(vocales.includes(char)){
            contador++;
        }
    }
    return contador;
  }
  console.log(contarVocales("hola mundo"));
  console.log(contarVocales("BIENVENIDO a mi pagina web"));

  function filtrarPares(numeros){
    return numeros.filter(num => num % 2 === 0);
  }
  console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  function numeroMasGrande(numeros){
    return Math.max(...numeros);
  }
  console.log(numeroMasGrande([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))