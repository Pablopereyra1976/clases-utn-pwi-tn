import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ferreteria from "../../../../public/imagenes/ferreteria.jpeg";

const Tuerca = { id: 1 };  // Define el objeto Tuerca
const Tornillo = { id: 1 };  // Define el objeto Tornillo

function Home() {
  return (
    <div>
       <div className="container-titulo">
        <h1 className="titulo">Tornilleria "veracruz"</h1>
    </div>
    <div>
      <Link to={`/Tuercas/${Tuerca.id}`} className="btn">Ir a Tuercas</Link>
      <Link to={`/Tornillos/${Tornillo.id}`} className="btn">Ir a Tornillos</Link>
    </div>
    <img src={ferreteria} className="img" />
    </div>
  );
}
export default Home;
