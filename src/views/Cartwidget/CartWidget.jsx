import React, { useContext, useEffect, useState } from 'react';
import './cartWidget.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import emptyCart3 from "../../Imgs/emptyCard3.png";
import { ItemContext } from '../../components/CartContext/CartContext';

const CartWidget = () => {
  const { cart, setCart, count, setCount } = useContext(ItemContext);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const sumAll = cart.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
    setTotalSum(sumAll);
  }, [cart]);

  const deleteItem = (e) => {
    const selectedProdName = e.target.name;
    const updatedCart = cart.filter(item => item.name !== selectedProdName);
    const sumAll = updatedCart.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
    setCount(sumAll);
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return (
      <div className='cartWidget'>
        <Button
          style={{ alignSelf: 'flex-start', marginLeft: '3%', backgroundColor: "#c4c35a", marginTop: '3%' }}
          variant='contained'
        >
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/Shop'>
            Continue buying
          </NavLink>
        </Button>
        <div className='emptyCard'>
          <img src={emptyCart3} alt="emptyCard" />
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className='cartWidget'>
      <Button style={{ alignSelf: "flex-start", marginLeft: "3%", backgroundColor: "#c4c35a", marginTop: "3%" }} variant="contained">
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/Shop">Continue buying</NavLink>
      </Button>

      <TableContainer id="cartWidgetTable" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "start" }}>Product</TableCell>
              <TableCell align="right">Quant</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.cant}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">
                  <input className='deleteBtnForm' type="button" value="x" name={row.name} onClick={deleteItem} />
                </TableCell>
              </TableRow>
            ))}
            <TableRow style={{ backgroundColor: "rgba(139, 139, 139, 0.13)" }} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">TOTAL PRICE</TableCell>
              <TableCell align="right">${count}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button style={{ marginTop: "0", width: "23%", backgroundColor: "#00000069", marginBottom: "6%" }} variant="contained">
        <NavLink to="/checkout" style={{ textDecoration: "none", color: "white", width:"100%"}}>Proceed To Checkout</NavLink>
      </Button>
    </div>
  );
}

export default CartWidget;
