import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';

// formulario
 const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  containerMain:{
      background:' whitesmoke',
      height:'auto',
      width:'100px',
      borderRadius:'40px',
      textAlign:'center',
      
  },
  general: {
    maxHeight:'auto',
    backgroundColor:'#8AAFE5',
    paddingBottom:' 2em',
    height:'vh',
  },
  datos: {
   // background:'red',
    marginTop:'50px',
    
  },
  titulo:{
    textAlign: 'center',
    color:'white',
  },
   

    root: {
     display: 'flex',
     flexWrap:'nowrap',
     
    },
    margin: {
     margin: theme.spacing(3),
     '& input:valid + fieldset': {
      borderColor: 'blue',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'blue',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
    },
    separador:{
     textAlign:'center',
     background:'cornflowerblue',
     borderRadius:'300px',
     height:'5px',
     width:'200px',
     position:'relative',
     //bottom:'20px',
   },
   separador2:{
    
    textAlign:'center',
    background:'cornflowerblue',
    borderRadius:'300px',
    height:'5px',
    width:'200px',
    position:'relative',
    bottom:'10px',
    left:'166px',
  },
  h4:{
    position:'relative',
    top:'15px',
    left:'2px',
  },


   gruposDeInputs: {
     maxWidth:'500px',
     position:'relative',
     right:'20px',
    },
    
   btnMedicacion:{
     height:'45px',
     width:'300px',
     color:'black',
     fontSize: '16px',
    
   },
 
    

    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },
    
  }));

  export  {useStyles, TextField};
