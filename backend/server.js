const express = require('express');
const app = express();
const connectDB = require("./connection/db");
const dotenv = require("dotenv");
const cors = require('cors');
const stripe = require("stripe");


const port = 7000;
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());



//Payment

const stripeInstance = new stripe("sk_test_51OgnxfSEdKKNMZJfhM1nA4FP5aNBcI4tB4O9Z8Z65VB005pWLNzq1ufkqHLKbb69lnJVV95gz7PHpnfHhIWwO7sZ00E8TaNkuS")


app.post("/process-payment", async (req, res) => {
  try {
    const { paymentMethodId, amount, itemId } = req.body;
   
    const returnUrl = 'http://localhost:3000/success'; 

    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount,
      currency: 'INR',
      payment_method: paymentMethodId,
      confirm: true,
      confirmation_method: 'manual',
      return_url: returnUrl,
      payment_method_types: ['card'],
    });

    console.log('Payment processed successfully');
    res.json({ success: true, paymentMethod: paymentIntent.payment_method });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, error: 'Payment processing error' });
  }
});



  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   mode: "payment",
  //   line_items,
  //   success_url: "https://localhost:3000/success",
  //   cancel_url: "https://localhost:3000/cancel",
  // });

  // res.json({ id: session.id });








// Ensure that the server listens for both GET and POST requests
app.use('/api', require("./Routes/SignUpRoutes"));
app.use('/api', require("./Routes/LoginRoute"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
