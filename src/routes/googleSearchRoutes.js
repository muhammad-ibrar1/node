const express = require('express');
const router = express.Router();
const GoogleSearchController = require('../controller/GoogleSearchController');

// Route to handle Google search query
router.get('/search', GoogleSearchController.search);

module.exports = router;
