const express = require('express');
const router = express.Router();

// @route GET api/contacts/all
// @desc Get all users contact
// @access Private
router.get('/all', (req, res) => {
  res.json({
    data: 'Get all user contact',
  });
});

// @route POST api/contacts/add
// @desc Add new contact
// @access Private
router.post('/add', (req, res) => {
  res.json({
    data: 'Add Contact',
  });
});

// @route PUT api/contacts/update/:id
// @desc Update contact
// @access Private
router.put('/update/:id', (req, res) => {
  res.json({
    data: 'Update Contact',
  });
});

// @route DELETE api/contacts/delete/:id
// @desc delete contact
// @access Private
router.delete('/delete/:id', (req, res) => {
  res.json({
    data: 'delete Contact',
  });
});
module.exports = router;
