const express = require('express');
const router = express.Router();

// @route POST api/users/register
// @desc Register a user
// @access Public
router.post('/register', (req, res) => {
  res.json({
    data: 'User created successfully',
  });
});

module.exports = router;
