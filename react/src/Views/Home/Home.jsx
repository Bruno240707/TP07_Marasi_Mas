import "./Home.css";

const Home = ({ productos }) => {
  return (
    <main className="main-content">
      <section className="hero">
        <h1>Bienvenidos a TP07</h1>
        <p>
          Los mejores celulares, al mejor precio. Calidad, confianza y la
          mascota oficial: ¡Marap!
        </p>
      </section>

      <section className="destacados">
        <h2>Productos Destacados</h2>

        <div className="carrusel-infinito">
          <div className="carrusel-track">
            {[...productos, ...productos].map((p) => (
              <div className="producto-card">
                <p><strong>{p.nombre}</strong></p>
                <img src={p.fotos[0]} />
                <p>{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
