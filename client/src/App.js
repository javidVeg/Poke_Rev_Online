import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button, Container, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./Components/Navbar/Navbar";
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import ProtectedRoutes from "../src/Components/ProtectedRoutes"
import Register from './Pages/Register';
import Login from './Pages/Login';
import StoreFront from './Pages/StoreFront';
import UpdateStore from './Pages/UpdateStore';
import Cart from './Pages/Cart';




function App() {


  return (
    <div>
      <Container>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to= "/home" /> } />
          {/* <Route path="/SignIn" element={<SignIn/ >} /> */}
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* // DOES: this is a protected Route that redirects based on if the user is Authorized or not */}
          <Route element={<ProtectedRoutes />}>
          {/* <Route path="/poke-rev-packs" element={<MessageBoard/>} /> */}
          <Route path="/updatestore" element={<UpdateStore/>} />
          <Route path="/store" element={<StoreFront/>} />
          <Route path="/cart" element={<Cart/>}/>
          {/* <Route path="/give-away" element={<List/>} />
          <Route path="/about" element={<EntSubmit/>} />
          <Route path="/faq" element={<FormData/>} />
          <Route path="/contact" element={<SearchPatients/>} /> */}
          </Route>
        </Routes>
      </Container>
    </div>
    

    
      // <Info/>
      
    
  );
}

export default App;
