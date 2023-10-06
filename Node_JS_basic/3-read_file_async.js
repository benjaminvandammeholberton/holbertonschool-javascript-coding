const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Cannot load the database');
        reject(err);
        return;
      }
      const raws = data.split('\n');
      const parsedData = [];

      for (let i = 1; i < raws.length; i += 1) {
        const row = raws[i].trim();
        const columns = row.split(',');

        const student = {
          firstname: columns[0].trim(),
          lastname: columns[1].trim(),
          age: columns[2].trim(),
          field: columns[3].trim(),
        };
        parsedData.push(student);
      }
      const numberOfStudents = parsedData.length;
      console.log(`Number of students: ${numberOfStudents}`); // Change to console.log

      const fieldsName = [];

      for (let i = 0; i < parsedData.length; i += 1) {
        const student = parsedData[i];
        if (!fieldsName.includes(student.field)) {
          fieldsName.push(student.field);
        }
      }

      const fieldDictionary = {};
      for (let i = 0; i < fieldsName.length; i += 1) {
        const fieldName = fieldsName[i];
        const listStudent = parsedData
          .filter((student) => student.field === fieldName)
          .map((student) => student.firstname);
        fieldDictionary[fieldName] = listStudent;
        console.log(
          `Number of students in ${fieldName}: ${
            listStudent.length
          }. List: ${listStudent.join(', ')}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
