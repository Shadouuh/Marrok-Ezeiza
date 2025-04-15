import './styles.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <Link to="/" className="footer-brand">
                        Marrok Ezeiza Marroquinería
                    </Link>
                    <p className="footer-copyright">
                        © {currentYear} Marrok Ezeiza Marroquinería. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;