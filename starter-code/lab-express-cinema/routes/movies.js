const express = require('express');
const router  = express.Router();
const Movies   = require("../models/movies");

router.get('/movies', (req, res, next) => {
  Movies.find().then((listOfMovies) => {
    res.render('movies', {moviesArray: listOfMovies});
  }).catch((err) => {
    res.send(err);
  });
});

router.get('/movies/:id', (req, res, next)=>{
  const theID = req.params.id;
  Movies.findById(theID)
  .then((theMovie)=>{
    res.render('_aMoviePartial', {movie: theMovie});
  })
  .catch((err)=>{
    res.send(err);
  });
});

module.exports = router;
