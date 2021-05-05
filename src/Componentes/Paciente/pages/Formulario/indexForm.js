import React,{useState} from 'react';

//estilos
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import{useStyles} from './Componentes/Style';
import axios from 'axios';
import { FormControl } from '@material-ui/core';
// seccion obra social
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

//boton 
import Boton from '../../../Paciente/Componentes/Boton/Index';
import { IconButton } from '@material-ui/core';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
// componentes input
import DatosRecetas from './Componentes/InputsDatosReceta';
import ComponenteInput from './Componentes/Input';
import ModalUsuario from './Componentes/ModalUsuario';
const baseUrl ='https://recetas-online2021.herokuapp.com/api/receta/'

const Formulario= () => {
  const classes = useStyles();
  // ESTADOS
   
  const [receta,setReceta]=useState( {
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
  
  //const[obraSocial,setObraSocial]=useState(false);
   const onChangeHandler = (e) => {
  
    switch(e.target.name){
    case 'nombreApellido':
      setReceta({...receta, nombreApellido : e.target.value});
    break;
    case 'dni':
      setReceta({...receta, dni : e.target.value});
    break;
    case 'numero de afiliado':
      setReceta({...receta, numerodeAfiliado : e.target.value});
    break;
    case 'numero de telefono':
      setReceta({...receta, numerodeTelefono : e.target.value});
    break;
    case 'mail':
      setReceta({...receta, mail: e.target.value});
    break;
    case 'medicamento':
      setReceta({...receta, medicamento:e.target.value});
    break;
    case 'diagnostico':
      setReceta({...receta, diagnostico :e.target.value});
    break;
    case 'cantidad':
      setReceta({...receta, cantidad : e.target.value});
    break;
    case 'duplicado':
      setReceta({...receta, duplicado: e.target.value});
    break;
    // setReceta data recetas 2
    case 'medicamento2':
      setReceta({...receta, medicamento2:e.target.value});
    break;
    case 'diagnostico2':
      setReceta({...receta, diagnostico2 :e.target.value});
    break;
    case 'cantidad2':
      setReceta({...receta, cantidad2 : e.target.value});
    break;
    case 'duplicado2':
      setReceta({...receta, duplicado2: e.target.value});
    break;
  // setReceta data recetas 3
    case 'medicamento3':
      setReceta({...receta, medicamento3:e.target.value});
    break;
    case 'diagnostico3':
      setReceta({...receta, diagnostico3 :e.target.value});
    break;
    case 'cantidad3':
      setReceta({...receta, cantidad3 : e.target.value});
    break;
    case 'duplicado3':
      setReceta({...receta, duplicado3: e.target.value});
    break;
    // setReceta data recetas 4
    case 'medicamento4':
      setReceta({...receta, medicamento4:e.target.value});
    break;
    case 'diagnostico4':
      setReceta({...receta, diagnostico4 :e.target.value});
    break;
    case 'cantidad4':
      setReceta({...receta, cantidad4 : e.target.value});
    break;
    default:
      setReceta({...receta, duplicado4: e.target.value});
    break;
  }}
     
     
  
   // eventos btn enviar
      const [open, setOpen] = useState(false);
      const handleOpen = () => {
          setOpen(true);
        };
      
      const handleClose = () => {
          setOpen(false);
        };
      const Click = async (e) =>{
         e.preventDefault(); 
         axios.post(baseUrl,receta);
          handleOpen()
          console.log('esta funcionando')
        }
    
  
    // eventos obraSocial
      const[visible,setVisible]= useState(false)
      const pamiEvent= () =>{
        setVisible(true);
        setReceta({...receta, obraSocial :'Pami'});
       }
      const issnEvent =() =>{
        setReceta({...receta, obraSocial :'Issn'});
        setVisible(false);
      }
      
  
    // evento generar mas inputs de datos recetas 
      const[click,setClick]=useState(1)
      const [grupo2,setGrupo2]= useState(false);
      const [grupo3,setGrupo3]= useState(false);
      const [grupo4,setGrupo4]= useState(false);
      const mostrar2 ={ display:grupo2 ?'':'none'}
      const mostrar3 ={ display:grupo3 ?'':'none'}
      const mostrar4 ={ display:grupo4 ?'':'none'}
      
      const onClickGenerar= ()=> {
          console.log(click)
          if(click===1){
          setGrupo2(true)
          }
          else if(click===2){
            setGrupo2(true)
            setGrupo3(true)
            
          }else{
            setGrupo2(true)
            setGrupo3(true)
            setGrupo4(true)
          }
      }
  
  
    
    
  
  
  return (
    <div className={classes.general}>
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
             <Grid item xs={12} sm={12} className={classes.datos} > 
                <form className={classes.root} noValidate  >
                    <Grid  container  className={classes.containerInputs} justify="center" alignItems="center" spacing={1}>  

         {/*datos personales */}
                {/* <div className={classes.separador}> <h4>Datos personales </h4> </div> */}
                     <Grid  container className={classes.gruposDeInputs} spacing={2} > 
                          <Grid item xs={6} sm={6} xl={6}>
                              <ComponenteInput 
                                holder ="Nombre y Apellidos"
                                label="Nombre y Apellidos"
                                campo= "nombreApellido"
                                name  ="nombreApellido"
                                type="text"
                                receta ={receta}
                                onChange={onChangeHandler} 
                                fullWidth= {true}/>

                          </Grid>
                          <Grid item xs={6} sm={6} xl={6}>
                              <ComponenteInput 
                                  holder ="DNI"
                                  label="DNI"
                                  campo= "dni"
                                  name  ="dni"
                                  type="number"
                                  receta ={receta}
                                  onChange={onChangeHandler} 
                                  fullWidth= {true}/>
                          </Grid> 
                          <Grid item xs={6} sm={6} xl={6}>
                            <ComponenteInput 
                                  holder ="Mail"
                                  label="Mail"
                                  campo= "mail"
                                  name  ="mail"
                                  type="email"
                                  receta ={receta}
                                  onChange={onChangeHandler} 
                                  fullWidth= {true}/>
                          </Grid>
                          <Grid  item xs={6} sm={6} xl={6}>
                          <ComponenteInput 
                              holder ="Numero de Telefono"
                              label="Numero de Telefono"
                              campo= "numero de telefono"
                              name  ="numero de telefono"
                              type="number"
                              receta ={receta}
                              onChange={onChangeHandler}
                              fullWidth= {true} />
                      </Grid>
                     </Grid>
                 

        {/* obra social */}
          {/*  <div className={classes.separador}>  </div>*/}
                      <Grid item align="center" sm={12} >
                                  <FormControl component="fieldset">
                                          <FormLabel component="legend" >Obra Social</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1"  className={classes.btnObraSocial}>
                                                <FormControlLabel 
                                                  value="Issn"
                                                  control={<Radio color="primary"/>} 
                                                  label="ISSN"
                                                  onClick={() => issnEvent()}
                                                  labelPlacement="end" />
                                                  
                                                <FormControlLabel
                                                  value="Ocultar" 
                                                  control={<Radio color="primary"/>}  
                                                  label="PAMI" 
                                                  onClick={() =>pamiEvent()} 
                                                  labelPlacement="end"/>
                                                
                                              </RadioGroup>
                                  </FormControl>  
                                  <ComponenteInput
                                        holder ="Numero de Afiliado"
                                        label="Numero de Afiliado"
                                        campo= "numero de afiliado"
                                        name  ="numero de afiliado"
                                        type="number"
                                        receta ={receta}
                                        onChange={onChangeHandler}
                                        id="inputAfiliado"
                                        disabled={!visible}
                                        size="small"
                                        /> 
                      </Grid>
                      
              
        {/* Datos de recetas */}
                   {/*  <div className={classes.separador}> <h4> Datos receta </h4> </div>*/}
                          <Grid  container className={classes.gruposDeInputs} > 
                              <DatosRecetas 
                                    holder1="Diagnostico"
                                    name1="diagnostico"
                                    holder2="Medicamento / mg / comp o amp "
                                    name2="medicamento"
                                    holder3="Cajas"
                                    name3="cantidad"
                                    duplicado="duplicado"
                                    setReceta={setReceta}
                                    receta={receta}
                                    onChange={onChangeHandler} />
                              
                                {/* Datos Recetas adicionales */}    
                                    <div style={mostrar2}> 
                                 {/*    <div className={classes.separador2}> <h4 className={classes.h4}> Medicamento 2 </h4> </div>*/}   
                                            <DatosRecetas 
                                                    holder1="Diagnostico 2"
                                                    name1="diagnostico2"
                                                    holder2="Medicamento / mg / comp o amp "
                                                    name2="medicamento"
                                                    holder3="Cajas"
                                                    name3="cantidad2"
                                                    duplicado="duplicado2"
                                                    receta={receta}
                                                    setReceta={setReceta}
                                                    onChange={onChangeHandler} />
                                    </div>
                                    <div style={mostrar3}> 
                                 {/*    <div className={classes.separador2}> <h4 className={classes.h4}> Medicamento 3 </h4> </div>*/} 
                                              <DatosRecetas 
                                                    holder1="Diagnostico 3"
                                                    name1="diagnostico3"
                                                    holder2="Medicamento / mg / comp o amp "
                                                    name2="medicamento"
                                                    holder3="Cajas"
                                                    name3="cantidad3"
                                                    duplicado="duplicado3"
                                                    setReceta={setReceta}
                                                    receta={receta}
                                                    onChange={onChangeHandler} />
                                    </div>
                                    <div style={mostrar4}> 
                                      {/*  <div className={classes.separador2}> <h4 className={classes.h4}> Medicamento 4 </h4> </div>*/} 
                                    
                                            <DatosRecetas 
                                                  holder1="Diagnostico 4"
                                                  name1="diagnostico4"
                                                  holder2="Medicamento / mg / comp o amp "
                                                  name2="medicamento"
                                                  holder3="Cajas"
                                                  name3="cantidad4"
                                                  duplicado="duplicado4"
                                                  setReceta={setReceta}
                                                  receta={receta}
                                                  onChange={onChangeHandler} />  
                                    </div>
                              </Grid>
                          </Grid>
                      </form>
                  </Grid>
                   {/*botones   */}           
                  <Grid  container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <IconButton
                             onClick={()=>onClickGenerar(setClick(click + 1 ))}
                             className={classes.btnMedicacion}> 
                            <AddBoxRoundedIcon /> Necesito mas de un medicamento
                          </IconButton>
                          <Boton  nombre='Enviar' onClick={Click} className={classes.btnEnviar}/>
                    </Grid>
                  {/* Modal de Envio */}    
                  <ModalUsuario  open={open} handleClose={handleClose}/>


              </Grid>
          </Grid>
          
              
        </Container>
    </div>
  );
};
export default Formulario;
