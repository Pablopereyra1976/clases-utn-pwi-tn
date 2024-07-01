import React from "react";
import { MOOK_MENSAJES } from "../../../../src/Mensajes.json";
import { visto, entregado, noEntregado } from '../../../Imagenes';
import './Mensaje.css'
 function Mensaje() {
    return (
        <>
            {MOOK_MENSAJES.map((mensaje) => (
                <div key={mensaje.id} className={`mensaje ${mensaje.autor}`}>
                    <p className="mensaje-texto">
                        <strong>{mensaje.autor}</strong>
                        {mensaje.autor}
                    </p>
                    <p className="mensaje-texto">{mensaje.texto}</p>
                    <div className="mensaje-info">
                        {mensaje.hora}
                        <img
                            className="estado"
                            src={
                                mensaje.estado === "visto"
                                    ? visto
                                    : mensaje.estado === "entregado"
                                        ? entregado
                                        : noEntregado
                            }
                        
                        alt={mensaje.estado}/>
                    </div>
                </div>
            ))}
        </>
    );
}
export { Mensaje };
