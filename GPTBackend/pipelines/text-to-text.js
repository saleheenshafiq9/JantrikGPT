// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-oS3BhHZAG6BTnf7awb2a8SaV",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const axios = require("axios")

const textToText = async prompt => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.OPENAI_API_KEY, // Replace with your actual API key
        },
      }
    )

    return response.data.choices[0].message.content

    // res.send(response.data.choices[0].message.content)
  } catch (error) {
    console.error("Error sending chat request:", error.response.data)
    throw error
  }
}

module.exports = {
  textToText,
}
