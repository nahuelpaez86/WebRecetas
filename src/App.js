

// Components
import NavBar from "./Componentes/Paciente/Componentes/Header/Index";
import Footer from "./Componentes/Paciente/Componentes/Footer/Index";
import Inicio from "./Componentes/Paciente/pages/Inicio/Index.js";
import Formulario from "./Componentes/Paciente/pages/Formulario/indexForm";
import Cards from "./Componentes/Medico/Componentes/medico";
//Css
import "./index.css";
// rutas
import {Switch,Route} from "wouter";

// agregado por gabi
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <div className="mainApp">
     
      <CssBaseline />
      <NavBar />
      <Switch>
            <Route sensitive path="/medicos" component={Cards} />
            <Route path="/requerimientos" component={Formulario} />
            <Route exact path="/" component={Inicio} />
          </Switch>
          
       <Footer />
    </div>
  ); 
};

export default App;
