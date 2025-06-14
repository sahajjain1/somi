// App.js
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "500 g",
    price: 50,
    image: "./product1.jpg",
    description: "Premium quality 500 G pack",
    features: ["Rich in Fiber", "No Preservatives"]
  },
  {
    id: 2,
    name: "5 kg",
    price: 200,
    image: "./product2.jpg",
    description: "Family size 5kg pack",
    features: ["Pure Wheat", "Rich in Fiber", "No Preservatives"]
  },
  {
    id: 3,
    name: "Fine Bran",
    weight: "40 kg",
    price: 890,
    image: "./product3.jpg",
    description: "Premium cattle feed",
    features: ["High Fiber", "Rich in Nutrients", "Improves Digestion"]
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Gopal Trading Company</h3>
        <p>Your trusted partner in quality products</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <p>Phone: 9111981729</p>
        <p>Email: info@gopaltrading.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; Gopal Trading Company 2024. All rights reserved.</p>
    </div>
  </footer>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-badge">Best Seller</div>
    <div className="product-image-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-overlay">
        <button className="quick-view-button">Quick View</button>
      </div>
    </div>
    <div className="product-content">
      <h3 className="product-title">{product.name} {product.weight && `- ${product.weight}`}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-features">
        {product.features.map((feature, index) => (
          <span key={index} className="feature-tag">{feature}</span>
        ))}
      </div>
      <div className="product-price">₹{product.price}</div>
      <div className="product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="view-button">View Details</button>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const productsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const attaProducts = products.filter((product) => product.id !== 3);
  const fineBranProduct = products.find((product) => product.id === 3);

  return (
    <div className="home-container">
      <section className={`hero-section ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title animate-text">Welcome to Gopal Trading Company</h1>
          <p className="hero-subtitle animate-text-delay">Your Trusted Partner in Quality Products</p>
          <button className="cta-button animate-button" onClick={scrollToProducts}>
            Explore Products
            <span className="button-icon">↓</span>
          </button>
        </div>
        <div className="hero-waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <div ref={productsRef}>
        <section className={`product-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Chakki Atta</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              PARI PERFECT M.P. Chakki Atta is crafted from the finest quality wheat, ensuring you get a product that's as pure and wholesome as homemade. Our wheat undergoes a meticulous and hygienic processing method that retains essential nutrients, including vital minerals, vitamins, proteins, and natural fiber, ensuring no nutritional loss.
            </p>
          </div>
          <div className="product-grid">
            {attaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className={`product-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Fine Bran</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Pari GOLD Fine Bran is beneficial feed for cattle, with high fiber content that helps improve digestion. It enhances coat condition, builds muscle mass, improves metabolism, and provides energy.
            </p>
          </div>
          <div className="product-grid">
            <ProductCard product={fineBranProduct} />
          </div>
        </section>
      </div>

      <section className="features-section">
        <div className="feature-card animate-feature">
          <i className="feature-icon">🚚</i>
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery service</p>
        </div>
        <div className="feature-card animate-feature-delay-1">
          <i className="feature-icon">⭐</i>
          <h3>Quality Assured</h3>
          <p>Premium quality products</p>
        </div>
        <div className="feature-card animate-feature-delay-2">
          <i className="feature-icon">💯</i>
          <h3>100% Natural</h3>
          <p>Pure and natural ingredients</p>
        </div>
      </section>

      <section className="about-preview">
        <About />
      </section>

      <section className="contact-section">
        <Contact />
      </section>
    </div>
  );
};

const Contact = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const address = `
    Head Office :-
    Gopal Trading Company
    Akodia Sarangpur Road Near Police Station
    Tehsil :- Shujalpur
    District  :- Shajapur :- 465223 M. P. India
    Contact no. :-  9111981729  `;

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuVisible(true);
  };

  const hideContextMenu = () => {
    setMenuVisible(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
    hideContextMenu();
  };

  return (
    <div className="contact" onClick={hideContextMenu}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-address" onContextMenu={handleContextMenu}>
              <h3>Our Location</h3>
              <p>Head Office :-</p>
              <p>Gopal Trading Company</p>
              <p>Akodiya Sarangpur Road Near Police Station</p>
              <p>Tehsil :- Shujalpur</p>
              <p>District :- Shajapur :- 465223 M. P. India</p>
            </div>
            <div className="contact-details">
              <h3>Get in Touch</h3>
              <p>📞 Phone: 9111981729</p>
              <p>✉️ Email: info@gopaltrading.com</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {menuVisible && (
        <div
          className="context-menu"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <button onClick={copyToClipboard}>Copy Address</button>
          <button onClick={() => alert('Get Directions')}>Get Directions</button>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
