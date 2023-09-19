#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const fs = require('fs');
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error(error);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
