import React from "react";
import MOOK_MENSAJES from "../../../Components/contactos.json";
import Imagenes from "../../../Imagenes";
import "./MensajeContactos.css";
import { Link } from "react-router-dom";

function MensajeContactos() {
  return (
    <div className="container">
      
      {MOOK_MENSAJES.map((contacto) => (
        <Link to={`/contactosId/${contacto.id}`} className="link">
        <div key={contacto.id} className={`contacto-container`}>
          <img src={Imagenes[contacto.image]} alt="image" />
          <div className="mensaje-nombre-container">
            <p className="mensaje-nombre">
              <strong>{contacto.nombre}</strong>
            </p>
            {contacto.mensajes.map((mensaje) => (
              <div key={mensaje.id} className={`mensaje-detalle `}>
                <p className="mensaje-texto">{mensaje.texto}</p>
              </div>
            ))}
          </div>

          <div className="mensaje-info">{contacto.ultima_conexion}</div>
        </div>
        </Link>
      ))}
    </div>
  );
}
export default MensajeContactos;

/*import React from "react";
import Imagenes from "../../../Imagenes/index"
import { Link } from "react-router-dom";
import Contactos from "../../../Components/contactos.json";
import "./MensajeContactos.css";

function MensajeContactos({ Contacto }) {

    

  const imgSrc = Imagenes[contacto.nombre];
  const { id, nombre, mensajes } = Contacto;


  const ultimoMensaje = mensajes[mensajes.length - 1];
  const horaUltimoMensasje = ultimoMensaje?.hora;
  const estadoUltimoMensaje = ultimoMensaje?.estado;

  return (
    <Link className="contactos-link" to={`/mensajes/${id}`}>
      <div key={id} className="contacto-item">
        <img src={imgSrc} alt={nombre} />
        <div className="datos">
          <p className="nombre">
            <strong>{nombre}</strong>
          </p>
          <p className="preview">
            {" "}
            <img
              className="estado"
              src={
                estadoUltimoMensaje === "visto"
                  ? Imagenes.visto
                  : estadoUltimoMensaje === "entregado"
                  ? Imagenes.entregado
                  : Imagenes.noEntregado
              }
              alt={estadoUltimoMensaje}
            />
            {ultimoMensaje?.texto}
          </p>
        </div>
        <div className="hora">{horaUltimoMensasje}</div>
      </div>
    </Link>
  );
}

export default MensajeContactos;*/
