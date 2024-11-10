// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "5 kg",
    price: 200,
    image: "./product1.jpg",
  },
  {
    id: 2,
    name: "10 kg",
    price: 390,
    image: "./product2.jpg",
  },
  {
    id: 3,
    name: "Fine Bran",
    weight: "40 kg",
    price: 890,
    image: "./product3.jpg",
  },
  {
    id: 4,
    name: "26 kg",
    price: 936,
    image: "./product4.jpg",
  },
];

const Footer = () => (
  <footer>
    <p>&copy; Gopal Trading Company 2024. All rights reserved.</p>
  </footer>
);

// App.js (Updated ProductCard component)
const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image-container">
      <img src={product.image} alt={product.name} className="product-image" />
    </div>
    <h3>{product.name} - {product.weight}</h3>
    <p>Price: {product.price} ₹</p>
  </div>
);

// App.js (Updated Home Component)
const Home = () => {
  // Separate products into two categories
  const attaProducts = products.filter((product) => product.id !== 3);
  const fineBranProduct = products.find((product) => product.id === 3);

  return (
    <div >
      <h1>Welcome to Our Store</h1>
      <p>Explore our selection of high-quality products:</p>

      {/* Chakki Atta Section */}
      <section className="product-section">
        <h2>Chakki Atta</h2>
        <p>
        PARI GOLD M.P. Chakki Atta is crafted from the finest quality wheat,ensuring you get a product that’s as pure and wholesome as homemade. Our wheat undergoes a meticulous and hygienic processing methodthat retains essential nutrients, including vital minerals, vitamins, proteins, and natural fiber, ensuring no nutritional loss. </p>
        <div className="product-grid">
          {attaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Fine Bran Section */}
      <section className="product-section">
        <h2>Fine Bran</h2>
        <p>
          Pari Gold Fine Bran is beneficial feed for cattle, with high fiber
          content that helps improve digestion. It enhances coat condition,
          builds muscle mass, improves metabolism, and provides energy.
        </p>
        <div className="product-grid">
          <ProductCard product={fineBranProduct} />
        </div>
      </section>
      <section className="product-section">
        <About />
      </section>
       {/* Contact Section */}
       <section className="contact-section">
        <Contact />
      </section>
    </div>
  );
};
// Contact.js

const Contact = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const address = `
    Head Office :-
    Gopal Trading Company
    Akodiya Sarangpur Road Near Police Station
    Tehsil :- Shujalpur
    District  :- Shajapur :- 465223 M. P. India
    Contact no. :-  9111981729  `;

  // Handle right-click to show custom context menu
  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuVisible(true);
  };

  // Hide context menu on click outside
  const hideContextMenu = () => {
    setMenuVisible(false);
  };

  // Copy address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
    hideContextMenu();
  };

  return (
    <div className="contact" onClick={hideContextMenu}>
      <h1>Contact Us</h1>
      <div className="contact-address" onContextMenu={handleContextMenu}>
        <p>Head Office :-</p>
        <p>Gopal Trading Company</p>
        <p>Akodiya Sarangpur Road Near Police Station</p>
        <p>Tehsil :- Shujalpur</p>
        <p>District :- Shajapur :- 465223 M. P. India</p>
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
;


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
