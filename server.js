//Express.js Dev Server

const express = require('express');

const app = express();

app.use(express.static('src/', { extensions: ['html', 'html']}));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});