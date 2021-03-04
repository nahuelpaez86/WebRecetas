import MenuAppBar from "./Componentes/Header/Index";
import Footer from "./Componentes/Footer/Index";
import Body from "./Componentes/Body/Index.js";
import "./Componentes/Estilo/Style-general.css";

// agregado por gabi
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Body />
      <Footer />
    </>
  );
};

export default App;
