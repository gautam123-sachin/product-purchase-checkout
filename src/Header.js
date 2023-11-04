import React from "react";
import { AppBar, Toolbar, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          product-purchase-checkout
        </Typography>
        <nav>
          <MuiLink
            component={Link}
            to="/product-list"
            color="inherit"
            style={{ marginRight: 20,  textDecoration: "none" }}
          >
            Product List
          </MuiLink>
          <MuiLink
            component={Link}
            to="/checkout"
            color="inherit"
            style={{ marginRight: 20,  textDecoration: "none" }}
          >
            Checkout Page
          </MuiLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
