
import React from "react"
import { useLocation ,Routes, Route} from "react-router-dom";
import './App.css';
import FrontPage from './views/FrontPage/FrontPage';
import Portafolio from "./views/Portafolio/Portafolio";
import Contacto from "./views/Contacto/Contacto";
import Tienda from "./views/Tienda/Tienda";
import Taller from "./views/Taller/Taller";
import OtrosLinks from "./views/OtrosLinks/OtrosLInks";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

function App() {
  const location = useLocation();
  return (
<div>
    {location.pathname !== "/" && <Navbar/>}
      <Routes>

       <Route exact path="/" element={<FrontPage/>} />
       <Route exact path="/Home" element={<Home/>} />
       <Route exact path="/Portafolio" element={<Portafolio/>} />
       <Route exact path="/Contacto" element={<Contacto/>}/>
       <Route exact path="/Tienda" element={<Tienda/>}/>
       <Route exact path="/Taller" element={<Taller/>}/>
       <Route exact path="/OtrosLinks" element={<OtrosLinks/>}/>

      </Routes>
      
</div>
       
  
  );
}

export default App;
