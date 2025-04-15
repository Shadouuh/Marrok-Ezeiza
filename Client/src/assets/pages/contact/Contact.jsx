import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import './styles.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        asunto: '',
        mensaje: ''
    });
    
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.nombre || !formData.email || !formData.mensaje) {
            setFormStatus({
                submitted: true,
                error: true,
                message: 'Por favor complete todos los campos requeridos.'
            });
            return;
        }
        
        // Here you would normally send the form data to your backend
        // For now, we'll just simulate a successful submission
        setFormStatus({
            submitted: true,
            error: false,
            message: '¡Gracias por contactarnos! Te responderemos a la brevedad.'
        });
        
        // Reset form after successful submission
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            asunto: '',
            mensaje: ''
        });
    };
    
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contáctanos</h1>
                <p>Nos encantaría saber de ti. Por favor, completa el formulario a continuación o contáctanos por nuestros canales de comunicación.</p>
            </div>
            
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-info-card">
                        <h2>Información de Contacto</h2>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FiMapPin />
                            </div>
                            <div className="contact-text">
                                <h3>Dirección</h3>
                                <p>Trabajamos desde nuestro taller en Ezeiza</p>
                                <p>Buenos Aires, Argentina</p>
                                <p className="contact-note">(Solo envíos, sin atención al público)</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FiPhone />
                            </div>
                            <div className="contact-text">
                                <h3>Teléfono</h3>
                                <p>+54 11 1234 5678</p>
                            </div>
                        </div>
                        
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <FiMail />
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>info@ezeizasmarroquineria.com</p>
                            </div>
                        </div>

                        <div className="contact-map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13111.271927516018!2d-58.53249790000001!3d-34.85499985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea841%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e0!3m2!1ses!2sar!4v1652345678901!5m2!1ses!2sar" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Ezeiza's Marroquinería"
                    ></iframe>
                </div>
                    </div>
                    
                    <div className="contact-form-container">
                        <h2>Envíanos un Mensaje</h2>
                        
                        {formStatus.submitted && (
                            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                {formStatus.message}
                            </div>
                        )}
                        
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input 
                                        type="text" 
                                        id="nombre" 
                                        name="nombre" 
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
                                        value={formData.apellido}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="asunto">Asunto</label>
                                <input 
                                    type="text" 
                                    id="asunto" 
                                    name="asunto" 
                                    value={formData.asunto}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea 
                                    id="mensaje" 
                                    name="mensaje" 
                                    rows="5"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-button">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Contact;