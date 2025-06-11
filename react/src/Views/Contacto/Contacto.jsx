import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1>CONTACTANOS</h1>

      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" type="text" placeholder="Ingrese su nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input id="apellido" type="text" placeholder="Ingrese su apellido" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Ingrese su email" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            type="text"
            placeholder="Ingrese su número de teléfono"
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
