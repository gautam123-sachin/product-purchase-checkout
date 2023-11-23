import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";
import CreditCardForm from "./CreditCardForm";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  incrementQuantity,
  decrementQuantity,
} from "../../context/slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
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
              <Grid item xs={12}>
                <Typography variant="body1">Shopping cart</Typography>
                <Typography variant="body2">
                  You have {cartItems.length} items in your cart
                </Typography>

                {/* Individual item */}
                {cartItems.map((item) => (
                  <Card
                    style={{ backgroundColor: "#d3cdc3", marginTop: "10px" }}
                    key={item.id}
                  >
                    <CardContent>
                      <Grid container justifyContent="space-between">
                        <Grid container item xs={8} alignItems="center">
                          <img
                            src={item.image}
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: "65px", borderRadius: "5px" }}
                          />
                          <div className="ms-3" style={{ marginLeft: "15px" }}>
                            <Typography
                              variant="h5"
                              style={{ fontSize: "20px" }}
                            >
                              {item.name}
                            </Typography>
                          </div>
                          <Typography
                            variant="h5"
                            className="fw-normal mb-0"
                            style={{ marginLeft: "70px", fontSize: "20px" }}
                          >
                            <IconButton
                              onClick={() => handleDecrement(item.id)}
                            >
                              <MinusIcon />
                            </IconButton>
                            {item.quantity > 0 ? item.quantity : 0}
                            <IconButton
                              onClick={() => handleIncrement(item.id)}
                              style={{ fontSize: "20px" }}
                            >
                              <AddIcon />
                            </IconButton>
                          </Typography>
                        </Grid>
                        <Grid container item xs={4} alignItems="center">
                          <Typography
                            variant="h5"
                            className="mb-0"
                            style={{ width: "80px", fontSize: "20px" }}
                          >
                            ${item.price}
                          </Typography>
                          <DeleteOutlinedIcon
                            style={{ marginLeft: "60px", fontSize: "20px" }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}

                {/* Repeat the above Card component for each item in the cart */}
              </Grid>
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
                <CreditCardForm />

                {/* Subtotal, Shipping, and Total */}
                <Grid container justifyContent="space-between">
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    Subtotal
                  </Typography>
                  <Typography variant="body2">--</Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    Shipping
                  </Typography>
                  <Typography variant="body2">--</Typography>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Typography variant="body2" style={{ marginBottom: "10px" }}>
                    Total
                  </Typography>
                  <Typography variant="body2">--</Typography>
                </Grid>
                {/* Repeat the above for Shipping and Total */}

                {/* Checkout button */}
                <Button variant="contained" color="info" size="large" fullWidth>
                  <Grid container justifyContent="space-between">
                    <span>$4818.00</span>
                    <span>
                      Checkout{" "}
                      <i className="fas fa-long-arrow-alt-right ms-2" />
                    </span>
                  </Grid>
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
