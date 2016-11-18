var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var port       = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function() {
  console.log("Running server on port", port);
});
