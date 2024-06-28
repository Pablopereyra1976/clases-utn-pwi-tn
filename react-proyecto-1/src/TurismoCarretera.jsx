import React from "react";

const TurismoCarretera = ({Car}) => {
  const { marca, modelo, color, year, image } = Car;
  return (
    <div>
      <h1>Turismo Carretera</h1>
      <img src={image} alt={Car} />
      <h2>{marca}</h2>
      <h2>{modelo}</h2>
      <h2>{color}</h2>
      <h2>{year}</h2>
    </div>
  );
}
export { TurismoCarretera }
