require('dotenv').config();

const express = require('express');

const router = require('./app/routers/router')
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

app.use(router);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});
