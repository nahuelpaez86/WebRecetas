import React from "react";
import Card from "./Componentes/CardComponente/Index";
import Boton from "../../Componentes/Boton/Index";
import CardPresentacion from "./Componentes/CardPresentacion/Index";
import Pami from './img/Logo-pami.png';
import Issn from './img/Logo.issn.png';


// agregado por gabi
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
toolbar: theme.mixins.toolbar,
  
 
general: {

  backgroundColor:'#8AAFE5',
  paddingBottom:' 2em',
  height: 'vh',
},
h1: {
  color: 'white',
  textAlign: 'center',
},

titulo :{
  marginTop: '40px',
},

logos :{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},

h5 : {
  textAlign: 'center',
  fontFamily: '"Fira Sans Condensed", sans-serif',
  fontSize: '15px',
  
},
pami : {
  height: '50px',
  width: '150px',

},
issn :{
  height: '70px',
  width: '70px',
 
},

}));

const Inicio = () => {
  const classes = useStyles();

  return (
    <div className={classes.general}>
      <div className={classes.toolbar} />
      {/* container de MUI */}
      <Container fixed>
          <div className={classes.titulo}>
            <h1 className={classes.h1}  >
              ¡Bienvenidos al Sistema <br />
              de Recetas Online!
            </h1>
          </div>
          {/* se crea un grid tipo container y adentro se ponen grid tipo item */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card />
            </Grid>
            <Grid item xs={12}>
              <CardPresentacion />
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Boton  
                nombre="Solicitar Receta"
                url='./requerimientos'/>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.logos}>
                <h5 className={classes.h5}>
                  Recetas exclusivas para las siguientes <br /> obras sociales:
                </h5>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.logos}>
                <img src={Pami} alt="Pami" className={classes.pami} />
                <img src={Issn} alt="Issn" className={classes.issn} />
              </div>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
};
export default Inicio;
