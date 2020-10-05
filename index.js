const express = require('express');
const app = express();

app.use(express.static('static', 'static'));

app.get('/', (req, res) => {
   return res.render('index.html');
});

app.listen(2000);