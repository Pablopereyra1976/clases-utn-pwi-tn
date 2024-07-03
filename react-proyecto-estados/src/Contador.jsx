import React, { useState } from "react";

function Contador({ limite }) {
  const [numero, setNumero] = useState(0);
  const handleIncrementar = () => {
    if (numero < limite) setNumero(numero + 1);
  };
  const handleDecrementar = () => {
    if (numero > 0) setNumero(numero - 1);
  };
  return (
    <div>{numero===0 ? (<button onClick = {handleIncrementar}>Comprar</button>) :(
      <>
        <div>{numero}</div>
        <button onClick={handleIncrementar}>incrementar</button>
        <button onClick={handleDecrementar}>decrementar</button>
      </>)}
      {numero=== limite && alert('sin stock') }
    </div>
  );
}
export default Contador;
