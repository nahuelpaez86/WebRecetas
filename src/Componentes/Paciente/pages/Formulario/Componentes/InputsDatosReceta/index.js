import React,{useState} from 'react';
import ComponenteInput from '../../Componentes/Input';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles((theme) => ({
check:{
  
  marginRight:'140px',
  marginBottom:'25px',
}
 
}));


const DatosRecetas=({receta,onChange,holder1,holder2,holder3,name1,name2,name3,duplicado,setReceta}) => {
  const classes = useStyles();
 // evento duplicado 


   const EventDuplicado= (e) => { 
     if(e.target.checked) {
      setReceta({...receta, [duplicado]: 'Necesito duplicado'});

     }else{
        console.log('no')
     }
    }
  
 
  return(
      <div> 
        <Grid container direction="row"
                 spacing={3}>
          
          <Grid item xs={12} sm={12} xl={12} >
            <ComponenteInput 
                 holder ={holder1}
                 label ={holder1}
                 campo= {name1}
                 name  ={name1}
                 type="text"
                 receta ={receta}
                 onChange={onChange}
                 fullWidth= {true}
                 />
            </Grid>  
           
           <Grid item xs={8} sm={9} xl={9} >
                <ComponenteInput 
                 holder ={holder2}
                 label ={holder2}
                 campo= {name2}
                 name  ={name2}
                 type="text"
                 receta ={receta}
                 onChange={onChange}
                 fullWidth= {true}
                 
                 />
          </Grid>  
           
           
           <Grid item xs={4} sm={3} xl={3}>
                <ComponenteInput 
                 holder ={holder3}
                 label ={holder3}
                 campo= {name3}
                 name  ={name3}
                 type="number"
                 receta ={receta}
                 onChange={onChange}
                 fullWidth= {true}
                 
                 
                 
                 />
           </Grid>  

    {/* duplicados */}
           <Grid  item xs={12}sm={12} xl={12} className={classes.check} > 
             <FormControl component="fieldset">
                <Grid item xs={12} sm={12} align="center">
                  <FormControl component="fieldset">
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value={duplicado}
                            control={<Checkbox color="primary" />}
                            onChange={EventDuplicado}
                            label="Necesito duplicado de esta receta"
                            labelPlacement="end"
                          />
                      </FormGroup>
                    </FormControl>
                  </Grid> 
            </FormControl>  
           </Grid>
           
        </Grid>
                  
      </div>
    );
}

export default DatosRecetas;