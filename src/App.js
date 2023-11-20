// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import ProductListing from './components/product/ProductList';
import CheckoutPage from './Checkoutpage';
import ReviewPage from './ReviewPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { CartProvider, CustomerInfoProvider } from './CartContext';

function App() {
  return (
    <div>
      <CartProvider>
        <CustomerInfoProvider>
          <Header />
          <Routes>
            <Route path="/*" element={<ProductListing />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </CustomerInfoProvider>
      </CartProvider>
    </div>
  );
}

export default App;
