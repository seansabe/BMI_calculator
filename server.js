const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//const ejs = require('ejs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.post('/', (req, res) => {
    const { num1, num2, num3 } = req.body;
    console.log(req.body);
    const result = parseInt(num2) / ((parseInt(num3) * parseInt(num3)) / 10000);
    res.render(__dirname + '/public/bmi', { result: result.toFixed(1) });
});

app.get('/', (req, res) => {
    res.render(__dirname + '/public/bmi', { result: null });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});