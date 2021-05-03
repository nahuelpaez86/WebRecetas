import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[9],
    padding: theme.spacing(2, 4, 3),
    alignContent: 'center'
    
  },
  h3:{
    textAlign: 'center',
    
  },
}));

export default function ModalUsuario({open,handleClose}) {
  const classes = useStyles();
  

  return (
    <div>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.h3}>¡Su receta ha sido solicitada con exito!</h2>
            <h3 id="transition-modal-title" className={classes.h3}>Su receta sera enviada via Mail y WhatsApp</h3>
            <h4 id="transition-modal-tittle" className={classes.h3}>Gracias por utlizar el sistema de recetas online</h4>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
