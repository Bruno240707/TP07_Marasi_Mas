import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductosCard from "../../Componentes/ProductosCard/ProductosCard"
import "./Productos.css"

const Productos = ({productos}) => {

const { idMarca } = useParams()

    const [productosSeleccionados, setProductosSeleccionados] = useState([])

    useEffect(() => {
        if(idMarca) {
            const filtrados = productos.filter((p) => p.marcaId == idMarca)
            setProductosSeleccionados(filtrados)
        }
        else {
            setProductosSeleccionados(productos)
        }
    }, [idMarca, productos])

    return (
        <>
            <div className="contenedorGeneralP">
                {productosSeleccionados.map((p) => (
                    <ProductosCard producto={p} />
                ))}
            </div>
        </>
    )
}

export default Productos