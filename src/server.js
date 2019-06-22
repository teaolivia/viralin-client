var express = require('express')
var path = require('path')
var cookieParser = require('cookieParser')


const app = express();

app.get('')
app.use('/', (req, res) => {
  res.send(`Server says ${(new Date).toString()}`)
})

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})