import React from 'react'

export default function Home() {
obtenerProductos()
.then((productos)=>{
    console.log("productos",productos)
}
)
const [listaProductos, setListaProductos] = useState([])

  return (
    <div>
    <div>Home</div>
    <div>
        {listaProductos.map(producto => (
        <div>{producto.titulo}
        </div>
    ))}
        
    </div>
    </div>      
  )
}
