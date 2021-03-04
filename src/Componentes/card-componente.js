import React from 'react';

import './Estilo/card-componente.css';
const Card=() =>{
    const imagen = '/assets/image/Img-mobile.jpg';
    return (
        <div className="Contenedor">
                    
        <div className="card"> 
            <img src={imagen} />
            <div className="texto">
                 <p>Este servicio fue creado con la idea de evitar salir de casa 
                en epocas de Pandemia y asi preservar la salud de nuestros pacientes
            </p>
            </div>
            
            
            
        </div>
      </div>
    );
}

export default Card;









