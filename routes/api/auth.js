const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); // import middleware

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Returns user's data so we know who's logged in
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
