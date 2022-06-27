require("dotenv").config();
const router = require("express").Router();
const KEY = process.env.TEST_STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/", async (req, res) => {
  const data = req.body;
  // console.log(data.products[0].products.quantity)
  const line_items = data.products.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product,
          images: [item.image.url],
          description: item.details.split(" ").splice(0, 20).join(" ") + "...",
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity,
    };
  });
  console.log(line_items);
  const session = await stripe.checkout.sessions.create({
    line_items,
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cart",
  });

  res.send({ url: session.url });

  // res.redirect(303, session.url);
});

module.exports = router;
