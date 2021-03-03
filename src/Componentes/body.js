import React, {Fragment} from 'react';
import Card from './card-componente';
import Boton from './boton';
import CardPresentacion from './Card-presentacion';
import './Estilo/body.css';


const Body =() =>{
    const Pami = 'assets/image/Logo-pami.png';
    const Issn= 'assets/image/Logo.issn.png';
    return (
     <>
      <div className="General">
                <div className="Titulo">
                    <h1> ¡Bienvenidos al Sistema <br/>de Recetas Online! </h1>
                </div>

                  <Card/>
                  <CardPresentacion />
                  <Boton />
                  <div className="logos">
                    <h5>Recetas exclusivas para las siguientes <br/> obras sociales:</h5>
                    <img src={Pami}  alt="Pami" className="Pami"/>
                    <img src={Issn} alt="Issn" className="Issn"/>
                  </div>
                </div> 
        
        
     </>



    );
}
export default Body;