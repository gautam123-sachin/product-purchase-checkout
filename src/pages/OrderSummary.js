import React from "react";
import { Typography, Button } from "@mui/material";

const OrderSummary = () => {
  const orderDetails = {
    items: [
      { name: "Product 1", price: 20 },
      { name: "Product 2", price: 30 },
      // Add more items as needed
    ],
    total: 50,
    shippingAddress: "123 Main St, Cityville",
  };
  return (
    <div>
      {/* Order Summary */}
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      {/* Display order summary information here */}
      <Typography variant="body1">
        <strong>Items:</strong>
        {/* Display a list of items in the order */}
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </Typography>

      <Typography variant="body1">
        <strong>Shipping Address:</strong> {orderDetails.shippingAddress}
      </Typography>

      <Typography variant="body1">
        <strong>Total:</strong> ${orderDetails.total}
      </Typography>

      {/* Complete Order Button */}
      <Button variant="contained" color="primary" size="large" fullWidth>
        Complete Order
      </Button>
    </div>
  );
};

export default OrderSummary;
