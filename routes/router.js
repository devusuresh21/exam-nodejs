const express = require('express');
const userController = require('../controllers/userController'); // Ensure this path is correct

const router = express.Router(); // Use express.Router() directly

// Define routes
router.post('/register', userController.registerController);

module.exports = router;
