import React from 'react';
import { CardContent, Container, Typography } from "@mui/material";
import SignIn from '../Components/Sign In/SignIn.js';
import SignUp from '../Components/Register/Register'
import { Card, CardMedia } from '@mui/material'
import { Grid, Box } from '@mui/material';
import './Home.css';
import OutlinedCard from '../Components/Card/HomeCard.js';



const Home = () => {

    return (
 
                <Grid
                 container
                 display="flex"
                 flexWrap= "wrap"
                 direction= "row"
                 justifyContent= "center"
                 justify= "flex-start"
                 alignItems= "center"
                 spacing= {2}>
                     <img src="/Poke-Rev-home.png" width= "1000px" className= "center"/>
                     {/* <Grid item xs={12} sm={6} md={4} >
                        <Card variant="outlined"  sx={{ width: 345, height: 200}} >
                            <CardMedia
                                height= "200"
                                component="img"
                                image="./maxresdefault-2.jpg"
                                alt="green iguana"
                            />  
                         </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4} >
                        <Card variant="outlined" sx={{ width: 345, height: 200}}>
                            <CardMedia
                                height= "200"
                                component="img"
                                image="./maxresdefault-2.jpg"
                                alt="green iguana"
                            />  
                         </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4} >
                        <Card variant="outlined" sx={{ width: 345, height: 200}}>
                            <CardMedia
                                height= "200"
                                component="img"
                                image="./maxresdefault-2.jpg"
                                alt="green iguana"
                            />  
                         </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4} >
                        <Card variant="outlined"  sx={{ width: 345, height: 200}} >
                            <CardMedia
                                height= "200"
                                component="img"
                                image="./maxresdefault-2.jpg"
                                alt="green iguana"
                            />  
                         </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4} >
                        <Card variant="outlined" sx={{ width: 345, height: 200}}>
                            <CardMedia
                                height= "200"
                                component="img"
                                image="./maxresdefault-2.jpg"
                                alt="green iguana"
                            />  
                         </Card>
                     </Grid>
                     <Grid item xs={12} sm={6} md={4} >
                        <Card variant="outlined" sx={{ width: 345, height: 200}}>
                            <CardMedia
                                height= "200"
                                component="img"
                                image="./maxresdefault-2.jpg"
                                alt="green iguana"
                            />  
                         </Card>
                     </Grid> */}
         
                </Grid>
                     
             )
}

export default Home