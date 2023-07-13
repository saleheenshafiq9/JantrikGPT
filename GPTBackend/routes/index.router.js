const express = require('express');
const router = express.Router();
const multer = require('multer');

const statusController = require('../controllers/status.controller');



router.post('/v1/status', statusController.createStatus);
router.get('/v1/status', statusController.getStatus);

module.exports = router;