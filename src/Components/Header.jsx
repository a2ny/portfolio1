import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import logo from "./Assets/logo.png";
import DrawerList from "./Drawer";

const Header = ({ cart, setCart }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          {/* <IconButton
            className="menuButton"
            id="menuButton"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={logo} alt="" />
          <Button color="inherit">Home</Button>
          <Button color="inherit" href="./shoppage">
            Shop
          </Button>
          <Button color="inherit">About Us</Button>
          <Typography
            className="typo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            The Bird Store
          </Typography>
          <Button className="btnCart" color="inherit">
            <DrawerList cart={cart} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
