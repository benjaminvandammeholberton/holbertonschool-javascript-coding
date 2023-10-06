const fs = require('fs');
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const messages = [];
        let message;
        const content = data.toString().split('\n');
        console.log(content);

        resolve(messages);
      }
    });
  });
}
readDatabase('./database.csv');
