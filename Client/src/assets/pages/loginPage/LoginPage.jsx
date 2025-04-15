import './styles.css';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { LuCheck } from 'react-icons/lu';
import { useState } from 'react';
import { LuShoppingBag } from 'react-icons/lu'; // Add this import for the handbag icon

const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password, rememberMe });
    };

    // Featured products data
    const featuredProducts = [
        {
            id: 1,
            name: 'Tote Clásico',
            price: 20999,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'
        },
        {
            id: 2,
            name: 'Billetera Slim',
            price: 8999,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        },
        {
            id: 3,
            name: 'Portafolio de Cuero',
            price: 16999,
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
        },
        {
            id: 4,
            name: 'Bolso Crossbody',
            price: 22999,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        }
    ];

    // Format price function
    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-AR')}`;
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-left">
                    <div className="login-logo">
                        <LuShoppingBag className="logo-icon" /> {/* Replace img with icon */}
                        <h2>Marrok Ezeiza</h2>
                    </div>
                    <h3>Bienvenido a Marrok Ezeiza Marroquinería</h3>
                    <p className="login-description">
                        Accede a tu cuenta para disfrutar de una experiencia de compra
                        personalizada, seguimiento de pedidos y ofertas exclusivas.
                    </p>

                    <div className="login-benefits">
                        <h4>¿Por qué crear una cuenta?</h4>
                        <ul>
                            <li><LuCheck className="benefit-icon" /> Guarda tus productos favoritos</li>
                            <li><LuCheck className="benefit-icon" /> Realiza un seguimiento de tus pedidos</li>
                            <li><LuCheck className="benefit-icon" /> Accede a ofertas exclusivas para miembros</li>
                            <li><LuCheck className="benefit-icon" /> Guarda tus direcciones de envío</li>
                        </ul>
                    </div>

                    <div className="login-image">
                        <img
                            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
                            alt="Producto de marroquinería"
                        />
                    </div>
                </div>

                <div className="login-right">
                    <div className="login-form-container">
                        <h3>Iniciar Sesión</h3>
                        <p>Accede a tu cuenta de Marrok Ezeiza</p>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <div className="password-header">
                                    <label htmlFor="password">Contraseña</label>
                                    <Link to="/forgot-password" className="forgot-link">¿Olvidaste tu contraseña?</Link>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-checkbox">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="remember">Recordarme</label>
                            </div>

                            <button type="submit" className="login-button">Iniciar Sesión</button>
                        </form>

                        <div className="login-divider">
                            <span>O CONTINUAR CON</span>
                        </div>

                        <div className="social-login">
                            <button className="social-button google">
                                <FaGoogle /> Google
                            </button>
                            <button className="social-button facebook">
                                <FaFacebook /> Facebook
                            </button>
                        </div>

                        <div className="register-link">
                            <p>¿No tienes una cuenta? <Link to="/register">Crear una</Link></p>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* Featured Products Section */}
            <div className="featured-products-section">
                <h2>Productos Destacados</h2>
                <p className="featured-products-subtitle">
                    Inicia sesión para ver más detalles y realizar compras
                </p>
                
                <div className="featured-products-grid">
                    {featuredProducts.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{formatPrice(product.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;