const PDFDocument = require("pdfkit");
const axios = require("axios");
const fs = require("fs");
const { getPrompt } = require("./gpt");
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dklm81t6j', 
  api_key: '141916698999624', 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


async function createPDFBook(texts, imageUrls, outputFilePath) {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream(outputFilePath);
  
  var gotASection = false, afterTitle = false, secondSection = false;
  var sectionCount = 0, imageCount = 0;
  doc.pipe(stream);
  let textss = texts.split('\n');
  // let textss = [
  //   'Title: "The Haunted House"',
  //   '',
  //   'Section 1: Introduction',
  //   'In this section, the book sets the stage for the ghostly adventure that lies ahead. It introduces the main characters and provides some background information on the haunted house.',
  //   '',
  //   'Section 2: The Mysterious Happenings',
  //   'This section delves into the strange occurrences that begin to take place in the haunted house. The author describes eerie noises, objects moving on their own, and unexplained phenomena that leave the characters puzzled and fearful.',
  //   '',
  //   'Section 3: The Ghostly Encounter',
  //   'In this section, the book builds up to the climax of the story - the encounter with the ghost. The author creates a suspenseful atmosphere as the characters come face to face with the supernatural entity haunting the house.',
  //   '',
  //   'Section 4: Uncovering the Truth',
  //   "Here, the book takes a detour from the ghostly events and focuses on the characters' quest to uncover the truth behind the haunting. They conduct research, interview locals, and gather clues to solve the mystery of the haunted house.",
  //   '',
  //   'Section 5: Confronting the Ghost',
  //   'In this section, the characters gather their newfound knowledge and prepare to confront the ghost once and for all. The author creates a thrilling and intense scene as the characters devise a plan to rid the house of its supernatural inhabitant.',
  //   '',
  //   'Section 6: The Resolution',
  //   "In the final section, the book brings closure to the ghost story. The characters' actions lead to the resolution of the haunting, and the haunted house is finally free from its spectral inhabitant. The author wraps up the story, providing a satisfying conclusion for young readers.",
  //   '',
  //   "By structuring the children's book on a ghost story with appropriate sectioning, in essay format, young readers can easily follow the progression of the plot and engage with the thrilling elements of the supernatural tale."
  // ]
  // console.log(textss)
  let fontSize = 12;
  var bold = false;
  for(var i=0;i<textss.length; i++){
    var text = textss[i].trim();
    if(text=='') continue;
    console.log('for: ', text);
    if(text.startsWith('Title')) {
      afterTitle = true;
      bold = true;
      text = text.substring(7);
      fontSize = 18;
    }
    else if(text.startsWith('Section')) {
      console.log('section paisi')
      sectionCount++;
      if(sectionCount==3){
        secondSection = true;
      }
      text = text.substring(11);
      bold = true;
      fontSize = 15;
      gotASection = true;
    }else if(text.startsWith('Introduction') || text.startsWith('Conclusion')) {
      fontSize = 15;
      gotASection = true;
      bold = true;
    }
    else {
      while(i<textss.length && !textss[i].trim().startsWith('Section')) {
       // text = text.trim().substring(0,text.length-1);
        console.log('while: ',textss[i])
        text += textss[i].trim();
        i++;
      }
      i--;
      fontSize = 12;
      bold = false;
    }
    if(bold==true){
      doc.font('Helvetica-Bold');
    }
    else {
      doc.font('Helvetica');
    }
    if(secondSection){
      if(imageCount<imageUrls.length) {
        doc.addPage();
        let img = imageUrls[imageCount++];
        let imageBytes = await getImageBytes(img);
        doc.image(imageBytes);
        doc.moveDown();
      }
      secondSection = false;
    }
    console.log(text);
    doc.fontSize(fontSize).text(text, { align: "left" });
    
    doc.moveDown();
    if(afterTitle){
      //console.log('2: ', imageCount)
      if(imageCount<imageUrls.length) {
        let img = imageUrls[imageCount++];
        let imageBytes = await getImageBytes(img);
        doc.image(imageBytes);
        doc.moveDown();
      }
      afterTitle = false;
    }
  }
  doc.end();
  return new Promise((resolve, reject) => {
    stream.on("finish", async () => {
      // Upload the PDF file to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(outputFilePath, {
        access_mode: 'public',
      });

      // Delete the local PDF file after uploading
      fs.unlinkSync(outputFilePath);
      console.log(uploadResult)
      // Resolve the promise with the Cloudinary upload result
      resolve(uploadResult);
    });

    stream.on("error", (error) => {
      console.error("Error creating PDF book:", error);
      reject(error);
    });
  });
}

async function getImageBytes(imageUrl) {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  return response.data;
}

module.exports = {
  createPDFBook
};

// // Example usage
// const texts = [
//   "This is the first page",
//   "This is the second page",
//   "This is the third page",
//   "hees",
//   "khsakjdhjkahjdkha",
//   "kasjkdjahdkjha"
// ];

// const imageUrls = [
//   "https://cdn.stablediffusionapi.com/generations/124cf68c-5d87-44b8-a56f-49d6f7a94539-0.png",
//   "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=1024x1024&w=is&k=20&c=ATqBHzO_cgsU8v6plHxVHTgE8zgK0BfEGzixY6JYg-c="
// ];

// const outputFilePath = "output.pdf";

// createPDFBook(texts, imageUrls, outputFilePath)
//   .then(() => {
//     console.log("PDF book created successfully.");
//   })
//   .catch((error) => {
//     console.error("Error creating PDF book:", error);
//   });

//   module.exports.createPDF = async (req, res, next) => {
//     var prompt = req.query.prompt + ' with appropriate sectioning, in essay format';
//     getPrompt(prompt);

//   }