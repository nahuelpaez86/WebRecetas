import  React,{useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
// axios api
import axios from 'axios';
import CardRecetas from '../../../Componentes/Medico/Componentes/ComponenteCardRecetas.js';
import {useStyles} from '../../../Componentes/Medico/Style.js';
//BD
//const baseUrl ='http://localhost:4000/api/receta/medico/';
const baseUrl ='https://recetas-online2021.herokuapp.com/api/receta/medico/'
const Cards=()=>{
 const classes = useStyles ();
  // estado ( receta main)
  const [receta,setReceta]=useState([]) ; 
  const [recetaSeleccionada, setRecetaSeleccionada]=useState({
    nombreApellido:'',
    dni: '',
    obraSocial: '',
    numerodeAfiliado: '',
    numerodeTelefono: '',
    mail: '',
    medicamento: '',
    diagnostico:'',
    cantidad: '',
    duplicado:'',
    medicamento2: '',
    diagnostico2: '',
    cantidad2: '',
    duplicado2:'',
    medicamento3: '',
    diagnostico3:'',
    cantidad3: '',
    duplicado3:'',
    medicamento4: '',
    diagnostico4:'',
    cantidad4: '',
    duplicado4:'',
    realizada: ''
    });
  // GET 

  const peticionGet = async ()=>{
    const response = await axios.get(baseUrl);
    return response
  } 

  // funciones eliminar y modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    
  };
 const handleDelete =async()=>{
       await axios.delete(baseUrl+recetaSeleccionada)
       
      .then(response=>{
         setReceta(receta.filter(data=>data._id!==recetaSeleccionada));
         handleClose();
       
        
       })
       
       };

useEffect (() =>{
    const iniData = async()=>{
      const response = await peticionGet();
    
      if (response.status === 200){
        setReceta(response.data);
      }
      else{
        setReceta([])
      }
    }
    iniData();

  }
  ,[receta]); // [actualiza el estado]

 return (
   <Grid container  
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.main}> 
     <Grid className={classes.tableDiv}> 
       <div className={classes.tittle}> <h2> Bienvenido a su centro de control de Recetas Solicitadas!</h2></div>
        <Grid 
         container  
         direction="row"
         justify="center"
         alignItems="center"
         spacing={2}
         className={classes.containerCards}> 
          {receta && receta.length > 0 ? receta.map (data => (
            
              <Grid   item xs={4} sm={3} key={data._id} > 
                  <CardRecetas 
                      data={data} 
                      handleDelete={handleDelete}
                      handleClose={handleClose} 
                      handleOpen={handleOpen}
                      open={open}
                      setReceta={setReceta}
                      receta={receta}
                      realizada={receta.realizada}
                      setRecetaSeleccionada={setRecetaSeleccionada} />
              </Grid> 
             )) : null}
            </Grid>
       </Grid>
    </Grid> 
    );}
export default Cards;