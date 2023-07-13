const sdk = require("microsoft-cognitiveservices-speech-sdk")

function speechToText(req, key, region) {
  let pushStream = sdk.AudioInputStream.createPushStream()

  //   req
  //     .on("data", function (arrayBuffer) {
  //       pushStream.write(arrayBuffer.slice())
  //     })
  //     .on("end", function () {
  //       pushStream.close()
  //     })

  pushStream.write(req.body)
  pushStream.close()

  // Set up the speech configuration
  const speechConfig = sdk.SpeechConfig.fromSubscription(key, region)

  let audioConfig = sdk.AudioConfig.fromStreamInput(pushStream)
  let speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig)
  speechRecognizer.recognizeOnceAsync(result => {
    console.log(`RECOGNIZED: Text=${result.text}`)

    speechRecognizer.close()
    speechRecognizer.close()

    return result.text
  })
}

module.exports = {
  speechToText,
}
