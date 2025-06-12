import { Routes, Route } from "react-router-dom";

//DATA
import { marcas, celulares } from "./data";

// VIEWS
import Layout from "./Views/Layout/Layout";
import QuienesSomos from "./Views/QuienesSomos/QuienesSomos";
import Contacto from "./Views/Contacto/Contacto";
import Productos from "./Views/Productos/Productos";
import Home from "./Views/Home/Home";
import Producto from "./Views/Producto/Producto";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout marcas={marcas}/>}>
        <Route index element={<Home productos={celulares}/>}></Route>
        <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/producto/:idCelular" element={<Producto productos={celulares}/>}></Route>
        <Route path="/productos/:idMarca?" element={<Productos  marcas={marcas} productos={celulares}/>}></Route>

      </Route>
    </Routes>
  );
};

export default App;
