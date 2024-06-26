import React ,{useContext}from 'react'
import { ItemContext } from "../../components/CartContext/CartContext";
import './cartWidget.css'
import { redirect, useNavigate, NavLink } from "react-router-dom"
import WidgetForm from '../../components/Forms/WidgetForm';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import Swal from 'sweetalert2'
import Button from '@mui/material/Button'

const Checkout = () => {
      
        const {cart, count, fillOrder, eliminarStock} = useContext(ItemContext)

        const [showPassword, setShowPassword] = React.useState(false);
        
        const handleClickShowPassword = () => setShowPassword((show) => !show);
        
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
        
        const navigate = useNavigate();

        const goBack = () => {
         navigate(-1);
       };

       let totalTicket = count


     
    const redirectWzp = () => {
 
    //fillOrder(); 
         // Reemplaza '123456789' con el número de teléfono al que deseas redirigir
    const numeroTelefono = '+5492494590425';
    
    // El mensaje que se enviará, opcional
    const mensaje = 'Envianos un mensaje para finalizar tu compra';
    
    // Construir la URL de redirección
    const url = `https://wa.me/${numeroTelefono}/?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir a la URL de WhatsApp
    window.location.href = url;
       }


        const showTerms = () => {
          Swal.fire({
            title: 'Terminos y Condiciones',
            html:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum sequi, ipsum tempora quod laudantium cupiditate eaque repudiandae voluptas qui saepe molestias ducimus itaque veritatis accusantium consequuntur delectus, est sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum sequi, ipsum tempora quod laudantium cupiditate eaque repudiandae voluptas qui saepe molestias ducimus itaque veritatis accusantium consequuntur delectus, est sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum sequi, ipsum tempora quod laudantium cupiditate eaque repudiandae voluptas qui saepe molestias ducimus itaque veritatis accusantium consequuntur delectus, est sit',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }

        const aplicarDescuento = () => {
          alert('descuento aplicado')
        }
     
        return (
        <div className='checkout'>
         
         <Button
          style={{ alignSelf: 'flex-start', marginLeft: '2%', backgroundColor: "#c4c35a", marginTop: '2%' }}
          variant='contained'
        >
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/Widget'>
            Go back
          </NavLink>
        </Button>

     
        
        <div className='widgetCont'>
        
        <WidgetForm/>
        
        <div className='ticket'>
        
        <h3>Checkout options</h3>
        <Divider id='ticketDivider1' />
        <div className='giftOption'>
          <div>
          <label htmlFor="cupon">Discount code:</label>
          <input type="text" placeholder='' name='cupon'
          />
          </div>
          <button id="go_input" onClick={aplicarDescuento}>APPLY DISCOUNT</button>
          </div>
        
        
        <h3 className='orderDetails'>Checkout details</h3>
        <Divider id='ticketDivider2'/>
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>

              {cart.map((e) => (
                     <tr>
                     <td>{e.name} x {e.cant}u</td>
                     <td>${e.total}</td>
                     </tr>))}

                <tr>
                  <td>Shipping</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${totalTicket}</td>
                </tr>
              </tbody>
            </table>
        
        <div>
        <div className='aclaration'>
        Once the purchase is completed, you will be redirected to our WhatsApp number to complete the payment.
        </div>
        </div>
            <div className='giftOption'>
              <div>
              <Checkbox/> <h5>I have read and accept the <button onClick={showTerms}>TERMS AND CONDITIONS</button></h5> 
              </div>
            </div>
           
          
           <button onClick={redirectWzp} id="finalize">FINISH PURCHASE</button>
        
        </div>
        </div>
        </div>
          );
        }
        


export default Checkout 

/*  <div className='cardInput'>
            <div className='cardNumber'>
            <div className='credCards'>
                <img src={visaIcon} alt="visaIcon" />
                <img src={mastercardIcon} alt="mastercardIcon" />
                <img src={otherCardIcon} alt="mastercardIcon" />
            </div>
                  <TextField
                  label="Number"
                  type="number"
                />
        
            </div>
            <div>
                <FormControl  style={{width:"94%"}} sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">MM / YY</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    
                    endAdornment={
                      <InputAdornment position="end">
                      
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
          
                <FormControl style={{width:"94%", marginTop:"0"}} sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          * {showPassword ? <VisibilityOff /> : <Visibility />} 
                          </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
            
                  </div>
                  </div>*/