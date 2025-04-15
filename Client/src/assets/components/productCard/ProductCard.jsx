import { useState, useEffect } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import './styles.css';

const ProductCard = ({ 
    id, 
    name, 
    price, 
    image, 
    colors = [], 
    isNew = false, 
    isFeatured = false,
    onAddToCart,
    onAddToFavorites
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActionsVisible, setIsActionsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
    
    const handleCardClick = () => {
        if (isMobile) {
            setIsActionsVisible(!isActionsVisible);
        }
    };
    
    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (onAddToCart) onAddToCart(id);
    };
    
    const handleAddToFavorites = (e) => {
        e.stopPropagation();
        if (onAddToFavorites) onAddToFavorites(id);
    };
    
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    }).format(price);
    
    return (
        <div 
            className="product-card"
            onClick={handleCardClick}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="product-image-container">
                <img src={image} alt={name} className="product-image" />
                
                {isNew && <span className="product-badge new">Nuevo</span>}
                {isFeatured && <span className="product-badge featured">Destacado</span>}
                
                <div className={`product-actions ${(isHovered || isActionsVisible) ? 'visible' : ''}`}>
                    <button 
                        className="action-button favorite"
                        onClick={handleAddToFavorites}
                        aria-label="Añadir a favoritos"
                    >
                        <FiHeart />
                    </button>
                    
                    <button 
                        className="action-button cart"
                        onClick={handleAddToCart}
                        aria-label="Añadir al carrito"
                    >
                        <span className="button-text">Agregar al Carrito</span>
                        <FiShoppingCart />
                    </button>
                </div>
            </div>
            
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{formattedPrice}</p>
                
                {colors.length > 0 && (
                    <div className="product-colors">
                        {colors.map((color, index) => (
                            <span 
                                key={index}
                                className="color-dot"
                                style={{ backgroundColor: color }}
                                aria-label={`Color ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;