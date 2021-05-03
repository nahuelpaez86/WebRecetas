import React,{useState} from "react";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import img from '../../../Paciente/Componentes/Header/IconoMain.png'
// menu 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from'@material-ui/core/useMediaQuery';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Button from '@material-ui/core/Button';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    fontFamily:'sans-serif',
    marginTop:'8px',
  },
  appBar: {
    background:'#3153AB',
    height:'70px',
    
   },
   logo:{
     height:'60px',
     width:'60px',
     marginLeft:'10px',
   },
  button: {
    margin: theme.spacing(1),
    color:'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'black',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  
   //menu iconos
   const theme= useTheme();
   const mobile= useMediaQuery(theme.breakpoints.down('xs'));
   // menu mobile 
   const [menu, setMenu] = useState(null);
 
   const handleClick = (event) => {
     setMenu(event.currentTarget);
   };
 
   const handleClose = () => {
     setMenu(null);
   };

  return (
    <div className={classes.root}>

      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          
           
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    onClick={handleClick}
                    color="inherit"
                    >
                    <MenuIcon />
                  </IconButton>
                  <div>
                    <Menu
                      id="simple-menu"
                      anchorEl={menu}
                      keepMounted
                      open={Boolean(menu)}
                      onClose={handleClose}
                      borderRadius={16}
                      p={10}>
                      <a href='/'>
                      <MenuItem onClick={handleClose}> Inicio</MenuItem>
                      </a>
                      <a href='/requerimientos'>
                      <MenuItem onClick={handleClose}> Recetas</MenuItem>
                      </a>
                    
                    </Menu>
                 </div>
          

        
          <Typography variant="h4" className={classes.title} align="right"> 
         
            Recetas Online
          </Typography>
          <img src={img} className={classes.logo} />

      
        </Toolbar>
      </AppBar>
   
    </div>
  );
}
export default NavBar;