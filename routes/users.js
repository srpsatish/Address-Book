const express = require('express');
const router = express.Router();
const { check, body, validationResult } = require('express-validator');

const User = require('../models/User');

// @route POST api/users/register
// @desc Register a user
// @access Public
router.post(
  '/register',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({
      data: req.body,
    });
  }
);

module.exports = router;
