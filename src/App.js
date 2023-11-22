// App.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { gapi } from "gapi-script";
import Header from "./components/common/Header";
import ProductListing from "./components/product/ProductList";
import CheckoutPage from "./Checkoutpage";
import ReviewPage from "./ReviewPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ShoppingCart from "./components/cart/ShoppingCart";
import { CartProvider, CustomerInfoProvider } from "./CartContext";

function App() {
  const clientId =
    "707346013852-oh7c9opj9883ejgh713e4tvubaa5mk9n.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({
        client: clientId,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  return (
    <div>
      <CartProvider>
        <CustomerInfoProvider>
          <Header />
          <Routes>
            <Route path="/*" element={<ProductListing />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </CustomerInfoProvider>
      </CartProvider>
    </div>
  );
}

export default App;
