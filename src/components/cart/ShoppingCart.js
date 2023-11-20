import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Map through cart items and display them */}
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          {/* Add more cart item details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
