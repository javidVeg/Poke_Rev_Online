import React from 'react'
import { Grid, Box } from '@mui/material';
import { Card, CardMedia } from '@mui/material'

export default function StoreFront() {
  return (
    <div>
        <Grid
                 container
                 display="flex"
                 flexWrap= "wrap"
                 direction= "row"
                 justifyContent= "center"
                 justify= "flex-start"
                 alignItems= "center"
                 spacing= {2}
                 sx = {{mt:10}}>
                     
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
                     </Grid>
         
                </Grid>
    </div>
  )
}
