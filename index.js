'use strict'

const HTTP = require('http')

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const HOSTNAME = '127.0.0.1'
const PORT = 3333;

const express = require('express');
const app = express();
const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello!');
    rl.question('What is your name?', function (name) {
    })
});

app.get('/greet/:handle', (req, res) => {
    const {handle} = req.params;
    res.send(`What\'\s up ${handle}?`);
});

