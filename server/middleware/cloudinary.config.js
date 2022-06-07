const dotenv = require('dotenv')
const cloudinaryModule = require('cloudinary').v2

dotenv.config()
const cloudinary = cloudinaryModule

cloudinary.config({
    cloud_name: 'davidveg',
    api_key: '932694677197379',
    api_secret: 'OokRVCtX3ujUbEhnTAum_2HnvGI'
    // api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;