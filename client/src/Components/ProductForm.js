/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, spacing } from '@mui/system'
import FileBase from 'react-file-base64';
import { Button, ButtonBase, Card, CardContent, CardMedia, Grid, Paper, Typography, TextField } from '@mui/material'
import {createProducts} from "../Features/product/productSlice"


export default function ProductForm() {
    const [fileData, setFileData] = useState();
    const [images, setFile] = useState();

    const [productData, setProductData] = useState({ product: '', price: '', details: '', quantity: '', image: ''})
    console.log(productData.image)

    const dispatch = useDispatch()

    const clear = () => {
        setProductData({ product: '', price: '', details: '', quantity: '', image: '' });
      };

//? @ HANDLES IMAGE FROM FORM DATA AT ARRAY [0]
      const handleImageUp = (e) => {
          const file = e.target.files[0]
          transformFile(file)
        }
        
//? @ TURNS IMAGE INTO BASE64  
        const transformFile = (file) =>{
            const reader = new FileReader()

            if(file){
                reader.readAsDataURL(file)
                reader.onloadend = () => {
                    setProductData({ ...productData, image: reader.result }) 
                    setFile(reader.result)  
                }
            }else{
                setProductData('')
            }    
        }
//? @ HANDLES SUBMITION OF ENTIRE FORM DATA
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(productData);
            dispatch(createProducts(productData))
            clear()
            window.location.reload(false)
           
        }
        
        return (
            <div>
                <Grid container  justifyContent="center" direction="row" alignItems="center" spacing={15} sx={{mb: 10}}>
{/* THIS IS THE FORM TO ENTER A NEW PRODUCT */}
                    <Grid item >
                    <Paper 
                        elevation = {2}
                        sx={{display: 'inline-block'}}>
                            <Box
                                
                                sx={{m:2, width: '25ch'}}
                                autoComplete="off"
                                noValidate
                                >
                                    <form autoComplete="off" onSubmit={handleSubmit}>
                                        <TextField
                                            sx={{m:1, p:1, mx: 'auto'}}
                                            name="product" 
                                            variant="outlined" 
                                            label="Product" 
                                            fullWidth 
                                            value={productData.product} 
                                            onChange={(e) => setProductData({ ...productData, product: e.target.value })} 
                                        />
                                        <TextField 
                                            sx={{m:1, p:1, mx: 'auto'}}
                                            name="price" 
                                            variant="outlined" 
                                            label="Price" 
                                            fullWidth 
                                            value={productData.price} 
                                            onChange={(e) => setProductData({ ...productData, price: e.target.value })} 
                                        />
                                        <TextField
                                            sx={{m:1, p:1, mx: 'auto'}} 
                                            name="details" 
                                            variant="outlined" 
                                            label="Details" 
                                            fullWidth 
                                            value={productData.details} 
                                            onChange={(e) => setProductData({ ...productData, details: e.target.value })} 
                                        />
                                        <TextField
                                            sx={{m:1, p:1, mx: 'auto'}} 
                                            name="quantity" 
                                            variant="outlined" 
                                            label="Quantity" 
                                            fullWidth 
                                            value={productData.quantity} 
                                            onChange={(e) => setProductData({ ...productData, quantity: e.target.value })} 
                                        />
                                        <div>
                                        <Button
                                            variant='outlined'
                                            component="label"
                                            >
                                            Upload File
                                            <input
                                                type="file"
                                                accept= 'image/'
                                                hidden
                                                onChange= {handleImageUp} 
                                                />
                                        </Button>
                                        </div>
                                        <div>
                                        <Button 
                                            variant="contained"
                                            sx={{m:1, p:1, mx: 'auto'}} 
                                            size="large" 
                                            type="submit" 
                                            fullWidth>
                                                Submit
                                        </Button> 
                                        </div>
                                    </form>
                            
                            </Box> 
                    </Paper>
                    </Grid>
{/* THIS IS THE OUTPUT OF THE FORM ENTRY */}
                    <Grid item>
                        <Card display='flex' flexDirection= 'column' elevation= {8} sx={{
                            display:'flex',
                            flexDirection: 'column', 
                            justifyContent: 'space-between', 
                            height:'500px', 
                            width: '300px',
                            position:'relative',
                            
                            
                            }}>
                                <Grid 
                                    container
                                    justifyContent='center' 
                                    >
                                    
                                <img 
                                    component='image' 
                                    height='250' 
                                    src={images}/>
                                </Grid>
                                <Typography varient='h6' sx={{p:2}}>{productData.product}</Typography>

                                <div display='flex' justifyContent='space-between' margin= '20px'>
                                    <CardContent>
                                        <Typography variant='body2' color='gray' component='p'>
                                        {productData.details.split(' ').splice(0, 20).join(' ')}... 
                                        </Typography>
                                    </CardContent>
                                </div>
                            

                                <CardContent >
                                    <Typography variant='caption' color='red' sx={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    position: 'absolute',
                                    bottom: 40}}>
                                        Only {productData.quantity} available!
                                    </Typography>
                                </CardContent>


                                <CardContent >
                                    <Typography variant='subtitle1' sx={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    position: 'absolute',
                                    bottom: 10
                                    
                                }}>
                                        Starting at ${productData.price}
                                
                                
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </div>
)}




