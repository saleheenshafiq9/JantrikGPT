const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-oS3BhHZAG6BTnf7awb2a8SaV",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const { getPrompt } = require('../utils/gpt');


module.exports.getPrompt = async (req, res, next) => {
  
  getPrompt(req.query.prompt).then(promptResponse => {
    // Send the prompt response to the user
    res.send(promptResponse);
  })
  .catch(error => {
    console.error('Error getting prompt:', error);
    res.sendStatus(500); // Send an appropriate error response
  });
}

