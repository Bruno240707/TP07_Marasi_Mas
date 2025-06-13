import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductosCard from "../../Componentes/ProductosCard/ProductosCard"
import "./Productos.css"

const Productos = ({productos}) => {

const { idMarca } = useParams()

    const productosFiltrados = idMarca ? productos.filter((p) => p.marcaId == idMarca) : productos

    return (
        <>
            <div className="contenedorGeneralP">
                {productosFiltrados.map((p) => (
                    <ProductosCard producto={p} />
                ))}
            </div>
        </>
    )
}

export default Productos