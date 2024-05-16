const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const stripeLibrary = require ("stripe");
// const bcrypt = require('bcrypt');

router.post("/signupuser", [
  body('email').isEmail().withMessage('Invalid email'),
  body('name'),
  body('password').isLength({ min: 5 }).withMessage('Password should be at least 8 chars'),
  body('confirmPassword').isLength({ min: 5 }).withMessage('Password match error'),
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log('Received signup request:', req.body); // Log the received data


  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      confirmPassword: await bcrypt.hash(req.body.confirmPassword, 10)
     
    }).then(res.json({success:true}))
    // res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});


// ...

//payment relatad work 
const stripeInstance = new stripeLibrary('sk_test_51O7CoWSBS1obBjOD2W0XeAThGXXHMf1gT27ht6rJ6lOtlf9dZl0tZUivXJNijqpFF5EJeqNXKoGq8RGSSe35P3Va005mQCZagN');

router.post("/process-payment", async (req, res) => {
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

    console.log('Payment processed successfully');``

    res.json({ success: true, paymentMethod: paymentIntent.payment_method });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, error: 'Payment processing error' });
  }
});




module.exports = router;
