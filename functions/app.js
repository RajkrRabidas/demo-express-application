const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('Hello! my name is Raj, I am a software developer');
});

module.exports.handler = serverless(app);
