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
const openAIController = require('../controllers/openai.controller');
const ocrController = require('../controllers/ocr.controller');
const textToImageController = require('../controllers/textToImage.controller');
const userController = require('../controllers/user.controller');

router.post('/v1/status', statusController.createStatus);
router.get('/v1/status', statusController.getStatus);
router.post('/v1/speech2text', speechToTextController.getTextFromSpeech);
router.get('/v1/prompt', openAIController.getPrompt);
router.post('/v1/ocr', upload.single('file'), ocrController.getOCRContent);
router.get('/v2/image', openAIController.getImage);
router.get('/v1/resourceWithImage', openAIController.createPDF);

router.post('/v1/auth/register', userController.register);
router.post('/v1/auth/authenticate', userController.authenticate);
// router.get('/v1/fetch', textToImageController.fetchImage);

module.exports = router;