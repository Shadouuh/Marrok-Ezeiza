import React from 'react';
import './styles.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>Sobre Nosotros</h1>
                <p className="about-subtitle">Distribuidores de marroquinería de calidad a precios accesibles</p>
            </section>

            {/* Our History Section */}
            <section className="about-history">
                <div className="about-container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Nuestra Historia</h2>
                            <p>
                                Ezeiza's Marroquinería nació en 2020 como una respuesta a la creciente demanda de 
                                artículos de cuero de calidad a precios accesibles. Somos distribuidores 
                                especializados que seleccionamos cuidadosamente nuestro stock de los mejores 
                                fabricantes nacionales e internacionales.
                            </p>
                            <p>
                                Nuestra misión es simple: ofrecer productos elegantes y duraderos sin el sobreprecio 
                                de las grandes marcas. Trabajamos directamente con fabricantes y compramos por 
                                volumen para trasladar esos ahorros a nuestros clientes, permitiéndoles acceder a 
                                marroquinería de primera calidad a precios competitivos.
                            </p>
                            <blockquote>
                                "Creemos que la elegancia y la calidad no deberían ser un lujo inalcanzable. 
                                Nuestro objetivo es democratizar el acceso a productos premium."
                                <cite>— Equipo Ezeiza's</cite>
                            </blockquote>
                        </div>
                        <div className="about-image">
                            <img 
                                src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                                alt="Artesano trabajando con cuero" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="about-approach">
                <div className="about-container">
                    <h2>Nuestro Enfoque</h2>
                    <p className="approach-description">
                        En Ezeiza's Marroquinería nos especializamos en seleccionar y distribuir productos de alta calidad.
                        No fabricamos, sino que elegimos lo mejor del mercado para ofrecerlo a precios competitivos a
                        través de nuestra plataforma online.
                    </p>

                    <div className="approach-features">
                        <div className="approach-feature">
                            <h3>Selección Premium</h3>
                            <p>Evaluamos rigurosamente cada producto para garantizar que solo lo mejor llegue a nuestros clientes.</p>
                        </div>
                        <div className="approach-feature">
                            <h3>Precios Competitivos</h3>
                            <p>Compramos por volumen y eliminamos intermediarios para ofrecer precios más accesibles.</p>
                        </div>
                        <div className="approach-feature">
                            <h3>Variedad de Marcas</h3>
                            <p>Trabajamos con marcas nacionales e importadas para ofrecer una amplia gama de opciones.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="about-process">
                <div className="about-container">
                    <h2>Cómo Trabajamos</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Selección de Productos</h3>
                            <p>Visitamos ferias y fábricas para seleccionar los mejores productos de cuero, evaluando calidad, diseño y precio.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Gestión de Stock</h3>
                            <p>Mantenemos un inventario optimizado para garantizar disponibilidad inmediata y precios competitivos.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Distribución Eficiente</h3>
                            <p>Trabajamos con los mejores servicios de logística para asegurar que tu pedido llegue rápido y en perfectas condiciones.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Brands Section */}
            <section className="about-brands">
                <div className="about-container">
                    <h2>Nuestras Marcas</h2>
                    <div className="brands-grid">
                        <div className="brand-card">
                            <h3>Cuero Argentino</h3>
                            <p>Artesanía local de primera calidad</p>
                        </div>
                        <div className="brand-card">
                            <h3>Milano Design</h3>
                            <p>Elegancia italiana importada</p>
                        </div>
                        <div className="brand-card">
                            <h3>Leather Premium</h3>
                            <p>Accesorios de lujo europeos</p>
                        </div>
                        <div className="brand-card">
                            <h3>Urban Style</h3>
                            <p>Diseños modernos y funcionales</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="about-cta">
                <div className="about-container">
                    <h2>Descubre Nuestra Selección</h2>
                    <p>Te invitamos a explorar nuestro catálogo de productos cuidadosamente seleccionados. Calidad premium a precios accesibles, directamente a tu puerta.</p>
                    <div className="cta-buttons">
                        <a href="/catalogo" className="cta-button primary">Ver Catálogo</a>
                        <a href="/contacto" className="cta-button secondary">Contactarnos</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;