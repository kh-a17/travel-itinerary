const express = require('express');
const router = express.Router();
const { postCreate } = require('../controllers/postCreator');

router.post('/create-post', postCreate);

module.exports = router;