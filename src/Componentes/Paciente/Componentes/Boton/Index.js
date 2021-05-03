import React from "react";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  boton: {
    width: '250px',
    height: '40px',
    background: '#f0a229',
    textAlign: 'center',
    fontFamily: '"Fira Sans Condensed", sans-serif',
    fontSize: '20px',
    borderRadius: '20px',
    cursor: 'pointer',
     },
  
}));


const Boton = ({nombre,url,onClick}) => {
 const classes = useStyles();
  return (
    <a href={url}>
      <button 
      className={classes.boton} 
      onClick={onClick}> 
     {nombre}
     </button>
    </a>
      );
};
 export default (Boton);
