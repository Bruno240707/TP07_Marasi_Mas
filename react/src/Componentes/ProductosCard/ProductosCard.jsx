import { useNavigate } from "react-router-dom"
import "./ProductosCard.css"

const ProductosCard = ({producto}) =>{

    const navigate = useNavigate()

    const onClickIr = (id) =>{
        navigate(`/producto/${id}`)
    }

    return (
        <>
            <div className="contenedorCardProductos">
                <p>Nombre: {producto.nombre}</p>
                <p>Descripcion: {producto.descripcion}</p>
                <p>Descripcion: {producto.precio}</p>
                <div className="imagenesProducto">
                {producto.fotos.map((f) => (
                    <img src={f} alt={`Producto ${producto.nombre}`} />
                ))}
                </div>
                <button onClick={() => onClickIr(producto.id)}> Ir </button>
            </div>
        </>
    )
}

export default ProductosCard