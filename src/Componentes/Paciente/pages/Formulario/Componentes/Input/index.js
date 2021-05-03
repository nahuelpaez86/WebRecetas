import React from 'react';


import{useStyles} from '../../Componentes/Style';

 
import TextField from '@material-ui/core/TextField';

const ComponenteInput = ({holder,receta,onChange,campo,name,type,size,disabled,label,fullWidth})=>{
    const classes = useStyles();


    
     
    return(
      <div> 
        
    
            <TextField
              className={classes.margin}
              placeholder={holder}
              label={label}
              required
              value={receta.campo}
              variant="outlined"
              name={name}
              type={type}
              onChange={onChange}
              id="validation-outlined-input"
              disabled={disabled}
              size={size}
              fullWidth={fullWidth}
             
            />
    
      </div>
       





    );
}
export default ComponenteInput;