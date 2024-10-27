import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleQuickView = (e) => {
    e.preventDefault();
    // Add quick view functionality here
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        <div className="product-overlay"></div>
        {product.isNew && (
          <span className="product-badge">New</span>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          {product.price.toFixed(2)}
        </div>
        
        <div className="product-actions">
          <Link 
            to={`/products/${product.id}`} 
            className="view-button"
          >
            View Details
          </Link>
          <button 
            className="quick-view-button"
            onClick={handleQuickView}
            aria-label="Quick view"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;