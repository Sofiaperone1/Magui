import React from 'react'
import contactForm from "../../Imgs/contact.png";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';


const Form = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <div id='fondoForm'>
        <div className='formCardDecoration' >
            <h3>
                CONTACT US
            </h3>
            <Divider />
            <p>
            Please fill out the contact form and explain your situation, or contact us directly at <span>maguprints@gmail.com</span> , we are here to assist you during our working hours, Monday to Friday.
            </p>
            <img src={contactForm} alt="imagen de contacto" />
        </div>
        <div className='formCard'>
        <form>
        <p>Name</p>
        <TextField id="outlined-basic" variant="outlined" />
        <p>Email </p>
        <TextField id="outlined-basic"  variant="outlined" />
        <p>CC</p>
        <TextField id="outlined-basic" variant="outlined" />
        <p>SMS</p>
        <TextField
          id="outlined-multiline-static"

          multiline
          rows={4}

        />
      {/* <div className='suscribeDiv'>
       <p>Suscribite a nuestro  </p> 
        <Checkbox {...label} />
      </div> */}
    
        <Button id="submitBtnC" variant="contained" style={{marginTop:"7%"}}>Send</Button> 
        <Button id="submitBtnW" variant="contained" style={{marginTop:"7%"}}>WhatsApp link</Button> 
        </form>
        </div>
            
</div>

  ) }

export default Form;