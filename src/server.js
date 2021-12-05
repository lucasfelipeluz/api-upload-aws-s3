require('dotenv').config()

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(80, () => {
  console.log('Server is running on PORT 3333');
});
