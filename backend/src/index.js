const express = require('express');
const querys = require('./querys');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// settings
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    res.send("AditaCar API");
});

app.use(querys);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});



