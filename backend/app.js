const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.use(bodyParser.json());
app.use('/', routes);
