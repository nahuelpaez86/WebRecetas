import React from "react";
import Card from "../CardComponente/Index";
import Boton from "../Boton/Index";
import CardPresentacion from "../CardPresentacion/Index";
import "./body.css";

// agregado por gabi
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const Body = () => {
  const classes = useStyles();
  const Pami = "%PUBLIC_URL%/Logo-pami.png";
  const Issn = "%PUBLIC_URL%/Logo.issn.png";
  return (
    <div className="General">
      <div className={classes.toolbar} />
      {/* container de MUI */}
      <Container fixed>
        <div className="Titulo">
          <h1>
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
              <Boton />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className="logos">
              <h5>
                Recetas exclusivas para las siguientes <br /> obras sociales:
              </h5>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="logos">
              <img src={Pami} alt="Pami" className="Pami" />
              <img src={Issn} alt="Issn" className="Issn" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Body;
