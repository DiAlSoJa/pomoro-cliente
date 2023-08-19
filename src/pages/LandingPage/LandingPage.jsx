import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <h1>Título llamativo de tu producto</h1>
        <p>Descripción breve y convincente que destaque los beneficios.</p>
        <button className="cta-button">¡Compra ahora!</button>
      </section>
      <section className="benefits-section">
        <h2>Beneficios Clave</h2>
        <ul>
          <li><span>✓</span>Beneficio 1: Soluciona un problema</li>
          <li><span>✓</span>Beneficio 2: Ahorra tiempo</li>
          <li><span>✓</span>Beneficio 3: Mejora la eficiencia</li>
        </ul>
      </section>
      {/* Otras secciones como Prueba Social, Características Detalladas, etc. */}
      <section className="cta-section">
        <h2>¿Listo para mejorar tu vida?</h2>
        <button className="cta-button">¡Compra ahora!</button>
      </section>
      <footer>
        <div className="contact-info">
          <p>Contáctanos en: ejemplo@correo.com</p>
        </div>
        <div className="social-links">
          <a href="https://facebook.com/ejemplo">Facebook</a>
          <a href="https://twitter.com/ejemplo">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
