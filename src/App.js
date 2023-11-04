import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import ProductListing from './ProductList';
import CheckoutPage from './Checkoutpage';
import ReviewPage from './ReviewPage';
import { CartProvider, CustomerInfoProvider } from './CartContext';

function App() {
  return (
    <div>
      <CartProvider>
        <CustomerInfoProvider>
        <Header /> {/* Use the Header component here */}
        <Routes>
          <Route path="/*" element={<ProductListing />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
        </CustomerInfoProvider>
      
      </CartProvider>

    </div>
  );
}

export default App;
