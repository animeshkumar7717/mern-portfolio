const express = require('express');
const { sendEmail } = require('../controller/portfolio.controller');

const router = express.Router();
router.post('/sendEmail', sendEmail);

module.exports = router;