import React from "react";

import {makeStyles}from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#3153AB',
    /* height:70px; */
    padding: '1em',
  },
   p :{
    textAlign: 'center',
    color: 'rgb(196, 194, 194)',
    
  },
}))
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.p}>
        Derechos reservados &#174; 2021 <br />
        Autor: Nahuel Paez <br />
        Contacto: nahuelpaez86@gmail.com
      </p>
    </footer>
  );
};
export default Footer;
