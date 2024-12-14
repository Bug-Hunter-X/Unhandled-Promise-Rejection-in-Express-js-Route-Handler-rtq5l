const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // The bug is here: Asynchronous operation without proper handling
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  });
});

function someAsyncOperation() {
  // Simulates an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});