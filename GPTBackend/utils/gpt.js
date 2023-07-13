const axios = require('axios')
async function getPrompt(prompt) {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY // Replace with your actual API key
        }
      });
  
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error sending chat request:', error);
      throw error;
    }
  }

module.exports = {
    getPrompt
};