

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    // main styles
    main:{
     height:'1300px',
     backgroundColor:'#8AAFE5',
     
     
     
    },
    //tabla div
    tableDiv: {
     backgroundColor:'whiteSmoke',
     height:'1200px',
     maxWidth:'1300px',
     borderRadius:'20px',
     padding:'100px',
     marginTop:'10px',
     
     
    },
    tittle:{
      textAlign:'center',
      fontFamily:'Fira Sans Condensed',
      fontSize:'20px',
      
      
    },

    containerCards:{
      marginTop:'50px',
      overflow: 'auto',
      maxWidth:'1000px',
      height:'800px',
      
      
    },
   
    //tamaño general
    tableContainer: {
      
      position:'relative',
      top:'150px',
      height:'1000px',
      width:'auto',
      
      background:'white',
    },
    tableHead:{
     
     backgroundColor:'cornflowerblue',
     width:'auto'
    },


    modal: {
      position: 'absolute',
      width: 400,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top:'50%',
      left:'50%',
      transform: 'translate(-50%, -50%)'
    },
    btnModal: {
      textAlign:'center',
      fontSize:'30px',
      fontFamily:'Fira Sans Condensed',
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


  export {useStyles};