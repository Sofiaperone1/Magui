import React, {useContext } from 'react';
import "../../views/ContactForm/ContactForm.css";
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material';
import { ItemContext } from '../CartContext/CartContext';

const WidgetForm = () => {
  // Estado local para los cambios del formulario
 // const {formChanges,setFormChanges, showForm} = useContext(ItemContext)
 const {setFormChanges} = useContext(ItemContext)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormChanges(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  /*
  const handleEnvioChange = (event) => {
    const value = event.target.value;
    setFormChanges(prevState => ({
      ...prevState,
      envio: value
    }));
  };
 <button onClick={showForm}>show form</button> */

  return (
    <div className='formWidget'>
    
      <h3>Shipping details</h3>
      <Divider />
      <form>
        <div className='name'>
          <div className='inputCont'>
            <p>Nombre *</p>
            <TextField
              name="nombre"
             // value={formChanges.nombre}
              onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
            />
          </div>

          <div className='inputCont'>
            <p>Apellido *</p>
            <TextField
              name="apellido"
           //   value={formChanges.apellido}
              onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
            />
          </div>
        </div>

        <div className='phone'>
          <p>Email *</p>
          <TextField
              name="email"
             // value={formChanges.email}
              onChange={handleInputChange}
              id="outlined-basic"
              variant="outlined"
            />
        </div>

   

        <div className='phone'>
          <p>Celular *</p>
          <TextField
            name="celular"
         //   value={formChanges.celular}
            onChange={handleInputChange}
          />
        </div>

        <div className='message'>
          <p>Mensaje adicional</p>
          <TextField
            name="mensaje"
         //   value={formChanges.mensaje}
            onChange={handleInputChange}
            id="outlined-multiline-static"
            multiline
            rows={4}
          />
        </div>
      </form>
    </div>
  );
}

export default WidgetForm;