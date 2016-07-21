var express = require('express')
var app = express()


app.get('/', function(req,res) {
  res.send('Hello Queenstown')
})

app.listen(3000, function(){
  console.log('We have lift off on port 3000')
})
