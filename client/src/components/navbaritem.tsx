import  { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBarItem() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              Home
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to={"/favourites"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Favourites</ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/cart"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Cart</ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/vendors"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Vendors</ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/Login"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Login</ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <div className="navbar">
      <div className="navbarbrand">
        <h2>Afrospice</h2>
      </div>
      <div className="navmenuitems">
        <Link to="/">
          <li className="navmenuitem">Home</li>
        </Link>
        <Link to="/wishlist">
          <li className="navmenuitem">Wishlist</li>
        </Link>
        <Link to="/favourites">
          <li className="navmenuitem">Favorites</li>
        </Link>
        <Link to="/products">
          <li className="navmenuitem">Store</li>
        </Link>
        <Link to="/vendors">
          <li className="navmenuitem">Vendors</li>
        </Link>
      </div>
      <div className="navactionkeys">
        <Link to="/login">
          <Button variant="contained" className="navmenuitem">
            Login
          </Button>
        </Link>
      </div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
