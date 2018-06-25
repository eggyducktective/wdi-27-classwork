const http = require('http'); // import http from 'http'

// console.log(process.argv);
// gives this a default value
const port = process.argv[2] || 8000 ;

http.createServer( (req, res) => {

  console.log('request made', req.url);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World WOOOOOOOOOOOOOOOOOO');
})
.listen(port);

console.log(`Ready to accept EGGS on port ${8000}`);
