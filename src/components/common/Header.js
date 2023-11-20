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
import { APP_NAME, NAV_LINKS } from '../../constants';


function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
            {NAV_LINKS.map((link) => (
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