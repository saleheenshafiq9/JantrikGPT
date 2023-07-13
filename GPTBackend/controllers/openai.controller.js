const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-oS3BhHZAG6BTnf7awb2a8SaV",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const { getPrompt } = require('../utils/gpt');


const axios = require('axios');

module.exports.getPrompt = async (req, res, next) => {
  // try {
  //   const response = await axios.post('https://api.openai.com/v1/chat/completions', {
  //     model: 'gpt-3.5-turbo',
  //     messages: [{ role: 'user', content: req.query.prompt }],
  //     temperature: 0.7
  //   }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY // Replace with your actual API key
  //     }
  //   });

  //   res.send(response.data.choices[0].message.content);
  // } catch (error) {
  //   console.error('Error sending chat request:', error.response.data);
  //   throw error;
  // }

  getPrompt(req.query.prompt).then(promptResponse => {
    // Send the prompt response to the user
    res.send(promptResponse);
  })
  .catch(error => {
    console.error('Error getting prompt:', error);
    res.sendStatus(500); // Send an appropriate error response
  });
}

