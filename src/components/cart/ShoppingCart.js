import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CreditCardForm from "./CreditCardForm";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const ShoppingCart = () => {
  return (
    <Container py={5} className="h-100">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="h-100"
        style={{
          marginTop: "100px",
          boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
          backgroundColor: "black",
        }}
      >
        <Grid item xs={12}>
          <Card>
            <CardContent p={4}>
              <Grid container>
                {/* Left column */}
                <Grid item lg={7}>
                  <Typography variant="h5" gutterBottom>
                    Continue shopping
                  </Typography>
                  <hr width="98%" />

                  {/* Shopping cart items */}
                  {/* Add a loop to render cart items dynamically */}
                  <Grid item xs={12}>
                    <Typography variant="body1">Shopping cart</Typography>
                    <Typography variant="body2">
                      You have 4 items in your cart
                    </Typography>
                  </Grid>
                  <Card
                    mb={3}
                    style={{
                      backgroundColor: "#c7c2c2;",
                      color: "black",
                      boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
                      width: "630px",
                      marginTop: "10px",
                    }}
                  >
                    <CardContent>
                      {/* Individual item */}
                      <Grid container justifyContent="space-between">
                        <Grid container item xs={8} alignItems="center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: "65px", borderRadius: "5px" }}
                          />
                          <div className="ms-3" style={{ marginLeft: "15px" }}>
                            <Typography variant="h5">Iphone 11 pro</Typography>
                            <Typography variant="body2" className="mb-0">
                              256GB, Navy Blue
                            </Typography>
                          </div>
                          <Typography
                            variant="h5"
                            className="fw-normal mb-0"
                            style={{ marginLeft: "70px" }}
                          >
                            2
                          </Typography>
                        </Grid>
                        <Grid container item xs={4} alignItems="center">
                          <Typography
                            variant="h5"
                            className="mb-0"
                            style={{ width: "80px" }}
                          >
                            $900
                          </Typography>
                          <DeleteOutlinedIcon style={{ marginLeft: "60px" }} />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  {/* Repeat the above Card component for each item in the cart */}
                </Grid>

                {/* Right column */}
                <Grid item lg={5}>
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

                        {/* Repeat the above TextField for other card details */}

                        {/* Subtotal, Shipping, and Total */}
                        <Grid container justifyContent="space-between">
                          <Typography
                            variant="body2"
                            style={{ marginBottom: "10px" }}
                          >
                            Subtotal
                          </Typography>
                          <Typography variant="body2">$4798.00</Typography>
                        </Grid>
                        <Grid container justifyContent="space-between">
                          <Typography
                            variant="body2"
                            style={{ marginBottom: "10px" }}
                          >
                            Shipping
                          </Typography>
                          <Typography variant="body2">$XX.XX</Typography>
                        </Grid>
                        <Grid container justifyContent="space-between">
                          <Typography
                            variant="body2"
                            style={{ marginBottom: "10px" }}
                          >
                            Total
                          </Typography>
                          <Typography variant="body2">$XX.XX</Typography>
                        </Grid>
                        {/* Repeat the above for Shipping and Total */}

                        {/* Checkout button */}
                        <Button
                          variant="contained"
                          color="info"
                          size="large"
                          fullWidth
                        >
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
