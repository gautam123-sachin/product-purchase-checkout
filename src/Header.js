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

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Define the AppBar title based on the mobile view
  const appBarTitle = "product-purchase-checkout";

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
            {appBarTitle}
          </Typography>

          <Hidden smDown>
            <MuiLink
              component={Link}
              to="/product-list"
              color="inherit"
              style={{ marginRight: 20, textDecoration: "none" }}
            >
              Product List
            </MuiLink>
            <MuiLink
              component={Link}
              to="/checkout"
              color="inherit"
              style={{ marginRight: 20, textDecoration: "none" }}
            >
              Checkout Page
            </MuiLink>
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
