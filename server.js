const path = require('path');
const express = require('express');

const app = express();
const {
  env: { PORT: port = 3000 },
} = process;

// define path to public static files
const publicDirectoryPath = path.join(__dirname, '/public');

// set path to static files
app.use(express.static(publicDirectoryPath));

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
