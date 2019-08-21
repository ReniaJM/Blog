const express = require('express');
const router = require('./routes/index');
const newsRouter = require('./routes/news');

let app = express();
const PORT = process.env.PORT || 5000;

app.use('./', router);
app.use('./news', newsRouter);

app.listen(PORT, function () {
    console.log(`local server ${PORT}`)
});