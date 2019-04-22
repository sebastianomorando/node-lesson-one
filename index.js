const express = require('express');

const app = express();

const counter = {
	count: 0,
	hello: "world"
}

app.use(express.static('public'));

app.get('/api/count', function(req, res) {
  res.send(counter);
});

app.post('/api/count', function(req, res) {
  counter.count = counter.count + 1;
  res.send(counter);
});

app.listen(3000, function() {
  console.log('Il server è partito ed è in ascolto sulla porta 3000');
});


