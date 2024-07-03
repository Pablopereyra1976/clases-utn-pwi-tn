import React from "react";
import "./TurismoCarretera.css";



const TurismoCarretera = ({ Car }) => {
  const { marca, modelo, color, year, image } = Car;
  return (
    <>
    <h2 className="title-car">Turismo Carretera</h2>
    <div className="car">
      <img src={image} className="image" />
      <div className="info">
        <h2 className="marca">{marca}</h2>
        <h2 className="modelo">{modelo}</h2>
        <h2 className="color">{color}</h2>
        <h2 className="year">{year}</h2>
      </div>
    </div>
    </>
  );
};
export { TurismoCarretera };
