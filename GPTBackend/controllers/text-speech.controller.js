const { textToSpeech } = require("../pipelines/azure-cognitive-services-speech")

module.exports.getSpeechFromText = async (req, res, next) => {
  //   const {  file } = req.query
  const key = process.env.AZURE_COGNITIVE_SPEECH_KEY
  const region = process.env.REGION

  const phrase = "hello world"

  //   if (!key || !region || !phrase) res.status(404).send("Invalid query string")

  let fileName = null

  // stream from file or memory
  //   if (file && file === true) {
  //     fileName = `./temp/stream-from-file-${timeStamp()}.mp3`
  //   }

  const audioStream = await textToSpeech(key, region, phrase, fileName)
  res.set({
    "Content-Type": "audio/mpeg",
    "Transfer-Encoding": "chunked",
  })
  audioStream.pipe(res)
}
