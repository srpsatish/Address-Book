const express = require('express');
const router = express.Router();

// @route GET api/auth/loggedin
// @desc Get logged in user
// @access Private
router.get('/loggedin', (req, res) => {
  res.json({
    data: 'Get logged in user',
  });
});

// @route POST api/auth/login
// @desc Auth user and get token
// @access Public
router.post('/login', (req, res) => {
  res.json({
    data: 'log in user',
  });
});

module.exports = router;
