const express = require('express');
const router = express.Router();
const multer = require('multer');

const DIR = './uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName =  Date.now().toString() + file.originalname.toLowerCase().split(' ').join('-')
    cb(null, fileName)
  },
});

const upload = multer({
    storage: storage,
});

router.use(express.static(__dirname + "./uploads/"));

const statusController = require('../controllers/status.controller');
const speechToTextController = require('../controllers/text-speech.controller');
const gptController = require('../controllers/gpt.controller');
const ocrController = require('../controllers/ocr.controller');

router.post('/v1/status', statusController.createStatus);
router.get('/v1/status', statusController.getStatus);
router.post('/v1/speech2text', speechToTextController.getTextFromSpeech);
router.get('/v1/prompt', gptController.getPrompt);
router.post('/v1/ocr', upload.single('file'), ocrController.getOCRContent)

module.exports = router;