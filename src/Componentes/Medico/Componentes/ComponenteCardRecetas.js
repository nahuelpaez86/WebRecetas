 import  React,{useState} from 'react';

 // importaciones boton checkbox
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Checkbox from '@material-ui/core/Checkbox';

// imports card
 import clsx from 'clsx';
 import CardActions from '@material-ui/core/CardActions';
 import Collapse from '@material-ui/core/Collapse';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import Card from '@material-ui/core/Card';
 import CardHeader from '@material-ui/core/CardHeader'; 
 import CardContent from '@material-ui/core/CardContent';
 import {IconButton,Typography} from '@material-ui/core'; 
 import { DeleteOutlined } from '@material-ui/icons';
 import {Modal,Button} from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';      

// estilo de modal+boton delete 
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  card:{
    boxShadow: '6px 6px 6px black',

    

  },
}));




const CardRecetas =({data,handleDelete,handleClose,setRecetaSeleccionada,handleOpen,open,setReceta,receta })=> {
  const classes = useStyles();

  // eventos de  modal de eliminar
  const seleccionarReceta=(id)=>{
       setRecetaSeleccionada(id);
       handleOpen(); 
      };
  const bodyModal= ( 
        <div  className={classes.modal}>
           <h2>¿Desea eliminar  ?</h2>
               <div align="right">  
                   <Button color="primary" onClick={()=>handleDelete()} > Si </Button> 
                   <Button onClick={handleClose}>No </Button>
              </div>
         </div> );

// boton de receta hecha
{/* 
const handleChange =(e) => {
  if (e.target.checked){
    setReceta(...receta, [realizada] = true );
    console.log(receta.realizada)
  }else{
    setReceta(...receta, [realizada] = false );
    console.log(receta.realizada)
  }
};
*/}
// eventos card
 const [expanded, setExpanded] = React.useState(false);
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <div>
      
       <Card className={classes.card} > 
          <CardHeader
            action={ 
                 <IconButton onClick={()=>seleccionarReceta(data._id)}>
                    <DeleteOutlined />
                 </IconButton> }
                 title="Nueva receta solicitada el dia " />

                <Modal
                  open={open}
                  onClose={handleClose}>
                  {bodyModal}
                </Modal>

    {/* botones de accion en el card */}

          <CardActions disableSpacing>
            {/*
              <FormControlLabel
                  control={
                  <Checkbox checked={} 
                  //onChange={handleChange} 
                  //value={receta.realizada}
                  name="checkedA" />}
                  label="Receta Realizada" />
           */}
                   
                <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
              </IconButton>
         </CardActions>
         
    {/* Collapse que se abre al ejecutar el boton ExpandMoreIcon */}  
         
         <Collapse in={expanded} timeout="auto" unmountOnExit>
           <CardContent  >
             <Typography variant="body2">  
                   <b> Datos pesonales del paciente:</b> <br/>
                        <br/> Nombre y Apellido: {data.nombreApellido}
                        <br/>  DNI: {data.dni}
                        <br/> Numero de Telefono: {data.numerodeTelefono}
                        <br/>  Mail: {data.mail} <br/>
                        <br/> <b> ObraSocial:</b> <br/>
                        <br/>La obra social es: {data.obraSocial}
                        <br/>   El numero de Afiliado es: {data.numerodeAfiliado}  <br/>

                        <br/><b> Datos sobre la receta: </b> <br/>
                        <br/>Diagnostico: {data.diagnostico} 
                        <br/> Medicamento / mg / comp: {data.medicamento}
                        <br/> Cantidad: {data.cantidad}
                        <br/> Duplicado: {data.duplicado} <br/>

                        <br/><b> Otros medicamentos que necesita el paciente: </b> <br/>
                        <br/> Diagnostico 2: {data.diagnostico2}
                        <br/> Medicamento 2 / mg / comp: {data.medicamento2}
                        <br/> Cantidad 2: {data.cantidad2}
                        <br/> Duplicado 2: {data.duplicado2}<br />
                         
                        <br/> Diagnostico 3: {data.diagnostico3} 
                        <br/> Medicamento 3 / mg / comp: {data.medicamento3}
                        <br/> Cantidad 3: {data.cantidad3}
                        <br/> Duplicado 3: {data.duplicado3}<br />

                        <br/>Diagnostico 4: {data.diagnostico4} 
                        <br/> Medicamento 4 / mg / comp: {data.medicamento4}
                        <br/> Cantidad 4: {data.cantidad4}
                        <br/> Duplicado 4: {data.duplicado4}
             </Typography>
          </CardContent>
        </Collapse> 
       </Card>
    </div>




  );
} 

export default CardRecetas;