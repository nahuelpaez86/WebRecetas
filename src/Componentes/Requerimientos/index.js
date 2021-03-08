import React from 'react';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import wpp from '../../image/whatsapp.png';
import mail from '../../image/email.svg'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  containerMain:{
      background:' whitesmoke',
      height:'1100px',
      width:'100px',
      borderRadius:'40px',
      textAlign:'center',
      
  },
  titulo:{
    textAlign: 'center',
    color:'white',
  },
  datos:{
      fontSize:'18px',
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
     },
     li:{
       textAlign: 'justify',
     },
  textEnvio:{
        fontSize:'20px',
  },
  imgWpp:{
      height:'40px',
      width:'40px',
      position:'relative',
      top:'35px',
      right:'70px',
      fontSize:'30px',
  },
  imgMail:{
    height:'40px',
    width:'40px',
    position:'relative',
    top:'30px',
    right:'130px',
},
  envioDeDatos:{
    position:'relative',
    top:'60px',
  },
  textoFinal:{
    position:'relative',
    top:'60px',
    fontSize:'19px',
  },
}));

const Requerimientos= () => {
  const classes = useStyles();
 // const wpp='./image/whatsapp.png';
  //const mail='./image/email.svg';
  
  return (
    <div className="General">
      <div className={classes.toolbar}  />
      {/* container de MUI */}
        <Container fixed >
            <Grid container spacing={5}>
                <Grid item xs={12} className={classes.titulo}>
                    <h1>
                        ¡Bienvenidos al Sistema <br />
                        de Recetas Online!
                    </h1>
                </Grid>
                <Grid item xs={12} className={classes.containerMain}>
                   <h2>Datos necesarios para realizar la receta:</h2>
                   <Grid item xs={12} className={classes.datos} > 
                        <Grid item xs={12} className={classes.li}>
                          <h4>Pacientes de Pami:</h4>
                          <li className={classes.li}>Nombre</li>
                          <li className={classes.li} >Apellidos</li>
                          <li className={classes.li}>DNI</li>
                          <li className={classes.li}>Obra Social</li>
                          <li className={classes.li}>Numero de Afiliado</li>
                          <li className={classes.li}>Numero de Telefono</li>
                          <li className={classes.li} >Mail</li>
                          <li className={classes.li}>Medicamento</li>
                          <li className={classes.li} >Miligramos</li>
                          <li className={classes.li}>Comprimidos</li>
                          <li className={classes.li}>Cantidad</li>
                        </Grid>
                          
                    
                      <Grid item xs={12} className={classes.li}> 
                          <h4>Pacientes de ISSN:</h4>
                          <li>Nombre</li>
                          <li>Apellidos</li>
                          <li>DNI</li>
                          <li>Obra Social</li>
                          <li>Numero de Telefono</li>
                          <li>Mail</li>
                          <li>Medicamento</li>
                          <li>Miligramos</li>
                          <li>Comprimidos</li>
                          <li>Cantidad</li>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.envioDeDatos} >
                    
                        <Grid item xs={12} className={classes.textEnvio}>
                          <h5>Enviar los datos por cualquiera de las dos vias de comunicacion:</h5>
                        </Grid>
                        <Grid item xs={12} >
                          <img src={wpp} className={classes.imgWpp}/>
                          <p> <b>2942-232323</b></p>

                          <img src={mail} className={classes.imgMail}/>
                          <p><b>recetaonline2021@yahoo.com</b></p>
                        </Grid>
                        <Grid item xs={12} className={classes.textoFinal}>
                          <h5>La receta será enviada a su Correo Electronico dentro de las 24hs.<br/> Muchas gracias por utilizar nuestro servicio</h5>
                        </Grid>
                    
                    </Grid>
                        
                </Grid>
             </Grid>
        </Container>
    </div>
  );
};
export default Requerimientos;
