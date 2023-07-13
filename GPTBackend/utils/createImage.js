const request = require('request');
const util = require('util');

const requestPromise = util.promisify(request);

async function createImage(prompt) {
    console.log(prompt)
  var options = {
    'method': 'POST',
    'url': 'https://stablediffusionapi.com/api/v3/text2img',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": process.env.STABLE_DIFFUSION_API_KEY_3,
      "prompt": prompt,
      "negative_prompt": null,
      "width": "256",
      "height": "256",
      "samples": "1",
      "num_inference_steps": "20",
      "seed": null,
      "guidance_scale": 7.5,
      "safety_checker": "yes",
      "multi_lingual": "no",
      "panorama": "no",
      "self_attention": "no",
      "upscale": "no",
      "embeddings_model": null,
      "webhook": null,
      "track_id": null
    })
  };
  
  try {
    const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', options);
    const responseBody = await response.json();

    if (responseBody.status === "success") {
      return {
        success: true,
        url: responseBody.output[0]
      };
    } else {
        console.log(responseBody)
        return {
            success: false,
            url: ''
          };
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchImage(id){
  var options = {
    'method': 'POST',
    'url': 'https://stablediffusionapi.com/api/v4/dreambooth/fetch',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": process.env.STABLE_DIFFUSION_API_KEY_3,
      "request_id": id
    })
  };
  console.log('i am called')
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body)
    return response.body;
  });
}

module.exports = {
    createImage
};