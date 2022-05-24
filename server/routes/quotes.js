const express = require('express');
const quoteModel = require('../models/Quote');
const router = express.Router();

// Get all quotes (for testing purposes)
router.get('/', async (request, response) => {
    const quotes = await quoteModel.find();
    try {
        response.send(quotes);
      } catch (error) {
        response.status(500).send(error);
      }
})

// Get random quote from any language category
router.get('/random', async (request, response) => {
  const randomQuote = await quoteModel.aggregate([{ $sample: { size: 1 } }])
  try {
      response.send(randomQuote);
    } catch (error) {
      response.status(500).send(error);
    }
})

// Get random ancient greek quote
router.get('/randomgreek', async (request, response) => {
  const randomSpecificLanguage = await quoteModel.aggregate([
    { $match: { languageCategory: "ancient greek" } }, 
    { $sample: { size: 1 } }
    ])
    try {
      response.send(randomSpecificLanguage);
    } catch (error) {
      response.status(500).send(error);
    }
})

// Get random latin quote
router.get('/randomlatin', async (request, response) => {
  const randomSpecificLanguage = await quoteModel.aggregate([
    { $match: { languageCategory: "latin" } }, 
    { $sample: { size: 1 } }
    ])
    try {
      response.send(randomSpecificLanguage);
    } catch (error) {
      response.status(500).send(error);
    }
})

// Get random old english quote
router.get('/randomoldeng', async (request, response) => {
  const randomSpecificLanguage = await quoteModel.aggregate([
    { $match: { languageCategory: "old english" } }, 
    { $sample: { size: 1 } }
    ])
    try {
      response.send(randomSpecificLanguage);
    } catch (error) {
      response.status(500).send(error);
    }
})



module.exports = router;