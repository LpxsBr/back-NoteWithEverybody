const express = require('express');
var cors = require('cors');
const { serverPort } = require('./utils/config');
const { createMsg, con, viewMsg } = require('./database');

const app = express();
app.use(express.json());
app.use(cors());
var port = serverPort || 8080;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', (req, res) => res.json('hello!'))
app.post('/api/post', createMsg)
app.get('/api/post', viewMsg)

con()
    .then(
        app.listen(port, (req, res) => console.log(`connected in the ${port}`))
    )
    .catch(
        (err) => console.log(err)
    )
