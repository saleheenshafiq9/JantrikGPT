const { textToSpeech } = require('../utils/azure-cognitive-services-speech');

module.exports.getTextFromSpeech = async (req, res, next) => {
    
    const { phrase, file } = req.query;
    const key = process.env.AZURE_COGNITIVE_SPEECH_KEY;
    const region = process.env.REGION;
    
    if (!key || !region || !phrase) res.status(404).send('Invalid query string');
    
    let fileName = null;
    
    // stream from file or memory
    if (file && file === true) {
        fileName = `./temp/stream-from-file-${timeStamp()}.mp3`;
    }
    
    const audioStream = await textToSpeech(key, region, phrase, fileName);
    res.set({
        'Content-Type': 'audio/mpeg',
        'Transfer-Encoding': 'chunked'
    });
    audioStream.pipe(res);
    
}