const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/getUser', (req, res) => {
    // const { } = req.body;
    res.send({
        errorNo: 0,
        data: 'YEP'
    });
})

app.listen('8081', () => {
    console.log('Server is running on PORT 8081');
})