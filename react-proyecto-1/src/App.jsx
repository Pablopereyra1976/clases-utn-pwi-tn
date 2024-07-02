import React from "react"; // siempre que tengamos un archivo jsx hay que importar react

import { mustang, camaro, torino, challenger, toyota } from "./assets/img/index.js";
import {ColorCard} from "./componentes/colorcard/ColorCard.jsx";
import { TurismoCarretera } from "./componentes/turismocarretera/TurismoCarretera.jsx";

const Card1 = {
  likes: 3,
  fecha: "1 hour",
  colores: ["#36BA98", "#E9C46A", "#F4A261", "#E76F51"],
};
const Card2 = {
  likes: 132,
  fecha: "Yesterday",
  colores: ["#667BC6", "#FDFFD2", "#FFB4C2", "#DA7297"],
};
const Card3 = {
  likes: 184,
  fecha: "2 days",
  colores: ["#F5F7F8", "#F4CE14", "#379777", "#45474B"],
};
const Card4 = {
  likes: 416,
  fecha: "3 days",
  colores: ["#071952", "#088395", "#37B7C3", "#EBF4F6"],
};

const Car1 = {
  marca: "MARCA: Ford",
  modelo: "MODELO:  Mustang",
  color: "COLOR: rojo",
  year: "AÑO: " + 2024,
  image: mustang,
};

const Car2 = {
  marca: "MARCA: Chevrolet",
  modelo: "MODELO:  Camaro",
  color: "COLOR: negro",
  year: "AÑO: " + 2024,
  image: camaro,
};

const Car3 = {
  marca: "MARCA: Renault",
  modelo: "MODELO:  Torino",
  color: "COLOR: blanco",
  year: "AÑO: " + 2024,
  image: torino,
};

const Car4 = {
  marca: "MARCA:  Dodge",
  modelo: "MODELO:  Challenger",
  color: "COLOR: azul",
  year: "AÑO: " + 2024,
  image: challenger,
};

const Car5 = {
  marca: "MARCA:   Toyota",
  modelo: "MODELO:  Camry",
  color: "COLOR:verde",
  year: "AÑO: " + 2024,
  image: toyota,
};




function App() {
  return (
    <>
      <h1 className="title">hola desde react</h1>
   
   
 
  
      <div className="cartas">
        <ColorCard Card={Card1} />
        <ColorCard Card={Card2} />
        <ColorCard Card={Card3} />
        <ColorCard Card={Card4} />
      </div>
      <br />
      <div>
        <TurismoCarretera Car={Car1} />
        <TurismoCarretera Car={Car2} />
        <TurismoCarretera Car={Car3} />
        <TurismoCarretera Car={Car4} />
        <TurismoCarretera Car={Car5} />
      </div>


    </>
  );
};

export default App;









/*let contador = 1
contador = contador + 1
const Clase25 = () => {
  return (
    <div>
      <h1>Hola {persona1.nombre}</h1>
      <span>contador.{contador}</span>
      <button onClick={incrementar}>incrementar</button>
    </div >
  );
};






const [valor, fncambiadora] = useState(1)
const incrementar = () => {
  fncambiadora(valor + 1)
}
  alert('me estoy incrementando')

*/

