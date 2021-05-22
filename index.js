const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
   return res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
	console.log("Local Server is running on http://localhost:" + PORT);
});