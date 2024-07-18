const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/note', (req, res) => {
    res.json({ content: clipboardContent });
});

module.exports = app;
module.exports.handler = serverless(app);
