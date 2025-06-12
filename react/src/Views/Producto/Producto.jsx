import { useEffect, useState } from "react"
import "./Producto.css"
import { useParams } from "react-router-dom"

const Producto = ({productos}) => {

    const { idCelular } = useParams()
    const [producto, setProducto] = useState()

    useEffect(() => {
        const filtrados = productos.find((p) => p.id == idCelular)
        setProducto(filtrados)
    }, [idCelular, productos])

    if (!producto) return <p>Producto no encontrado o cargando...</p>

    return (
        <>
            <h1>Nombre: {producto.nombre}</h1>
            <p>Descripcion: {producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
            {producto.fotos.map((f) => (
                <img src={f}></img>
            ))}
        </>
    )
}

export default Producto