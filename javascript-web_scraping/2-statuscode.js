#!/usr/bin/node

const https = require('https');

const url = process.argv[2];

https.get(url, (response) => {
  const code_status = response.statusCode;
  console.log(`code: ${code_status}`);
  process.exit(0);
});
