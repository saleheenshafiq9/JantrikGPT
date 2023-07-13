"use strict";

const request = require("request");
const fs = require('fs');
const { getPrompt } = require('../utils/gpt');
const openAIController = require('../controllers/openai.controller');

let key = process.env.OCR_KEY;
let endpoint = process.env.OCR_ENDPOINT;

var uriBase = endpoint + "vision/v3.1/ocr";

module.exports.getOCRContent = async (req, res, next) => {
  // Assuming the file is received in the request as "file"
  const file = req.file;

  // Read the file as a buffer
  const fileBuffer = fs.readFileSync(file.path);

  // Request parameters.
  const params = {
    language: "unk",
    detectOrientation: "true",
  };

  const options = {
    uri: uriBase,
    qs: params,
    body: fileBuffer,
    headers: {
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": key,
    },
  };
  let prompt = '';

  request.post(options, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    let jsonResponse = JSON.parse(body);
    jsonResponse.regions.forEach(region => {
      region.lines.forEach(line => {
        line.words.forEach(word => {
          prompt += word.text + " ";
        });
      });
    });
    console.log(prompt)
    getPrompt(prompt).then(promptResponse => {
      // Send the prompt response to the user
      res.send(promptResponse);
    })
    .catch(error => {
      console.error('Error getting prompt:', error);
      res.sendStatus(500); // Send an appropriate error response
    });
  });
};
