import axios from 'axios'

const API_URL = 'http://localhost:5003/api/product'

//! Create new product

const createProduct = async (productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            

        }
    }
    
    const response = await axios.post( API_URL, productData, config)
    console.log(response)
   

    return response.data,  console.log(response.data)
}

//! Get product
const getProduct= async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const productService = {
    createProduct,
    getProduct
}

export default productService;