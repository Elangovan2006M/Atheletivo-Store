import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import View from './Components/View';
import Wishlist from './Components/WishList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [navigateToView, setNavigateToView] = useState(false); // New state to manage navigation

  const handleSignIn = () => setIsAuthenticated(true);
  const handleSignOut = () => setIsAuthenticated(false);
  const addToWishlist = (product) => setWishlistItems([...wishlistItems, product]);

  // Updated handleProductClick to set selected product and initiate navigation
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setNavigateToView(true); // Trigger navigation
  };

  useEffect(() => {
    if (navigateToView) {
      setNavigateToView(false); // Reset navigation state
    }
  }, [navigateToView]);

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <>
            <Navbar onSignOut={handleSignOut} />
            <Routes>
              <Route path="/" element={<Home onSignOut={handleSignOut} />} />
              <Route 
                path="/products" 
                element={<ProductList onProductClick={handleProductClick} />} />
              <Route 
                path="/view" 
                element={selectedProduct ? (
                  <View selectedProduct={selectedProduct} addToWishlist={addToWishlist} />
                ) : (
                  <Navigate to="/products" replace />
                )}
              />
              <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {navigateToView && <Navigate to="/view" replace />} {/* Navigate if the state is true */}
            <Footer />
          </>
        ) : (
          <SignIn onSignIn={handleSignIn} />
        )}
      </div>
    </Router>
  );
}

export default App;
