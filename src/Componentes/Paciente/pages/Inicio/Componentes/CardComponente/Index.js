import React from "react";
import imagen from '../../img/Img-mobile.jpg';

import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles ({

  
  contenedor :{
    
    bottom: '100px',
    width: '100%',
    maxWidth: '325px',
    height: 'auto',
    display: 'flex',
    flexWrap:'wrap',
    justifyContent:' center',
    margin:' auto',
  },
  card : {
    background: 'whitesmoke',
    width:' 330px',
    height: '370px',
    borderRadius:' 10px',
    boxShadow:' 0 4px 2px rgba(0, 0, 0, 10)',
    overflow: 'hidden',
    margin: '20px',
    textAlign:' center',
  },
  
  img:{
    width: '330px',
    height: '220px',
    img:{
      height: 'auto',
      width: '300px',},
  },
  
  p :{
    padding:  '1rem',
    fontSize: '18px',
    fontWeight: '300',
    fontFamily: '"Fira Sans Condensed", sans-serif',
    position: 'relative',
    bottom: '30px',
  }
  
  
});
const Card = () => {
  const classes = useStyles();
  //const imagen = "./image/Img-mobile.jpg";
  return (
    <div className={classes.contenedor}>
      <div className={classes.card}>
        <img src={imagen} className={classes.img} />
        <p className={classes.p}>
          Este servicio fue creado con la idea de evitar salir de casa <br />
          en epocas de Pandemia y asi preservar la salud de nuestros pacientes
        </p>
      </div>
    </div>
  );
};

export default Card;
