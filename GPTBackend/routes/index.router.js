const express = require('express');
const router = express.Router();
const multer = require('multer');

const statusController = require('../controllers/status.controller');
const speechToTextController = require('../controllers/text-speech.controller')
const gptController = require('../controllers/gpt.controller')

router.post('/v1/status', statusController.createStatus);
router.get('/v1/status', statusController.getStatus);
router.post('/v1/speech2text', speechToTextController.getTextFromSpeech);
router.get('/v1/prompt', gptController.getPrompt )

module.exports = router;