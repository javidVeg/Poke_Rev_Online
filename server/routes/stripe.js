require('dotenv').config();
const router = require("express").Router();
const KEY = process.env.TEST_STRIPE_KEY
const stripe = require("stripe")(KEY);


router.post("/", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name:"Pokemon Astrial Radiance Booster Box"
                    },
                    unit_amount: req.body,
                },
                quantity: 1
            },
        ],
        shipping_address_collection: {
            allowed_countries: ['US']
        },
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });

    res.redirect(303, session.url);
})




module.exports = router;