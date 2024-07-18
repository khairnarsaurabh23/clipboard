const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let clipboardContent = '';

app.post('/copy', (req, res) => {
    clipboardContent = req.body.clipboardData || '';
    res.send('Content copied to clipboard on server');
});

module.exports = app;
module.exports.handler = serverless(app);
