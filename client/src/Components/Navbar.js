import { Link, useNavigate} from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Badge} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../Features/auth/authSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
//? useSelector brings in the user state and allows for the Protected routes to be accessed.//
  const { user } =useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/somelandingpage')
  }

  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PokeCave
          </Typography>
              {user ? (
                <>
                  <Link to="/home">
                    <Button sx= {{color: "white"}}>Home</Button>
                  </Link>
                  <Link to="/poke-rev-packs">
                    <Button sx= {{color: "white"}}>PokeRev Packs</Button>
                  </Link>
                  <Link to="/updatestore">
                    <Button sx= {{color: "white"}}>Update Store</Button>
                  </Link>
                  <Link to="/store">
                    <Button sx= {{color: "white"}}>Store</Button>
                  </Link>
                  <Link to="/give-away">
                    <Button sx= {{color: "white"}}>Give Aways</Button>
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
                  <Button sx= {{color: "white"}} onClick={onLogout}>Log Out</Button>
                  <Badge badgeContent={quantity}>
                    <ShoppingCartIcon/>
                  </Badge>
                  </>
                  ) 
                  : (<>
                      <Link to='/login'>
                        <Button sx= {{color: "white"}}>Log In</Button>
                      </Link>
                      <Link to='/register'>   
                        <Button sx= {{color: "white"}}>Register</Button>
                      </Link>
                    </>)}
          
              
              
              

             
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}