const express = require('express')
const { port } = require('./configuration');

const app = express();

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly');
});

app.listen(port, () => {
    console.log('Strated auth service');
})