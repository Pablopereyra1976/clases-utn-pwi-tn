import React from "react";
import { useParams } from "react-router-dom";
import Contactos from "../contactos.json";
import Imagenes from "../../Imagenes";
import "./ChatPersonas.css";

function ChatPersonas() {
  const { id } = useParams();
  const contacto = Contactos.find((contacto) => contacto.id === Number(id));
  const mensaje = Contactos;
  const { visto, entregado, noEntregado } = Imagenes;

  if (!contacto) {
    return <div>No se encontro el contacto</div>;
  }
  return (
    <div className="mensaje-container">
      {contacto.mensajes.map((mensaje) => (
        <div>
          <div className={`mensaje ${mensaje.autor}`}>
            <p className="mensaje-texto">
              <strong>{mensaje.autor}</strong>
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
                alt={mensaje.estado}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatPersonas;
