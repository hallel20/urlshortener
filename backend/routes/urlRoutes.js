const express = require('express');
const shortid = require('shortid');
const Url = require('../models/Url');
const router = express.Router();

// Create a short URL
router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const baseUrl = process.env.BASE_URL;
  
  const shortUrlId = shortid.generate();
  const shortUrl = `${baseUrl}/${shortUrlId}`;

  try {
    // Check if the URL has already been shortened
    let url = await Url.findOne({ originalUrl });
    if (url) return res.json(url);

    url = new Url({ originalUrl, shortUrlId });
    await url.save();
    
    res.json({ originalUrl, shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
});

// Redirect to original URL
router.get('/:shortUrlId', async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrlId: req.params.shortUrlId });
    if (url) return res.redirect(url.originalUrl);
    
    res.status(404).json('URL not found');
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
