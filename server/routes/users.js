const { User } = require('../models/user');
const { validate } = require('../models/product');
const Product = require('../models/product')
const express = require('express');
const router = express.Router();

router.post('/:userId/overdue/:productId', async (req, res) => { 
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        const product = await Product.findById(req.params.productId);
        if (!product) return res.status(400).send(`The product with id "${req.params.productId}" does not exist.`);
    
        user.overdue.push(product);    
        
        await user.save();
        return res.send(user.overdue);

    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
});

router.put('/:userId/overdue/:productId', async (req, res) => { 
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error);

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        const product = user.overdue.id(req.params.productId);
        if (!product) return res.status(400).send(`The product with id "${req.params.productId}" does not in the users shopping cart.`);
        
        product.firstName = req.body.firstName;
        product.lastName = req.body.lastName;
        product.phoneNumber = req.body.phoneNumber;
       

        await user.save();
        return res.send(product);
        } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`); }
});

router.delete('/:userId/overdue/:productId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        let product = user.overdue.id(req.params.productId);
        if (!product) return res.status(400).send(`The product with id "${req.params.productId}" does not in the users shopping cart.`);
        
        product = await product.remove();
        
        await user.save();
        return res.send(product);
         } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    } 
});

module.exports = router;