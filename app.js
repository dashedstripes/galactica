const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static('client'))
app.use('/', express.static('build/contracts'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/index.html')))

app.listen(3000, () => console.log('http://localhost:3000'))