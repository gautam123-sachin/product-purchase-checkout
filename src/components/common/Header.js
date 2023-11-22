import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { APP_NAME } from "../../constants";

import { selectIsAuthenticated } from "../../context/slices/authSlices";

function Header() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getDynamicNavLinks = () => {
    if (isAuthenticated) {
      return [
        { to: "/", label: "Home" },
        { to: "/product-list", label: "Product List" },
        { to: "/checkout", label: "cart" },
        { to: "/cart", label: <ShoppingCartIcon /> },
        { to: "/profile", label: "Profile" }, // Change to the user profile link
      ];
    } else {
      return [
        { to: "/", label: "Home" },
        { to: "/product-list", label: "Product List" },
        { to: "/checkout", label: "cart" },
        { to: "/cart", label: <ShoppingCartIcon /> },
        { to: "/login", label: "Login" },
      ];
    }
  };

  const nav_links = getDynamicNavLinks();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <Hidden smDown>
            {nav_links.map((link) => (
              <MuiLink
                key={link.to}
                component={Link}
                to={link.to}
                color="inherit"
                style={{ marginRight: 20, textDecoration: "none" }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Side menu for mobile view */}
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem
            component={Link}
            to="/product-list"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Product List" />
          </ListItem>
          <ListItem
            component={Link}
            to="/checkout"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Checkout Page" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
