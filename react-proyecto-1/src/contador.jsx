import React from "react";

const Contador = ({ limit }) => {
    const [contador, setContador] = useState(1)
    const handleIncrementar = () => {
        if (contador != limit) {
            setContador(contador + 1)
        }
    }
}

const handleDecrementar = () => {
    if (Contador != 0) {
        setContador(Contador - 1)
    }
}
return (
    <div>
        contador===0
        <h1>Contador: {Contador}</h1>

        <div>
            <button onClick={handleIncrementar}>Incrementar</button>
            <span>{contador}</span>
            <button onClick={handleDecrementar}>Decrementar</button>
        </div>
    </div>
)
export {Contador}