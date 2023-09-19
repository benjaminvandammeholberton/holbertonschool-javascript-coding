#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const newDict = {};
    for (const item of data) {
      if (item.completed === true) {
        if (!newDict[item.userId]) {
          newDict[item.userId] = 1;
        } else {
          newDict[item.userId] = newDict[item.userId] + 1;
        }
      }
    }
    console.log(newDict);
  }
});
