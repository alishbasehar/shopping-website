import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; // Import menu and close icons
import women1 from './assets/women1.jpg'; // Sample local image import
import women2 from './assets/women2.jpg';
import women3 from './assets/women3.jpg';
import women4 from './assets/women4.jpg';
import women5 from './assets/women5.jpg';
import women6 from './assets/women6.jpg';
import women7 from './assets/women7.jpg';
import women8 from './assets/women8.jpg';
import women9 from './assets/women9.jpg';
import women10 from './assets/women10.jpg';
import women11 from './assets/women11.jpg';
import women12 from './assets/women12.jpg';
import men1 from './assets/men1.jpg';
import men2 from './assets/men2.jpg';
import men3 from './assets/men3.jpg';
import men4 from './assets/men4.jpg';
import men5 from './assets/men5.jpg';
import men6 from './assets/men6.jpg';
import men8 from './assets/men8.jpg';
import men9 from './assets/men9.jpg';
import men10 from './assets/men10.jpg';
import men11 from './assets/men11.jpg';
import men12 from './assets/men12.jpg';
import men13 from './assets/men13.jpg';
import kid1 from './assets/kid1.jpg';
import kid2 from './assets/kid2.jpg';
import kid3 from './assets/kid3.jpg';
import kid4 from './assets/kid4.jpg';
import kid5 from './assets/kid5.jpg';
import kid6 from './assets/kid6.jpg';
import kid7 from './assets/kid7.jpg';
import kid8 from './assets/kid8.jpg';
import kid9 from './assets/kid9.jpg';
import "./App.css";

// Sample Products Data (unchanged)
const womenProducts = [
  { id: 1, name: "Women's Product 1", price: 125, image: women1 },
  { id: 2, name: "Women's Product 2", price: 99, image: women2 },
  { id: 3, name: "Women's Product 3", price: 100, image: women3 },
  { id: 4, name: "Women's Product 4", price: 150, image: women4 },
  { id: 5, name: "Women's Product 5", price: 250, image: women5 },
  { id: 6, name: "Women's Product 6", price: 20, image: women6 },
  { id: 7, name: "Women's Product 4", price: 150, image: women7 },
  { id: 8, name: "Women's Product 5", price: 250, image: women8 },
  { id: 9, name: "Women's Product 6", price: 20, image: women9 },
  { id: 10, name: "Women's Product 4", price: 150, image: women10 },
  { id: 11, name: "Women's Product 5", price: 250, image: women11 },
  { id: 12, name: "Women's Product 6", price: 20, image: women12 },
];

const menProducts = [
  { id: 13, name: "Men's Product 1", price: 135, image: men1 },
  { id: 14, name: "Men's Product 2", price: 150, image: men4 },
  { id: 15, name: "Men's Product 3", price: 145, image: men3 },
  { id: 16, name: "Men's Product 4", price: 180, image: men4 },
  { id: 17, name: "Men's Product 5", price: 135, image: men5 },
  { id: 18, name: "Men's Product 6", price: 150, image: men6 },
  { id: 19, name: "Men's Product 7", price: 145, image: men8 },
  { id: 20, name: "Men's Product 8", price: 180, image: men9 },
  { id: 21, name: "Men's Product 9", price: 135, image: men10 },
  { id: 22, name: "Men's Product 10", price: 150, image: men11 },
  { id: 23, name: "Men's Product 11", price: 145, image: men12 },
  { id: 24, name: "Men's Product 12", price: 180, image: men13 },
];

const kidsProducts = [
  { id: 25, name: "Kids' Product 1", price: 50, image: kid1 },
  { id: 26, name: "Kids' Product 2", price: 60, image: kid2 },
  { id: 27, name: "Kids' Product 3", price: 50, image: kid3 },
  { id: 28, name: "Kids' Product 4", price: 60, image: kid4 },
  { id: 29, name: "Kids' Product 5", price: 50, image: kid5 },
  { id: 30, name: "Kids' Product 6", price: 60, image: kid6 },
  { id: 31, name: "Kids' Product 7", price: 50, image: kid7 },
  { id: 32, name: "Kids' Product 8", price: 60, image: kid8 },
  { id: 33, name: "Kids' Product 9", price: 50, image: kid9 },
];

const allProducts = [
  ...womenProducts.map((product) => ({ ...product, category: "Women" })),
  ...menProducts.map((product) => ({ ...product, category: "Men" })),
  ...kidsProducts.map((product) => ({ ...product, category: "Kids" })),
];

// Separate pages for Privacy Policy, Shipping Policy, FAQ
const PrivacyPolicy = () => (
  <div className="policy-page">
    <h1>Privacy Policy</h1>
    <p>We are committed to protecting your privacy and ensuring the security of your personal information. Any data collected from you is handled with the utmost care and stored securely to prevent unauthorized access, disclosure, or misuse. We adhere to strict data protection policies and comply with all applicable privacy laws and regulations.</p>
    <p>Your personal information may be used for the following purposes:</p>
    <ul>
      <li><strong>Providing Services:</strong> To deliver the products, services, or information you have requested from us.</li>
      <li><strong>Communication:</strong> To keep you informed about updates, promotions, and relevant news, provided you have consented to receive such communications.</li>
      <li><strong>Improving User Experience:</strong> To analyze and enhance your experience on our website, ensuring it is tailored to your needs and preferences.</li>
      <li><strong>Marketing:</strong> To send you personalized offers, advertisements, and promotions that may be of interest to you. Rest assured, we will never sell your data to third parties for their marketing purposes.</li>
    </ul>
    <p>We value your trust and are transparent about how your data is used. You have the right to access, update, or delete your personal information at any time. If you wish to opt out of receiving marketing communications or have any concerns about how your data is handled, please contact us at <a href="mailto:privacy@example.com">privacy@example.com</a>.</p>
    <p>We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, but only to the extent necessary and under strict confidentiality agreements. These third parties are prohibited from using your information for any purpose other than what we have specified.</p>
    <p>In the event of a data breach, we will take immediate action to mitigate any potential harm and notify you promptly if your personal information is compromised.</p>
    <p>By using our services, you consent to the collection and use of your information as outlined in this privacy policy. We regularly review and update our practices to ensure they align with the latest security standards and legal requirements. Your privacy is our priority, and we are dedicated to maintaining your trust every step of the way.</p>
  </div>
);

const ShippingPolicy = () => (
  <div className="policy-page">
    <h1>Shipping Policy</h1>
    <p>We offer free shipping on all orders over $50. Orders are processed within 1-2 business days, and you can expect delivery within 5-7 business days, depending on your location. Expedited shipping options are available during checkout for an additional fee.</p>
  </div>
);

const FAQ = () => (
  <div className="policy-page">
    <h1>FAQ</h1>
    <ul>
      <li>What payment methods do you accept?</li>
      <li>Can I return an item?</li>
      <li>Do you ship internationally?</li>
      <li>How do I track my order?</li>
      <li>What if an item is out of stock?</li>
    </ul>
  </div>
);

// Main App component
const App = () => {
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, size }]);
  };

  const removeFromCart = (productId, size) => {
    setCart(cart.filter(item => item.id !== productId || item.size !== size));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const renderProducts = (products) => (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="view-details-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );

  const ProductDetails = () => {
    const { id } = useParams();
    const product = allProducts.find((item) => item.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState("");
    const [isSizeChartVisible, setIsSizeChartVisible] = useState(false);

    const handleSizeChange = (e) => {
      setSelectedSize(e.target.value);
    };

    const handleAddToCart = () => {
      if (selectedSize) {
        addToCart(product, selectedSize);
      } else {
        alert("Please select a size");
      }
    };

    const toggleSizeChart = () => {
      setIsSizeChartVisible(!isSizeChartVisible);
    };

    if (!product) {
      return <h1>Product not found</h1>;
    }

    return (
      <div className="product-details-page">
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details-info">
            <h1>{product.name}</h1>
            <p className="price">${product.price}</p>

            <div className="size-selection">
              <h3>Choose Your Size:</h3>
              <div className="size-options">
                <button
                  className={`size-button ${selectedSize === "Small" ? "selected" : ""}`}
                  onClick={() => setSelectedSize("Small")}
                >
                  Small
                </button>
                <button
                  className={`size-button ${selectedSize === "Medium" ? "selected" : ""}`}
                  onClick={() => setSelectedSize("Medium")}
                >
                  Medium
                </button>
                <button
                  className={`size-button ${selectedSize === "Large" ? "selected" : ""}`}
                  onClick={() => setSelectedSize("Large")}
                >
                  Large
                </button>
              </div>
            </div>

            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <div className="size-chart-link">
              <button onClick={toggleSizeChart}>
                {isSizeChartVisible ? "Hide Size Chart" : "View Size Chart"}
              </button>
            </div>

            {isSizeChartVisible && (
              <div className="size-chart">
                <h2>Size Chart</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Length (inches)</th>
                      <th>Width (inches)</th>
                      <th>Chest (inches)</th>
                      <th>Shoulders (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Small</td>
                      <td>33</td>
                      <td>36</td>
                      <td>14</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Medium</td>
                      <td>35</td>
                      <td>38</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>Large</td>
                      <td>37</td>
                      <td>40</td>
                      <td>16</td>
                      <td>17</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Shopping Website</h1>
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between menu and close icons */}
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li>
              <Link to="/cart">
                <FaShoppingCart /> Cart ({cart.length})
              </Link>
            </li>
          </ul>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/women" element={renderProducts(womenProducts)} />
            <Route path="/men" element={renderProducts(menProducts)} />
            <Route path="/kids" element={renderProducts(kidsProducts)} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-about">
                <h2>About Us</h2>
                <ul>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-contact">
                <h2>Contact Us</h2>
                <p>Email: support@shop.com</p>
                <p>Phone: +1 123 456 7890</p>
                <p>Address: 123 Shopping Street, City, Country</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

// Cart Page with remove option
const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h1>Your Cart</h1>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cart.map((item) => (
        <div key={`${item.id}-${item.size}`} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div>
            <h3>{item.name} ({item.size})</h3>
            <p>Price: ${item.price}</p>
            <button className="remove-button" onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
          </div>
        </div>
      ))
    )}
  </div>
);

export default App;