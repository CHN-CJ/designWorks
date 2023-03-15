const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

app.listen('8081', () => {
    console.log('Server is running on PORT 8081');
})