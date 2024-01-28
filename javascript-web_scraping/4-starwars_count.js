#!/usr/bin/node
const request = require('request');
const apiMovie = process.argv[2];

request.get(apiMovie, (error, response, body) => {
  if (error) {
    console.erroror(error);
    return;
  }

  let characterFilms = 0;
  const allMovies = JSON.parse(body).results;

  allMovies.forEach((movie) => {
    movie.characters.forEach((character) => {
      characterFilms += character.includes('/people/18') ? 1 : 0;
    });
  });

  console.log(characterFilms);
});
