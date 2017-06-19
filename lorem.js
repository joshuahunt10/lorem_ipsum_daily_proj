const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum');
var output = loremIpsum();


app.get('/', function(req, res){
  res.send('<html><body><h1>Click the link for the generated text</h1><a href="/lorem-ipsum/2">Generate!</a></body></html>')
});

app.get('/lorem-ipsum/:count', function(req, res){
  res.send(
    output = loremIpsum({
    count: req.params.count,
    units: 'paragraphs',
    suffix: '<br>'
     })
   )
});

app.listen(3000, function(){
  console.log('Sucessfully started!');
});
