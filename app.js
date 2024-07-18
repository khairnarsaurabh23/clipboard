const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let clipboardContent = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to display the main page with a button to copy clipboard content
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route to handle saving clipboard content
app.post('/copy', (req, res) => {
    clipboardContent = req.body.clipboardData || '';
    res.send('Content copied to clipboard on server');
});

// Route to display the copied content
app.get('/note', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Copied Content</title>
            </head>
            <body>
                <h1>Copied Content</h1>
                <pre>${clipboardContent}</pre>
                <a href="/">Back</a>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
