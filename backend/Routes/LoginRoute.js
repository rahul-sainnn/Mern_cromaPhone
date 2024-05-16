const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post(
  '/loginuser',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .isLength({ min: 5 })
      .withMessage('Password should be at least 5 chars'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ errors: 'Invalid email or password' });
      }

      // Successful login
      return res.json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ errors: 'Internal server error' });
    }
  }
);

module.exports = router;
