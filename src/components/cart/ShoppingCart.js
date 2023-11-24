import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import CreditCardForm from "./CreditCardForm";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  incrementQuantity,
  decrementQuantity,
  deleteItems,
  selectUserCardInfo,
} from "../../context/slices/cartSlice";
import ShoppingCartItems from "./ShoppingCartItems";

const ShoppingCart = () => {
  const [subTotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [errors, setErrors] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const userCardInfo = useSelector(selectUserCardInfo);

  useEffect(() => {
    const calculateSubtotal = () => {
      const Subtotal = cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      );
      setSubtotal(Subtotal);
    };
    calculateSubtotal();
  }, [cartItems]);

  useEffect(() => {
    const calculateShippingAndTotal = () => {
      const shipping = 10;
      const calculateShipping = cartItems.length > 0 ? shipping : 0;
      const calculatedTotal = subTotal + calculateShipping;
      setShipping(calculateShipping);
      setTotal(calculatedTotal);
    };
    calculateShippingAndTotal();
  }, [subTotal, cartItems]);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteItems({ id }));
  };

  const handleCheckout = () => {
    console.log("userCardInfo", userCardInfo);
    const isValid = handleValidation();
    if (isValid) {
      navigate("/checkouts");
    }
  };

  const handleValidation = () => {
    let valid = true;
    const newErrors = { name: "", number: "", expiry: "", cvc: "" };
    const { name, number, expiry, cvc } = userCardInfo;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!/^\d{16}$/.test(number)) {
      newErrors.number = "Invalid card number";
      valid = false;
    }

    if (!/^\d{4}-\d{2}$/.test(expiry)) {
      newErrors.expiry = "Invalid expiry date (use MM-YYYY format)";
      valid = false;
    }

    if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "Invalid CVV";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <Container py={5} style={{ marginTop: "70px" }}>
      <Grid container justifyContent="center" spacing={3}>
        {/* Left column */}
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Continue shopping
              </Typography>
              <hr width="98%" />

              {/* Shopping cart items */}
              <ShoppingCartItems
                cartItems={cartItems}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleDelete={handleDelete}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={5}>
          <Card className="bg-primary text-white rounded-3">
            <CardContent>
              {/* Card details */}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                mb={4}
              >
                <Typography variant="h5" className="mb-0">
                  Card details
                </Typography>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  className="img-fluid rounded-3"
                  style={{ width: "45px" }}
                  alt="Avatar"
                />
              </Grid>

              {/* Form for card details */}
              <form>
                <CreditCardForm userCardInfo={userCardInfo} errors={errors} />

                {/* Subtotal, Shipping, and Total */}
                <Grid container justifyContent="space-between">
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    Subtotal
                  </Typography>
                  <Typography variant="body2">
                    ${subTotal ? subTotal.toFixed(2) : "--"}
                  </Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    Shipping
                  </Typography>
                  <Typography variant="body2">
                    ${shipping ? shipping.toFixed(2) : "--"}
                  </Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    Total
                  </Typography>
                  <Typography variant="body2">
                    {total ? total.toFixed(2) : "--"}
                  </Typography>
                </Grid>

                {/* Checkout button */}
                <Button
                  size="large"
                  fullWidth
                  style={{
                    marginTop: "10px",
                    height: "50px",
                    backgroundColor: "#0288d1",
                    color: "white",
                    borderRadius: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "none",
                    boxShadow:
                      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                  }}
                  onClick={handleCheckout}
                  disabled={!cartItems.length}
                >
                  Checkout
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
