const axios = require("axios");

const youtubesearch = (req, res, next) => {
  //   let data = [];

  const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=qualitytraining&type=video&key=${
    process.env.YOUTUBE_KEY
  }`;

  axios
    .get(baseUrl)
    .then(response => {
      // console.log(response.data.items);
      res.status(200).send(response.data.items);
      //   data = res.data.items;
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  youtubesearch
};
