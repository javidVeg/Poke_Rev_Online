const mongoose = require('mongoose')
const express= require('express')
const asyncHandler = require('express-async-handler')
const Crypto =require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')

const Products = require('../models/product')
const { User } = require('../models/user')




//TODO @des     Get Products
//TODO @route   GET /api/product
//TODO @access  Private
const getProducts = asyncHandler(async (req, res) => {
    const products = await Products.find()
    res.status(200).json(products)
})

//TODO @des     Post Products
//TODO @route   POST /api/product
//TODO @access  Private
const createProducts = asyncHandler(async (req, res) => {
    if (!req.body) {
      res.status(400)
      throw new Error('Please add a text field')
    }
    const products = new Products({
            
        // _id: randomString(),
        product: req.body.product,
        price: req.body.price,
        details: req.body.details,
        quantity: req.body.quantity,
        image: req.body.image,
    });
    
    await products.save();

  
    res.status(200).json(products)
  })

//TODO @des     Update Products
//TODO @route   PUT /api/product/:id
//TODO @access  Private
const updateProducts = asyncHandler(async (req, res) => {
    const products = await Products.findById(req.params.id)

    if(!products) {
        res.status(400)
        throw new Error('products not found')
    }

    const updatedProducts = await Products.findByIdAndUpdate(req.params.id, req.body,
         {new: true,})

    res.status(200).json(updatedProducts)
})

//TODO @des     Delete Products
//TODO @route   DELETE /api/product/:id
//TODO @access  Private
const deleteProducts = asyncHandler(async (req, res) => {
    const products = await Products.findById(req.params.id)

    if(!products) {
        res.status(400)
        throw new Error('products not found')
    }

    await products.remove()

    res.status(200).json({ id: req.params.id })
})

//TODO @des     Post comment on Products
//TODO @route   POST /api/product
//TODO @access  Private
const commentProducts = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { comments }   = req.body;
    

    console.log(comments)

    const products = await Products.findById(id);
    

    products.comments.push(comments);
    console.log(products)

    const updatedProducts = await Products.findByIdAndUpdate(id, products, { new: true });

    res.json(updatedProducts);
});

module.exports = { 
    getProducts, 
    createProducts, 
    updateProducts, 
    commentProducts, 
    deleteProducts
};