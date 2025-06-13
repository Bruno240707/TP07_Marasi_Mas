import { useParams } from "react-router-dom"
import "./Producto.css"

const Producto = ({ productos }) => {
  const { idCelular } = useParams()
  const producto = productos.find((p) => p.id == idCelular)

  return (
    <main className="producto-container">
      <section className="producto-info">
        <h1 className="producto-nombre">{producto.nombre}</h1>
        <p className="producto-descripcion">{producto.descripcion}</p>
        <p className="producto-precio">${producto.precio}</p>
      </section>
      
      <section className="producto-galeria">
        {producto.fotos.map((f, i) => (
          <img key={i} src={f} className="producto-foto" />
        ))}
      </section>
    </main>
  )
}

export default Producto
