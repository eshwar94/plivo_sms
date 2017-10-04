var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router()

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 3000));
app.all('/preceive/', function(request, response) {
    // Sender's phone number
    var from_number = request.body.From || request.query.From;
    // Receiver's phone number - Plivo number
    var to_number = request.body.To || request.query.To;
    // The text which was received
    var text = request.body.Text || request.query.Text;
    var red = 3;
    console.log('Message received - From: ', from_number, ', To: ', to_number, ', Text: ', text);
    response.json({
    	"SMS":"Message received",
    	"Sender": from_number,
    	"Receiver": to_number,
    	"Text": text
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
