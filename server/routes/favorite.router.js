const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
//   WHY DOESN'T THIS WORK?
//   const queryText = `SELECT favorites.id, favorites.url, category.id, category.name FROM favorites
//   JOIN category ON favorites.category_id = category.id`
  const queryText = 
  `SELECT favorites.id, favorites.url, category.name
  FROM category
  JOIN favorites 
  ON favorites.category_id = category.id
  ORDER BY favorites.id
`
  pool.query(queryText)
    .then(results => res.send(results.rows))
    .catch(console.error)
});

// add a new favorite 
router.post('/', (req, res) => {
  const query = `INSERT INTO favorites (url) VALUES ($1)`;
  pool.query(query,[req.body.url])
    .then(() => res.sendStatus(200))
    .catch(console.error)
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
