

// Components
import MenuAppBar from "./Componentes/Header/Index";
import Footer from "./Componentes/Footer/Index";
import Body from "./Componentes/Body/Index.js";
import Requerimientos from "./Componentes/Requerimientos/index"
//Css
import "./index.css";
// rutas
import {Switch,Route,Link} from "wouter";

// agregado por gabi
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Switch>
            <Route exact path="/requerimientos" component={Requerimientos} />
            <Route path="/" component={Body} />
          </Switch>
      <Footer />
        

      
    </>
  ); 
};

export default App;
