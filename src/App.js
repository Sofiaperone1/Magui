
import React from "react"
import { useLocation ,Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Portafolio from "./views/Portafolio/Portafolio";
import ContactForm from "./views/ContactForm/ContactForm"
import Tienda from "./views/Tienda/Tienda";
import Taller from "./views/Taller/Taller";
import OtrosLinks from "./views/OtrosLinks/OtrosLInks";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Footer from "./components/Footer/Footer";
import ItemDetail from "./views/ItemDetail/ItemDetail"
import CartWidget from "./views/Cartwidget/CartWidget";
import Checkout from "./views/Cartwidget/Checkout"

function App() {

  return (

<div>
      <Navbar/>
      <Routes>

       <Route exact path="/" element={<Home/>} />
       <Route exact path="/Portfolio" element={<Portafolio/>} />
       <Route exact path="/Contact" element={<ContactForm/>}/>
       <Route exact path="/Shop" element={<Tienda/>}/>
       <Route exact path="/Workshops" element={<Taller/>}/>
       <Route exact path="/Others" element={<OtrosLinks/>}/>
       <Route path="/products/:name" element={<ItemDetail />} />
       <Route path="/Widget" element={<CartWidget />} />
      <Route path="/checkout" element={<Checkout/>} />
      </Routes>

      <Footer/>
</div>
     

  
  );
}

export default App;
