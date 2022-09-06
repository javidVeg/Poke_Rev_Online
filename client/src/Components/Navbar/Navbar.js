import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Badge } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../Features/auth/authSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from "../../Pages/Cart";
import { Gradient } from "@material-ui/icons";
import pika from "../../Images/pika.png"
import './Navbar.css'




export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //? useSelector brings in the user state and allows for the Protected routes to be accessed.//
  const { user } = useSelector((state) => state.auth)
  const { quantity } = useSelector(state => state.cart)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/somelandingpage')
  }

  console.log(quantity)
  return (
    <div  >
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <div className="pika">
            <img width="10%" src={pika} alt="pika"/>
          </div>
          {user ? (
            <>
              <Link to="/home">
                <Button sx={{ color: "black" }}>Home</Button>
              </Link>
              <Link to="/poke-rev-packs">
                <Button sx={{ color: "black" }}>PokeRev Packs</Button>
              </Link>
              <Link to="/updatestore">
                <Button sx={{ color: "black" }}>Update Store</Button>
              </Link>
              <Link to="/store">
                <Button sx={{ color: "black" }}>Store</Button>
              </Link>
              <Link to="/give-away">
                <Button sx={{ color: "black" }}>Give Aways</Button>
              </Link>
              {/* <Link to="/about">
                    <Button sx= {{color: "white"}}>About</Button>
                  </Link>
                  <Link to="/faq">
                    <Button sx= {{color: "white"}}>FAQ</Button>
                  </Link>
                  <Link to="/contact">
                    <Button sx= {{color: "white"}}>Contact</Button>
                  </Link> */}
              <Button sx={{ color: "black" }} onClick={onLogout}>Log Out</Button>
              <Link to="/cart">
                <Badge badgeContent={quantity} color="warning">
                  <ShoppingCartIcon sx={{ color: 'black' }} />
                </Badge>
              </Link>
            </>
          )
            : (<>
              <Link to='/login'>
                <Button sx={{ color: "white" }}>Log In</Button>
              </Link>
              <Link to='/register'>
                <Button sx={{ color: "white" }}>Register</Button>
              </Link>
            </>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}