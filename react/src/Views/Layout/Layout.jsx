import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {


  return (
    <>
        <header className="header">
            <div className="left-section">
                <div className="barra-lateral"></div>
                <Link to={"/"}>
                <img className="logo" src="https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-movil-degradado_23-2149699533.jpg?semt=ais_items_boosted&w=740"/>
                </Link>
            </div>

            <div className="center-section">
                <Link to={"/quienes-somos"}>
                <p className="nav-link">Quienes Somos</p>
                </Link>
                <Link to={"/contacto"}>
                <p className="nav-link">Contacto</p>
                </Link>
                <Link to={"/Productos"}>
                <p className="nav-link">Productos</p>
                </Link>
            </div>
        </header>

        <Outlet/>

        <footer className="footer">
            <div className="footer-left">
                <div className="left-section">
                <div className="barra-lateral"></div>
                <p className="logo-text">TP07</p>
                </div>
                <p className="footer-slogan">
                TP PRODUCIDO POR EITAN MAS Y BRUNO MARASI.
                </p>

            </div>

            <div className="footer-copyright">
                Copyright © 2025 BRUNO MARASI - EITAN MAS
            </div>
        </footer>
    </>
    
  );
};

export default Layout;