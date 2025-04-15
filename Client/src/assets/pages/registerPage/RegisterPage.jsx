import './styles.css';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { LuShoppingBag, LuCheck } from 'react-icons/lu';
import { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registration attempt with:', formData);
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-left">
                    <div className="register-logo">
                        <LuShoppingBag className="logo-icon" />
                        <h2>Marrok Ezeiza</h2>
                    </div>
                    <h3>Únete a Marrok Ezeiza Marroquinería</h3>
                    <p className="register-description">
                        Crea una cuenta para acceder a beneficios exclusivos, seguimiento de
                        pedidos y una experiencia de compra personalizada.
                    </p>
                    
                    <div className="register-benefits">
                        <h4>Beneficios de ser miembro</h4>
                        <ul>
                            <li><LuCheck className="benefit-icon" /> Acceso a ofertas exclusivas</li>
                            <li><LuCheck className="benefit-icon" /> Guarda tus productos favoritos</li>
                            <li><LuCheck className="benefit-icon" /> Historial de compras y seguimiento de pedidos</li>
                            <li><LuCheck className="benefit-icon" /> Proceso de compra más rápido</li>
                        </ul>
                    </div>
                    
                    <div className="register-image">
                        <img 
                            src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                            alt="Productos de cuero" 
                        />
                    </div>
                </div>
                
                <div className="register-right">
                    <div className="register-form-container">
                        <h3>Crear Cuenta</h3>
                        <p>Únete a Marrok Ezeiza para acceder a beneficios exclusivos</p>
                        
                        <form onSubmit={handleSubmit} className="register-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input 
                                        type="text" 
                                        id="nombre"
                                        name="nombre"
                                        placeholder="María" 
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="apellido">Apellido</label>
                                    <input 
                                        type="text" 
                                        id="apellido"
                                        name="apellido"
                                        placeholder="García" 
                                        value={formData.apellido}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder="tu@email.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password"
                                    placeholder="********" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                <input 
                                    type="password" 
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="********" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="form-checkbox">
                                <input 
                                    type="checkbox" 
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="acceptTerms">
                                    Acepto los <Link to="/terminos" className="terms-link">Términos de Servicio</Link> y la <Link to="/privacidad" className="terms-link">Política de Privacidad</Link>
                                </label>
                            </div>
                            
                            <button type="submit" className="register-button">Crear Cuenta</button>
                        </form>
                        
                        <div className="register-divider">
                            <span>O REGÍSTRATE CON</span>
                        </div>
                        
                        <div className="social-register">
                            <button className="social-button google">
                                <FaGoogle /> Google
                            </button>
                            <button className="social-button facebook">
                                <FaFacebook /> Facebook
                            </button>
                        </div>
                        
                        <div className="login-link">
                            <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;