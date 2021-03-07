import React from "react";
import "../CardPresentacion/card-presentacion.css";

const CardPresentacion = () => {
  const Icono = "./assets/image/avatar-medico.png";
  return (
    <div className="contenedor-main">
      <div className="tarjeta">
        <div className="imagen">
          <img src={Icono} />
        </div>
        <div className="informacion">
          <h2> Dr Juan Carlos Paez</h2>
          <h4>Clinico Medico</h4>
          <p>
            MN :3563
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardPresentacion;
