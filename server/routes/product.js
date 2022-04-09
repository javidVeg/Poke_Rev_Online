const Product  = require('../models/product');
const User = require('../models/user');
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();
const Crypto = require('crypto')
const admin = require('../middleware/Midd-admin')
// const { Product, validate } = require('../models/product')


router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        return res.send(product);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product)
            return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);
        
        return res.send(product);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});



router.post('/', async (req, res) => {
    try {
        // const { error } = validate(req, res);
        // if (error)
        //     return res.status(400).send(error.detals[0].message);
        function randomString(size = 21) {  
            return Crypto
              .randomBytes(size)
              .toString('hex')
              .slice(0, size)
          }
          
          console.log(  
            randomString()
          )

        const product = new Product({
            
            // _id: randomString(),
            product: req.body.product,
            price: req.body.price,
            details: req.body.details,
            quantity: req.body.quantity,
            image: req.body.image,
        });

        await product.save();

        return res.send(product);

    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


// router.post('/users', auth, async (req, res) => {
//     try {

//         let user = await User.findOne({ email: req.body.email });
//         if (user) return res.status(400).send('User already registered.');

//         function randomString(size = 21) {  
//             return Crypto
//               .randomBytes(size)
//               .toString('hex')
//               .slice(0, size)
//           }
          
//           console.log(  
//             randomString()
//           )
        
//         const salt = await bcrypt.genSalt(10);
//         const users = new User({
            
//             _id: randomString(),
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: await bcrypt.hash(req.body.password, salt),
//             isAdmin: req.body.isAdmin,
//             profilePicture: req.body.profilePicture
            
//         });

//         await users.save();

//         // return res.send(users);
//         return res.send({ _id: users._id, email: users.email });

//     }   catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });

router.put('/:id', async (req, res) => {
    try {
        // const { error } = validate(req.body);
        // if (error) return res.status(400).send(error);

        const product = await Product.findByIdAndUpdate(
            req.params.id, 
            {
                
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,

            },
            { new: true }
        );
        if (!product)
            return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);

        await product.save();

        return res.send(product);
    }  catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndRemove(req.params.id);

        if (!product)
            return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);
        
            return res.send(product);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})


module.exports = router;