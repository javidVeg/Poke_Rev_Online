const connectDB = require('./startup/db')
const express = require('express');
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const product = require('./routes/products');
const users = require('./routes/products')
const auth = require('./routes/Auth')
const stripeRoute = require('./routes/stripe')
const postRoutes = require('./routes/products')
const {errorHandler} = require('./middleware/errorMiddleware')






connectDB();



app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}))
app.use('/api/product', product)
app.use('/api/auth', auth)
app.use('/api/posts', postRoutes);
app.use('/create-checkout-session', stripeRoute)

app.use(errorHandler)


const port = process.env.PORT || 5003;
    app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
