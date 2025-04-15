import './styles.css';
import { Link } from 'react-router-dom';
import { LuSearch, LuUser, LuShoppingBag, LuChevronDown } from 'react-icons/lu';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdowns, setActiveDropdowns] = useState({});

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (index) => {
        setActiveDropdowns({
            ...activeDropdowns,
            [index]: !activeDropdowns[index]
        });
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" aria-label="Marrok Ezeiza Home">
                        <h1>Marrok Ezeiza</h1>
                    </Link>
                </div>
                
                <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li className={`navbar-dropdown ${activeDropdowns[0] ? 'active' : ''}`}>
                            <span onClick={() => toggleDropdown(0)}>
                                Mujer <LuChevronDown className="icon" />
                            </span>
                            <div className="dropdown-content">
                                <Link to="/mujer/carteras" onClick={toggleMenu}>Carteras</Link>
                                <Link to="/mujer/billeteras" onClick={toggleMenu}>Billeteras</Link>
                                <Link to="/mujer/accesorios" onClick={toggleMenu}>Accesorios</Link>
                            </div>
                        </li>
                        <li className={`navbar-dropdown ${activeDropdowns[1] ? 'active' : ''}`}>
                            <span onClick={() => toggleDropdown(1)}>
                                Hombre <LuChevronDown className="icon" />
                            </span>
                            <div className="dropdown-content">
                                <Link to="/hombre/billeteras" onClick={toggleMenu}>Billeteras</Link>
                                <Link to="/hombre/cinturones" onClick={toggleMenu}>Cinturones</Link>
                                <Link to="/hombre/accesorios" onClick={toggleMenu}>Accesorios</Link>
                            </div>
                        </li>
                        <li className={`navbar-dropdown ${activeDropdowns[2] ? 'active' : ''}`}>
                            <span onClick={() => toggleDropdown(2)}>
                                Hogar & Oficina <LuChevronDown className="icon" />
                            </span>
                            <div className="dropdown-content">
                                <Link to="/hogar/decoracion" onClick={toggleMenu}>Decoración</Link>
                                <Link to="/oficina/accesorios" onClick={toggleMenu}>Accesorios</Link>
                            </div>
                        </li>
                        <li className={`navbar-dropdown ${activeDropdowns[3] ? 'active' : ''}`}>
                            <span onClick={() => toggleDropdown(3)}>
                                Marcas <LuChevronDown className="icon" />
                            </span>
                            <div className="dropdown-content">
                                <Link to="/marcas/premium" onClick={toggleMenu}>Premium</Link>
                                <Link to="/marcas/clasica" onClick={toggleMenu}>Clásica</Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/catalogo" onClick={toggleMenu}>Catálogo</Link>
                        </li>
                        <li>
                            <Link to="/nosotros" onClick={toggleMenu}>Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="navbar-actions">
                    <button className="icon-button" aria-label="Buscar">
                        <LuSearch className="icon" />
                    </button>
                    <Link to="/account" className="icon-button" aria-label="Mi cuenta">
                        <LuUser className="icon" />
                    </Link>
                    <Link to="/cart" className="icon-button" aria-label="Carrito de compras">
                        <LuShoppingBag className="icon" />
                        <span className="cart-count">0</span>
                    </Link>
                </div>
            </div>
            
            <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        </nav>
    );
}

export default Navbar;