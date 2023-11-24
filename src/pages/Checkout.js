// Checkout.js
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUserCardInfo } from "../context/slices/cartSlice";

const Checkout = () => {
  const userCardInfo = useSelector(selectUserCardInfo);
  const { number, expiry, cvc } = userCardInfo;
  return (
    <Container py={5}>
      <Grid container justifyContent="center" style={{ marginTop: "70px" }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Checkout
              </Typography>
              <hr width="98%" />

              {/* Billing Address */}
              <Typography variant="h6" gutterBottom>
                Billing Address
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address"
                      name="address"
                      label="Address"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="ZIP / Postal code"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </form>

              {/* Payment Details */}
              <Typography variant="h6" gutterBottom>
                Payment Details
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="cardNumber"
                      name="cardNumber"
                      label="Card Number"
                      fullWidth
                      value={number}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="expDate"
                      name="expDate"
                      label="Expiry Date"
                      fullWidth
                      value={expiry}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="cvv"
                      name="cvv"
                      label="CVV"
                      fullWidth
                      value={cvc}
                    />
                  </Grid>
                </Grid>
              </form>

              {/* Complete Order Button */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Complete Order
              </Button>
            </CardContent>
          </Card>

          {/* Back to Cart Link */}
          <Button
            component={Link}
            to="/cart"
            variant="outlined"
            color="primary"
            size="large"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            <ArrowBackIcon />
            Back to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
