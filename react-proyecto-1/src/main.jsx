/*buena practica, todos los archivos jsx deben importar a react*/
import React from 'react'

/* usamos reactDom para crear nuestro dom virtual (de react)*/
import ReactDOM from 'react-dom/client'

/* importa el componente (funcion) App */
/*los componentes son funciones que retornan JSX*/
/* jsx es un codigo parecido a html*/
import App from './App.jsx'
import { PI, doSometing } from './funciones.jsx'

console.log(PI)
ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

)
