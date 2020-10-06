const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
   return res.sendFile(`${__dirname}/index.html`);
});

app.listen(3912);