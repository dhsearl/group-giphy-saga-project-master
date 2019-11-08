const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

// return all favorite images
router.post('/', (req, res) => {
  console.log('GIPHY get was hit');
  console.log(process.env.GIPHY_KEY);
  console.log(req.body);
  
  

  axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: process.env.GIPHY_KEY,
      q: req.body,
    }
  }
  ).then(result => {
    console.log(result.data);

  }).catch(error => {
    // console.log('Giphy GET error', error);

  })


  res.sendStatus(200);
});


module.exports = router;
