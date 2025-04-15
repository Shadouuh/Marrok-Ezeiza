import { useRef } from 'react';
import './styles.css';

const Home = () => {
    const featuredSectionRef = useRef(null);
    
    const scrollToFeatured = () => {
        featuredSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Collection data
    const collections = [
        {
            id: 1,
            title: 'Bolsos Clásicos',
            description: 'Elegancia atemporal para uso diario',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'
        },
        {
            id: 2,
            title: 'Billeteras de Cuero',
            description: 'Lujo funcional en tu bolsillo',
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        },
        {
            id: 3,
            title: 'Esenciales de Oficina',
            description: 'Eleva tu espacio de trabajo',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
        }
    ];
    
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Artesanía Excepcional</h1>
                    <p>Artículos de cuero diseñados para los momentos importantes de la vida</p>
                    <button className="explore-button" onClick={scrollToFeatured}>
                        Explorar Colección
                    </button>
                </div>
            </section>
            
            {/* Collections Section */}
            <section className="collections-section" ref={featuredSectionRef}>
                <div className="section-container">
                    <h2>Colecciones Destacadas</h2>
                    
                    <div className="collections-grid">
                        {collections.map(collection => (
                            <div className="collection-card" key={collection.id}>
                                <div className="collection-image">
                                    <img src={collection.image} alt={collection.title} />
                                </div>
                                <div className="collection-info">
                                    <h3>{collection.title}</h3>
                                    <p>{collection.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Featured Products Section */}
            <section className="featured-section">
                <div className="section-container">
                    <h2>Nuestra Colección</h2>
                    <p className="section-subtitle">Descubre nuestros productos más destacados</p>
                    
                    <div className="featured-products">
                        {/* Product cards will go here */}
                        <div className="product-placeholder">Productos destacados aparecerán aquí</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;