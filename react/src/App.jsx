import { Routes, Route } from "react-router-dom";

// VIEWS
import Layout from "./Views/Layout/Layout";
import QuienesSomos from "./Views/QuienesSomos/QuienesSomos";
import Contacto from "./Views/Contacto/Contacto";
import Productos from "./Views/Productos/Productos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        
      </Route>
    </Routes>
  );
};

export default App;
