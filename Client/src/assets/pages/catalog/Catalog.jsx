import { useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        category: [],
        color: [],
        price: { min: 0, max: 100000 }
    });
    const [expandedFilters, setExpandedFilters] = useState({
        category: true,
        color: true,
        price: true
    });

    // Sample product data - this would come from your API/database
    const products = [
        {
            id: '1',
            name: 'Tote Clásico',
            price: 28999,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            colors: ['#261c15', '#c8a887', '#e9d9c6'],
            category: 'Bolsos',
            isNew: true,
            isFeatured: true
        },
        {
            id: '2',
            name: 'Billetera Slim',
            price: 8999,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            colors: ['#261c15', '#5b3c11', '#e9d9c6'],
            category: 'Billeteras',
            isNew: false,
            isFeatured: false
        },
        {
            id: '3',
            name: 'Portafolio de Cuero',
            price: 15999,
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
            colors: ['#261c15', '#c8a887'],
            category: 'Artículos de Escritorio',
            isNew: false,
            isFeatured: false
        }
    ];

    // Available categories and colors for filters
    const categories = ['Bolsos', 'Billeteras', 'Accesorios', 'Artículos de Escritorio', 'Artículos de Viaje'];
    const colors = [
        { name: 'Negro', code: '#261c15' },
        { name: 'Marrón', code: '#5b3c11' },
        { name: 'Tostado', code: '#c8a887' },
        { name: 'Borgoña', code: '#8c1c13' },
        { name: 'Azul Marino', code: '#1a2639' }
    ];

    const toggleFilter = (type, value) => {
        setFilters(prev => {
            const currentFilters = [...prev[type]];
            const index = currentFilters.indexOf(value);
            
            if (index === -1) {
                currentFilters.push(value);
            } else {
                currentFilters.splice(index, 1);
            }
            
            return { ...prev, [type]: currentFilters };
        });
    };

    const toggleFilterSection = (section) => {
        setExpandedFilters(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const clearFilters = () => {
        setFilters({
            category: [],
            color: [],
            price: { min: 0, max: 100000 }
        });
        setSearchTerm('');
    };

    const handleAddToCart = (productId) => {
        console.log(`Added product ${productId} to cart`);
        // Add your cart logic here
    };
    
    const handleAddToFavorites = (productId) => {
        console.log(`Added product ${productId} to favorites`);
        // Add your favorites logic here
    };

    // Filter products based on search and filters
    const filteredProducts = products.filter(product => {
        // Search term filter
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        
        // Category filter
        if (filters.category.length > 0 && !filters.category.includes(product.category)) {
            return false;
        }
        
        // Color filter
        if (filters.color.length > 0) {
            const productColorCodes = product.colors;
            const filterColorCodes = filters.color.map(colorName => 
                colors.find(c => c.name === colorName)?.code
            );
            
            if (!productColorCodes.some(code => filterColorCodes.includes(code))) {
                return false;
            }
        }
        
        // Price filter
        if (product.price < filters.price.min || product.price > filters.price.max) {
            return false;
        }
        
        return true;
    });

    return (
        <div className="catalog-page">
            <h1 className="catalog-title">Catálogo de Productos</h1>
            
            <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            
            <div className="catalog-content">
                <aside className="filters-sidebar">
                    <div className="filters-header">
                        <h2>Filtros</h2>
                        <button className="clear-filters" onClick={clearFilters}>
                            Limpiar Filtros
                        </button>
                    </div>
                    
                    {/* Category Filter */}
                    <div className="filter-section">
                        <div 
                            className="filter-header" 
                            onClick={() => toggleFilterSection('category')}
                        >
                            <h3>Categoría</h3>
                            <span className={`arrow ${expandedFilters.category ? 'up' : 'down'}`}>
                                &#9650;
                            </span>
                        </div>
                        
                        {expandedFilters.category && (
                            <div className="filter-options">
                                {categories.map(category => (
                                    <label key={category} className="filter-option">
                                        <input
                                            type="checkbox"
                                            checked={filters.category.includes(category)}
                                            onChange={() => toggleFilter('category', category)}
                                        />
                                        <span>{category}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Color Filter */}
                    <div className="filter-section">
                        <div 
                            className="filter-header" 
                            onClick={() => toggleFilterSection('color')}
                        >
                            <h3>Color</h3>
                            <span className={`arrow ${expandedFilters.color ? 'up' : 'down'}`}>
                                &#9650;
                            </span>
                        </div>
                        
                        {expandedFilters.color && (
                            <div className="filter-options">
                                {colors.map(color => (
                                    <label key={color.name} className="filter-option color-option">
                                        <input
                                            type="checkbox"
                                            checked={filters.color.includes(color.name)}
                                            onChange={() => toggleFilter('color', color.name)}
                                        />
                                        <span 
                                            className="color-swatch" 
                                            style={{ backgroundColor: color.code }}
                                        ></span>
                                        <span>{color.name}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Price Filter */}
                    <div className="filter-section">
                        <div 
                            className="filter-header" 
                            onClick={() => toggleFilterSection('price')}
                        >
                            <h3>Precio</h3>
                            <span className={`arrow ${expandedFilters.price ? 'up' : 'down'}`}>
                                &#9650;
                            </span>
                        </div>
                        
                        {expandedFilters.price && (
                            <div className="filter-options price-range">
                                {/* Price range slider would go here */}
                                <div className="price-inputs">
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="50000" 
                                        step="1000"
                                        value={filters.price.max} 
                                        onChange={(e) => setFilters(prev => ({
                                            ...prev, 
                                            price: { ...prev.price, max: Number(e.target.value) }
                                        }))}
                                        className="price-slider"
                                    />
                                    <div className="price-values">
                                        <span>$0</span>
                                        <span>${filters.price.max}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>
                
                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                colors={product.colors}
                                isNew={product.isNew}
                                isFeatured={product.isFeatured}
                                onAddToCart={handleAddToCart}
                                onAddToFavorites={handleAddToFavorites}
                            />
                        ))
                    ) : (
                        <div className="no-products">
                            <p>No se encontraron productos que coincidan con los filtros seleccionados.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Catalog;