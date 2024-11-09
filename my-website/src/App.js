// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "Product 1",
    weight: "1kg",
    price: 19.99,
    image: "./product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    weight: "5kg",
    price: 29.99,
    image: "./product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    weight: "10kg",
    price: 39.99,
    image: "./product3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    weight: "20kg",
    price: 49.99,
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
    <p>Price: ${product.price}</p>
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
        PARI GOLD M.P. Chakki Atta is crafted from the finest quality wheat,ensuring you get a product that’s as pure and wholesome as homemade. Our wheat undergoes a meticulous and hygienic processing method, We utilize a slow grinding process that retains essential nutrients, including vital minerals, vitamins, proteins, and natural fiber, ensuring no nutritional loss. </p>
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
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:gtc.operations@yahoo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
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
