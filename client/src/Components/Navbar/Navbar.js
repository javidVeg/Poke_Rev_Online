import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
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
import { IoMdMenu } from "react-icons/io"
import './Navbar.css'




export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //? useSelector brings in the user state and allows for the Protected routes to be accessed.//
  const { user } = useSelector((state) => state.auth)
  const { quantity } = useSelector(state => state.cart)
  const [isOpen, setOpen] = useState(false)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    // navigate('/somelandingpage')
  }

  console.log(quantity)
  return (

    <div className='Nav-bar'>
      <div className="left-side">
        <img width="10%" src={pika} alt="pika" />
      </div>
      <div className="right-side">
        {user ? (
          <>
            <div className="links" id={isOpen ? "hidden-menu" : ""}>
              <a onClick={() => setOpen(!isOpen)} href="/home">
                Home
              </a>
              {/* <a onClick={() => setOpen(!isOpen)} href="/updatestore">
                Update Store
              </a> */}
              <a onClick={() => setOpen(!isOpen)} href="/store">
                Store
              </a>
              <a onClick={() => setOpen(!isOpen)} href="/contact">
                Contact
              </a>
              <a onClick={() => setOpen(!isOpen)} href="/about">
                About
              </a>

            </div>
            
            <a onClick={onLogout} href="/somelandingpage">
              Log Out
            </a>
            <a href="/cart">
              <Badge badgeContent={quantity} color="warning">
                <ShoppingCartIcon sx={{ color: 'black' }} />
              </Badge>
            </a>

            <div id="hamburger" className="">
              <IoMdMenu color="black" size={40} onClick={() => setOpen(!isOpen)} />
            </div>
          </>
        )
          : (<>
            <a href="/login">
              Log in
            </a>
            <a onClick={onLogout} href="/register">
              Register
            </a>
            

          </>)}
          
        {/* <div className='pt-5 z-20'>
                <button id="menu" onClick={() => setOpen(!isOpen)}><RiMenu2Fill color='white' size={40} /></button>
              </div> */}
      </div>
    </div>


  );
}