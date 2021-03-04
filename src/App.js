import MenuAppBar from './Componentes/Header';
import Footer from './Componentes/Footer';
import Body from './Componentes/body.js';
import './Componentes/Estilo/app.css';

const App = ()=> {
 

  return ( 
    <>
      <div className="Main"> 
        
        <MenuAppBar/>
         <Body/>
        <Footer/>
      
      </div>
    </>
  );



}

export default App;
