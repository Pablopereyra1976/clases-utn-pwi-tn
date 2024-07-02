import React from "react";

const ProfileCard = (props) => {
    console.log(props)
    const persona= props.persona
    return (
        <div>
            <h1>Nombre completo: {persona.nombre}</h1>
            <span><strong>Edad:</strong>89</span>
            <h3>Ubicacion: calle 123</h3>
        </div>
    )
}
export {ProfileCard}