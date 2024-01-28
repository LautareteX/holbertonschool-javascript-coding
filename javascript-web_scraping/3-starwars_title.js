#!/usr/bin/node
const request = require('request');
const apiUrl = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
