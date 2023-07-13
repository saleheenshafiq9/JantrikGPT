const express = require("express")
const router = express.Router()
const multer = require("multer")

const statusController = require("../controllers/status.controller")
const speechToTextController = require("../controllers/text-speech.controller")

router.post("/v1/status", statusController.createStatus)
router.get("/v1/status", statusController.getStatus)
router.get("/v1/omnigpt", speechToTextController.getSpeechFromText)

module.exports = router
