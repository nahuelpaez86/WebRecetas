import React from "react";
import imagen from '../../img/avatar-medico.png';
import { makeStyles} from '@material-ui/core';
const useStyles = makeStyles ({
   
  tarjeta:{
    background: 'whitesmoke',
    width: '330px',
    height: '370px',
    borderRadius: '10px',
    boxShadow: '0 4px 2px rgba(0, 0, 0, 10)',
    overflow:' hidden',
    margin:' 20px',
    textAlign:' center',
  },
  imagen :{
    position: 'relative',
    top: '30px',
    
  },
  Img:{
    height: '160px',
    width: '160px',
    borderRadius: '50%',
  },
  contenedorMain: {
    bottom: '100px',
    width:' 100%',
    maxWidth:' 325px',
    height:' auto',
    display:' flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin:' auto',
  },
  informacion:{
    position: 'relative',
    top: '20px',
     p:{
      justifyContent: 'center',
      position: 'relative',
      top:' 80px',
      right:'2px',
      fontSize: '22px',
    },
     h2:{
      position: 'relative',
      right: '1px',
      top: '40px',
    },
    h4:{
      position: 'relative',
      right: '2px',
      top: '58px',
      fontSize: '18px',
    },
  },
 

});

const CardPresentacion = () => {
 const classes = useStyles();
  return (
    <div className={classes.contenedorMain}>
      <div className={classes.tarjeta}>
        <div className={classes.imagen}>
          <img src={imagen} className={classes.Img} />
        </div>
        <div className={classes.informacion}>
          <h2 className={classes.h2}> Dr Juan Carlos Paez</h2>
          <h4 className={classes.h4}>Clinico Medico</h4>
          <p className={classes.p}>
            MN :3563
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardPresentacion;
