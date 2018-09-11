/**
 * Primary file for the API
*/

var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;


var server = http.createServer(function(req, res) {

  // Get the HTTP Method
  var method = req.method.toLowerCase();

  // Get the headers as an object
  var headers = req.headers;

  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true);

  // Get the query string as an object { foo: 'buzz' }
  var queryStringObject = parsedUrl.query;

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the payload, if any
  var decoder = new StringDecoder('utf-8');
  var buffer = '';

  // Stream in a payload that is incoming
  req.on('data', function(data) {
    buffer += decoder.write(data)
  })

  // End Streaming
  req.on('end', function() {
    buffer += decoder.end();

    // Send the response
    res.end('Hello World\n');

    // Log the request path
    console.log('The request received on path: '+trimmedPath+ ' with method: '+method+' and with these query string parameters', queryStringObject);
    console.log('Headers', headers)
    console.log('Payload', buffer)
  })
});


server.listen(3000, function(){
  console.log('The server is listening on port 3000 now')
})

// curl localhost:3000/fogo/bar?foo=buzz