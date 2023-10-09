function displayMessage(message) {
  if (message) {
    process.stdout.write('Hello Holberton School\n');
    process.stdout.write('We are going to learn Node JS today\n');
  }
}
module.exports = displayMessage;
