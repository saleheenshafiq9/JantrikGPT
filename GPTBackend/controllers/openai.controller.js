const { Configuration, OpenAIApi } = require("openai");
const path = require('path');
const configuration = new Configuration({
  organization: "org-oS3BhHZAG6BTnf7awb2a8SaV",
  apiKey: process.env.OPENAI_API_KEY,
});
const { getPrompt } = require("../utils/gpt");
const { createPDFBook } = require("../utils/pdf-creator")
const openai = new OpenAIApi(configuration);
const { createImage } = require("../utils/createImage")

module.exports.getPrompt = async (req, res, next) => {
  
  getPrompt(req.query.prompt)
    .then((promptResponse) => {
      // Send the prompt response to the user
      res.send(promptResponse);
    })
    .catch((error) => {
      console.error("Error getting prompt:", error);
      res.sendStatus(500); // Send an appropriate error response
    });
};

module.exports.getImage = async (req, res, next) => {
  const configuration = new Configuration({
    apiKey: process.env.DALL_E_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.query.prompt,
    n: 1,
    size: "1024x1024",
  });
  // Send back image url
  res.send(response.data.data[0].url);
};

module.exports.createPDF = async (req, res, next) => {
  var prompt = req.query.prompt;
  if(req.query.prompt.includes('book')){
    prompt += ` with appropriate sectioning, in essay format, dont put hyphen before any line, format: title: title of book
    section 1: example section
    section content 
    section 2: example section
    section content
    `;
  }
  try {
    // const image1 = await createImage(req.query.prompt);
    // const image2 = await createImage(req.query.prompt);
    // const bookContent = await getPrompt(prompt);
    let img = [];
    let imageURLs = [];
    [img[0], img[1], img[2], bookContent] = await Promise.all(
     [
      createImage(req.query.prompt),
      createImage(req.query.prompt),
      createImage(req.query.prompt),
      getPrompt(prompt)]
    )
    if(img[0].success==false && img[1].success==false && img[2].success==false) {
      img = [{
        success: true,
        url: 'https://cdn.stablediffusionapi.com/generations/2da5c302-4c26-4561-8054-af24ce04c412-0.png'
        }, {
          success: true,
          url: 'https://cdn.stablediffusionapi.com/generations/d5e230ae-ed0d-4119-a683-742007de2857-0.png'
        }, { success: false, url: '' }]
    }
    img.forEach(element => {
      if(element.success){
        imageURLs.push(element.url);
      }
    });
    console.log(img[0], img[1], img[2], bookContent)
    let splittedPrompt = req.query.prompt.split(' ')
    let promptSize = splittedPrompt.length;
    let bookName = splittedPrompt[promptSize-2] + splittedPrompt[promptSize-1];
    let uploadresult = await createPDFBook(bookContent, imageURLs, `${bookName}.pdf`);
    
    res.send(
      {
        bookContent: bookContent,
        imageURLs: imageURLs,
        pdf: uploadresult.url
      }
    )
  } catch (error) {
    console.error("Error getting prompt:", error);
    res.sendStatus(500); // Send an appropriate error response
  }
}
