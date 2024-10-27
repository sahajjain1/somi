import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import About from "./About";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    image: "./product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 29.99,
    image: "./product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: 39.99,
    image: "./product3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for Product 4",
    price: 49.99,
    image: "./product4.jpg",
  },
];
// Components

const Footer = () => (
  <footer>
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
  </footer>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <Link to={`/products/${product.id}`} className="view-button">
      View Details
    </Link>
  </div>
);

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <p>Check out our featured products:</p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

const Contact = () => (
  <div className="contact">
    <h1>Contact Us</h1>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
