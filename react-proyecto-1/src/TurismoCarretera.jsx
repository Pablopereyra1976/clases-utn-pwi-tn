import React from "react";
import './TurismoCarretera.css';


const TurismoCarretera = ({Car}) => {
  const { marca, modelo, color, year, image } = Car;
  return (
    <div className="car">
      <h1>Turismo Carretera</h1>
      <img src={image}  />
      <h2>{marca}</h2>
      <h2>{modelo}</h2>
      <h2>{color}</h2>
      <h2>{year}</h2>
    </div>
  );
}
export { TurismoCarretera }
