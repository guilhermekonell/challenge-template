const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
  // TODO
});

app.post('/projects', (req, res) => {
  // TODO
});

module.exports = app;
