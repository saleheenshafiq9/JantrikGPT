var request = require('request');

module.exports.createImage = (req, res, next) => {
  var options = {
    'method': 'POST',
    'url': 'https://stablediffusionapi.com/api/v3/text2img',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": process.env.STABLE_DIFFUSION_API_KEY_2,
      "prompt": req.query.prompt,
      "negative_prompt": null,
      "width": "512",
      "height": "512",
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
  
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const responseBody = JSON.parse(response.body);
    if(responseBody.status=="success"){
      console.log('success')
      res.send(response.body);
    }
    else {
      console.log(response.body)
      setTimeout(() => {
        let imageObj = fetchImage(responseBody.id);
        res.send(imageObj);
      }, responseBody['eta'] * 1000 + 1000);
      console.log(responseBody['eta'] * 1000 + 1000);
    }
  });
}

function fetchImage(id){
  var options = {
    'method': 'POST',
    'url': 'https://stablediffusionapi.com/api/v4/dreambooth/fetch',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": process.env.STABLE_DIFFUSION_API_KEY_2,
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