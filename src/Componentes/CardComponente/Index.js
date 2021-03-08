import React from "react";

import "../CardComponente/Estilo-card.css";
const Card = () => {
  const imagen = "./assets/image/Img-mobile.jpg";
  return (
    <div className="Contenedor">
      <div className="card">
        <img src={imagen} />
        <p>
          Este servicio fue creado con la idea de evitar salir de casa <br />
          en epocas de Pandemia y asi preservar la salud de nuestros pacientes
        </p>
      </div>
    </div>
  );
};

export default Card;
