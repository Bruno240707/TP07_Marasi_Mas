import "./Home.css"

const Home = () =>{

    return (
        <>
            <main class="main-content">
                <section class="hero">
                <h1>Bienvenidos a TP07</h1>
                <p>Los mejores celulares, al mejor precio. Calidad, confianza y la mascota oficial: ¡Marap!</p>
                </section>

                <section class="destacados">
                <h2>Productos Destacados</h2>
                <div class="productos-grid">
                    <div class="producto-card">
                    <img src="https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2024/12/589580.jpg" />
                    <h3>Celular Pro</h3>
                    <p>Rendimiento premium a un precio justo.</p>
                    </div>
                    <div class="producto-card">
                    <img src="https://www.mmx.com.ar/wp-content/uploads/2024/12/xiaomi-14t-1024x800.jpg" />
                    <h3>Celular Eco</h3>
                    <p>Ideal para el día a día, económico y confiable.</p>
                    </div>
                    <div class="producto-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0KmJeERJ-f7m6QN0-oTxNnVam-2W8Oa4ig&s" />
                    <h3>Celular Max</h3>
                    <p>Pantalla enorme y batería de larga duración.</p>
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}

export default Home