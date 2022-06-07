require('dotenv').config();
const router = require("express").Router();
const KEY = process.env.TEST_STRIPE_KEY
const stripe = require("stripe")(KEY);




router.post("/", async (req, res) => {
    const data = req.body
    // console.log(data.products[0].products.quantity)
    const line_items = data.products.map((item) => {
        return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.products.product,
                  images: [item.products.image.url],
                  description: item.products.details,
                  metadata: {
                    id: item.products.id,
                  },
                },
                unit_amount: item.products.price * 100,
              },
              quantity: item.products.quantity,
            };
          });
   console.log(line_items)
    const session = await stripe.checkout.sessions.create({
        line_items,
        shipping_address_collection: {
            allowed_countries: ['US']
        },
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });

    res.send({ url: session.url });
    
    // res.redirect(303, session.url);
})




module.exports = router;