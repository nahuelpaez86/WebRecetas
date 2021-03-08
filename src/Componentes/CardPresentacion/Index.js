import React from "react";
import "../CardPresentacion/card-presentacion.css";
import imagen from '../../image/avatar-medico.png';
const CardPresentacion = () => {
  //const imagen= "./image/avatar-medico.png";
  return (
    <div className="contenedor-main">
      <div className="tarjeta">
        <div className="imagen">
          <img src={imagen} />
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
