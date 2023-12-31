#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    const codeStatus = response.statusCode;
    console.log(`code: ${codeStatus}`);
  }
});
